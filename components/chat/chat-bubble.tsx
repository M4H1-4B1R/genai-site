import { parseAnswer } from "@/lib/chat/render-answer";

type ChatBubbleProps = {
  role: "user" | "assistant";
  content: string;
};

export function ChatBubble({ role, content }: ChatBubbleProps) {
  if (role === "user") {
    return (
      <div className="flex justify-end">
        <p className="max-w-[85%] rounded-xl bg-[#1d2124] px-4 py-3 text-[15px] leading-relaxed text-text">
          {content}
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-line bg-panel px-4 py-3.5 text-[15px] leading-relaxed text-text">
      {parseAnswer(content).map((node, index) =>
        node.type === "eyebrow" ? (
          <p key={index} className="mb-2 flex items-center gap-2 font-mono text-[12px] text-orange">
            <span aria-hidden="true">•</span>
            {node.text}
          </p>
        ) : (
          <p key={index} className="whitespace-pre-line [&+p]:mt-2">
            {node.parts.map((part, partIndex) =>
              part.bold ? <strong key={partIndex}>{part.text}</strong> : <span key={partIndex}>{part.text}</span>,
            )}
          </p>
        ),
      )}
    </div>
  );
}
