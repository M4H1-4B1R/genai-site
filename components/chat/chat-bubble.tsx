import { parseAnswer } from "@/lib/chat/render-answer";

type ChatBubbleProps = {
  role: "user" | "assistant";
  content: string;
};

export function ChatBubble({ role, content }: ChatBubbleProps) {
  if (role === "user") {
    return (
      <div className="flex justify-end">
        <p className="max-w-[338px] border border-[#2a333a] bg-[#1b2126] px-[15px] py-[9px] text-right text-[16px] font-medium leading-[22px] text-[#e4e4e7]">
          {content}
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-[10px] rounded-bl-[12px] rounded-br-[12px] rounded-tl-[2px] rounded-tr-[12px] border border-[#21272d] bg-[#14181b] p-[15px]">
      {parseAnswer(content).map((node, index) =>
        node.type === "eyebrow" ? (
          <p key={index} className="flex items-center gap-[6px] text-[12px] font-medium leading-[19.5px] text-[#fbbf24]">
            <span aria-hidden="true" className="size-[6px] shrink-0 rounded-full bg-[#fbbf24]" />
            {node.text}
          </p>
        ) : (
          <p
            key={index}
            className="whitespace-pre-line text-[16px] leading-[19.5px] text-[#d4d4d8]"
          >
            {node.parts.map((part, partIndex) =>
              part.bold ? (
                <strong key={partIndex} className="font-bold text-[#f4f4f5]">
                  {part.text}
                </strong>
              ) : (
                <span key={partIndex}>{part.text}</span>
              ),
            )}
          </p>
        ),
      )}
    </div>
  );
}
