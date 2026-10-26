import Image from "next/image";
import Link from "next/link";
import type { RefObject } from "react";

import { ChatBubble } from "@/components/chat/chat-bubble";
import type { ChatMessage } from "@/lib/chat/validate";

const GREETING =
  "Hi, I can answer questions about GenAILabs services, our work, and how an engagement starts.";

export const SUGGESTIONS = [
  "What do you build?",
  "Show me your work",
  "How does an engagement start?",
] as const;

type ChatPanelProps = {
  panelId: string;
  messages: ChatMessage[];
  draft: string;
  pending: boolean;
  inputRef: RefObject<HTMLInputElement | null>;
  threadRef: RefObject<HTMLDivElement | null>;
  onDraftChange: (value: string) => void;
  onSubmit: (text: string) => void;
  onClose: () => void;
};

export function ChatPanel({
  panelId,
  messages,
  draft,
  pending,
  inputRef,
  threadRef,
  onDraftChange,
  onSubmit,
  onClose,
}: ChatPanelProps) {
  return (
    <div
      id={panelId}
      role="dialog"
      aria-modal="false"
      aria-label="GenAILabs assistant"
      className="flex w-[530px] flex-col overflow-clip rounded-[4px] border border-[#21272c] bg-[#101315] shadow-[0px_24px_60px_-15px_rgba(0,0,0,0.85)] backdrop-blur-[12px] max-h-[calc(100dvh_-_48px)] max-[640px]:w-full max-[640px]:max-h-[calc(var(--vvh,100dvh)_-_48px)]"
    >
      <div className="flex shrink-0 items-center justify-between border-b border-[#1c2227] bg-[rgba(16,19,21,0.9)] px-[20px] pb-[17px] pt-[16px] max-[640px]:px-4 max-[640px]:pb-3 max-[640px]:pt-3">
        <div className="flex items-center gap-[14px]">
          <div className="relative flex size-[44px] items-center justify-center rounded-[12px] border border-[#22282d] bg-[#090b0c] max-[640px]:size-9">
            <div aria-hidden="true" className="absolute inset-0 rounded-[12px] bg-[rgba(245,158,11,0.05)]" />
            <Image
              src="/figma/chat/logo-header.png"
              alt=""
              width={32}
              height={16}
              className="h-[16px] w-[32px]"
              aria-hidden="true"
            />
          </div>
          <div>
            <p className="text-[14px] font-bold leading-[20px] tracking-[0.35px] text-[#f4f4f5]">
              GenAILabs Assistant
            </p>
            <span className="flex items-center gap-[6px] pt-[2px]">
              <span aria-hidden="true" className="size-[8px] rounded-full bg-[#22c55e]" />
              <span className="text-[12px] font-medium leading-[16px] text-[#a1a1aa]">Online</span>
            </span>
          </div>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close chat assistant"
          className="rounded-[8px] p-[6px] hover:bg-[#1b2126]"
        >
          <Image src="/figma/chat/close.svg" alt="" width={16} height={16} unoptimized aria-hidden="true" />
        </button>
      </div>

      <div
        ref={threadRef}
        aria-live="polite"
        /* Fixed height, not max-height: the panel must not resize when the
           bot streams a reply — content scrolls inside instead. Mobile reads
           the visual viewport (`--vvh`, set by ChatWidget) so it shrinks to
           whatever is left above the on-screen keyboard. */
        className="flex h-[min(460px,52dvh)] min-h-0 flex-col gap-[16px] overflow-y-auto px-[20px] pb-[7px] pt-[20px] max-[640px]:h-[clamp(96px,calc(var(--vvh,100dvh)_-_200px),46dvh)] max-[640px]:px-4"
      >
        <div className="max-w-[374px] border border-[#21272d] bg-[#14181b] px-[17px] pb-[17px] pt-[16px]">
          <p className="text-[16px] leading-[22.75px] text-[#e4e4e7]">{GREETING}</p>
        </div>

        {messages.length === 0 && (
          <div className="flex flex-col pt-[4px]">
            <div className="flex gap-[10px]">
              {SUGGESTIONS.slice(0, 2).map((suggestion) => (
                <button
                  key={suggestion}
                  type="button"
                  onClick={() => onSubmit(suggestion)}
                  className="border border-[#23292e] bg-[#14181b] px-[15px] py-[11px] text-[16px] leading-[16px] text-[#d4d4d8] hover:border-[#2f363c]"
                >
                  {suggestion}
                </button>
              ))}
            </div>
            <div className="pt-[10px]">
              <button
                type="button"
                onClick={() => onSubmit(SUGGESTIONS[2])}
                className="flex items-center justify-between gap-[12px] border-2 border-[#ea9a26] bg-[#14181b] px-[18px] py-[12px] text-[16px] font-medium leading-[16px] text-[#f4f4f5] drop-shadow-[0px_0px_6px_rgba(234,154,38,0.15)]"
              >
                {SUGGESTIONS[2]}
                <Image src="/figma/chat/chip-arrow.svg" alt="" width={14} height={14} unoptimized aria-hidden="true" />
              </button>
            </div>
          </div>
        )}

        {messages.length > 0 && (
          <div className="flex flex-col gap-[14px] border-t border-[rgba(28,34,39,0.7)] pt-[13px]">
            {messages.map((message, index) => (
              <ChatBubble key={index} role={message.role} content={message.content} />
            ))}
            {pending && messages[messages.length - 1]?.role === "user" && (
              <p className="text-[12px] leading-[19.5px] text-[#71717a]">Thinking…</p>
            )}
          </div>
        )}
      </div>

      <div className="flex shrink-0 flex-col gap-[14px] border-t border-[#1b2126] bg-[#101315] px-[16px] pb-[16px] pt-[17px] max-[640px]:gap-2.5 max-[640px]:px-3.5 max-[640px]:pb-3.5 max-[640px]:pt-3">
        <form
          className="flex items-center gap-[8px]"
          onSubmit={(event) => {
            event.preventDefault();
            onSubmit(draft);
          }}
        >
          <input
            ref={inputRef}
            value={draft}
            onChange={(event) => onDraftChange(event.target.value)}
            disabled={pending}
            maxLength={1000}
            placeholder="Ask about our services or work"
            aria-label="Ask about our services or work"
            className="min-w-0 flex-1 border border-[#242b31] bg-[#121619] px-[15px] pb-[15px] pt-[14px] text-[14px] text-[#e4e4e7] outline-none placeholder:text-[#71717a] focus-visible:border-[#f59e0b] disabled:opacity-60"
          />
          <button
            type="submit"
            disabled={pending || draft.trim() === ""}
            aria-label="Send message"
            className="flex h-[44px] w-[50px] shrink-0 items-center justify-center rounded-[4px] bg-[#f59e0b] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] disabled:opacity-50"
          >
            <Image src="/figma/chat/send.svg" alt="" width={20} height={20} unoptimized aria-hidden="true" />
          </button>
        </form>
        <Link
          href="/contact"
          className="flex items-center justify-center gap-[6px] pt-[10px] text-[11px] font-bold uppercase leading-[16.5px] tracking-[0.55px] text-[#f2f2f0]"
        >
          Prefer a person? Talk to our team
          <Image
            src="/figma/chat/handoff-arrow.svg"
            alt=""
            width={17}
            height={14}
            unoptimized
            aria-hidden="true"
          />
        </Link>
      </div>
    </div>
  );
}
