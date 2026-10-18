import Anthropic from "@anthropic-ai/sdk";

import { checkRateLimit, clientIpFromHeaders } from "@/lib/chat/rate-limit";
import { SYSTEM_PROMPT } from "@/lib/chat/system-prompt";
import { validateChatRequest } from "@/lib/chat/validate";

export const maxDuration = 30;

const RATE_LIMITED = "Getting a lot of questions right now — try again in a minute, or talk to our team.";
const BAD_REQUEST = "Something went wrong with that message.";
const UNAVAILABLE = "I can't answer right now. You can reach the team at /contact.";

function plain(body: string, status: number, headers: Record<string, string> = {}) {
  return new Response(body, {
    status,
    headers: { "content-type": "text/plain; charset=utf-8", ...headers },
  });
}

export async function POST(request: Request) {
  const limit = checkRateLimit(clientIpFromHeaders(request.headers));
  if (!limit.allowed) {
    return plain(RATE_LIMITED, 429, { "retry-after": String(limit.retryAfterSeconds) });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return plain(BAD_REQUEST, 400);
  }

  const parsed = validateChatRequest(body);
  if (!parsed.ok) return plain(BAD_REQUEST, 400);

  try {
    // Constructed per request: at module scope a missing key throws on import,
    // which bypasses the catch below and leaks a 500 page instead of our copy.
    const client = new Anthropic();
    const stream = client.messages.stream({
      model: "claude-sonnet-5-5",
      max_tokens: 1024,
      system: [{ type: "text", text: SYSTEM_PROMPT, cache_control: { type: "ephemeral" } }],
      messages: parsed.messages,
      thinking: { type: "between_tools" },
      output_config: { effort: "low" },
    });

    // Pull the first event here, inside the try: the stream is lazy, so an auth
    // or API failure only surfaces on first read. Awaiting it before the Response
    // is built is what lets upstream errors become a 500 instead of a truncated 200.
    const iterator = stream[Symbol.asyncIterator]();
    const first = await iterator.next();

    const encoder = new TextEncoder();
    const readable = new ReadableStream<Uint8Array>({
      async start(controller) {
        const push = (event: Anthropic.MessageStreamEvent) => {
          if (event.type === "content_block_delta" && event.delta.type === "text_delta") {
            controller.enqueue(encoder.encode(event.delta.text));
          }
        };
        try {
          if (!first.done) push(first.value);
          for (let next = await iterator.next(); !next.done; next = await iterator.next()) {
            push(next.value);
          }
          const final = await stream.finalMessage();
          if (process.env.NODE_ENV !== "production") {
            console.log("[chat] cache_read_input_tokens:", final.usage.cache_read_input_tokens);
          }
        } catch (error) {
          // The status is already sent, so the only way to tell the visitor is in-band.
          console.error("[chat] stream failed", error);
          controller.enqueue(encoder.encode(" — sorry, that answer was cut short."));
        } finally {
          controller.close();
        }
      },
    });

    return new Response(readable, {
      headers: { "content-type": "text/plain; charset=utf-8", "cache-control": "no-store" },
    });
  } catch (error) {
    if (error instanceof Anthropic.RateLimitError) console.error("[chat] upstream rate limit", error.status);
    else if (error instanceof Anthropic.AuthenticationError) console.error("[chat] bad or missing API key");
    else if (error instanceof Anthropic.APIError) console.error("[chat] api error", error.status, error.message);
    else console.error("[chat] unexpected", error);
    return plain(UNAVAILABLE, 500);
  }
}
