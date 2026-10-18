"use client";

import { useEffect, useRef, useState } from "react";

import { ChatLauncher } from "@/components/chat/chat-launcher";
import { ChatPanel } from "@/components/chat/chat-panel";
import { readTextStream } from "@/lib/chat/read-stream";
import type { ChatMessage } from "@/lib/chat/validate";

const PANEL_ID = "genailabs-chat-panel";
const MAX_HISTORY = 10;
const GENERIC_ERROR = "I can't answer right now. You can reach the team at /contact.";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [draft, setDraft] = useState("");
  const [pending, setPending] = useState(false);

  const launcherRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const threadRef = useRef<HTMLDivElement | null>(null);
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    threadRef.current?.scrollTo({ top: threadRef.current.scrollHeight });
  }, [messages]);

  // Abort in flight work on unmount; the panel's own close handler covers closing.
  useEffect(() => () => abortRef.current?.abort(), []);

  function closePanel() {
    abortRef.current?.abort();
    setPending(false);
    // An abort mid-stream leaves the placeholder assistant message empty; without
    // this the visitor reopens the panel to an empty bordered box.
    setMessages((current) => {
      const last = current[current.length - 1];
      return last?.role === "assistant" && last.content === "" ? current.slice(0, -1) : current;
    });
    setOpen(false);
    launcherRef.current?.querySelector("button")?.focus();
  }

  async function send(text: string) {
    const trimmed = text.trim();
    if (trimmed === "" || pending) return;

    const history = [...messages, { role: "user" as const, content: trimmed }];
    setMessages(history);
    setDraft("");
    setPending(true);

    const controller = new AbortController();
    abortRef.current = controller;

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ messages: history.slice(-MAX_HISTORY) }),
        signal: controller.signal,
      });

      if (!response.ok || !response.body) {
        const copy = (await response.text().catch(() => "")) || GENERIC_ERROR;
        setMessages([...history, { role: "assistant", content: copy }]);
        return;
      }

      setMessages([...history, { role: "assistant", content: "" }]);
      await readTextStream(
        response.body,
        (chunk) =>
          setMessages((current) => {
            const next = [...current];
            const last = next[next.length - 1];
            if (last?.role === "assistant") {
              next[next.length - 1] = { ...last, content: last.content + chunk };
            }
            return next;
          }),
        controller.signal,
      );
    } catch {
      if (!controller.signal.aborted) {
        setMessages([...history, { role: "assistant", content: GENERIC_ERROR }]);
      }
    } finally {
      if (abortRef.current === controller) abortRef.current = null;
      setPending(false);
    }
  }

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4 max-[640px]:bottom-4 max-[640px]:left-4 max-[640px]:right-4"
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) closePanel();
      }}
    >
      {open && (
        <ChatPanel
          panelId={PANEL_ID}
          messages={messages}
          draft={draft}
          pending={pending}
          inputRef={inputRef}
          threadRef={threadRef}
          onDraftChange={setDraft}
          onSubmit={send}
          onClose={closePanel}
        />
      )}
      <div ref={launcherRef}>
        <ChatLauncher
          open={open}
          panelId={PANEL_ID}
          onClick={() => (open ? closePanel() : setOpen(true))}
        />
      </div>
    </div>
  );
}
