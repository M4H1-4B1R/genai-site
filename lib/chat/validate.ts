export type ChatMessage = { role: "user" | "assistant"; content: string };

export type ValidationResult =
  | { ok: true; messages: ChatMessage[] }
  | { ok: false; error: string };

const MAX_MESSAGES = 10;
const MAX_CONTENT_CHARS = 1000;

export function validateChatRequest(body: unknown): ValidationResult {
  if (typeof body !== "object" || body === null) return { ok: false, error: "Malformed body." };

  const { messages } = body as { messages?: unknown };
  if (!Array.isArray(messages)) return { ok: false, error: "Expected a messages array." };
  if (messages.length < 1 || messages.length > MAX_MESSAGES) {
    return { ok: false, error: `Expected between 1 and ${MAX_MESSAGES} messages.` };
  }

  for (const message of messages) {
    if (typeof message !== "object" || message === null) {
      return { ok: false, error: "Malformed message." };
    }
    const { role, content } = message as { role?: unknown; content?: unknown };
    if (role !== "user" && role !== "assistant") return { ok: false, error: "Unknown role." };
    if (typeof content !== "string") return { ok: false, error: "Message content must be text." };
    if (content.length > MAX_CONTENT_CHARS) return { ok: false, error: "Message is too long." };
    if (content.trim() === "") return { ok: false, error: "Message is empty." };
  }

  if (messages[messages.length - 1].role !== "user") {
    return { ok: false, error: "The last message must be from the user." };
  }

  return { ok: true, messages: messages as ChatMessage[] };
}
