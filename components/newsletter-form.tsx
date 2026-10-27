"use client";

import { useState } from "react";

/**
 * Footer newsletter signup: one integrated field with an inline arrow
 * submit (hover = light yellow, dark arrow) instead of the old
 * input+button pair whose heights didn't line up. Subscribes through the
 * same FormSubmit relay as the contact form (arrival as a table email).
 * Non-JS fallback POSTs directly like the contact form.
 */
const ENDPOINT = "https://formsubmit.co/ajax/support@genailabs.agency";
const FALLBACK_ACTION = "https://formsubmit.co/support@genailabs.agency";

type Status = "idle" | "sending" | "done" | "error";

/** Mono micro-label, same scale as the footer's column headings, muted so
    "Connect" still reads as the column/topic. */
function NewsletterLabel() {
  return (
    <p className="mb-2.5 text-[11px] uppercase leading-[1.4] tracking-[1px] text-[#ff9800]">
      Subscribe to get latest news
    </p>
  );
}

export function NewsletterForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    const form = event.currentTarget;
    setStatus("sending");
    try {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 15000);
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: "Newsletter signup — genailabs.agency",
          _template: "table",
          email: new FormData(form).get("email") ?? "",
        }),
        signal: controller.signal,
      });
      clearTimeout(timer);
      if (!res.ok) throw new Error(String(res.status));
      const out = (await res.json()) as { success?: string | boolean };
      if (out.success !== "true" && out.success !== true) throw new Error("rejected");
      form.reset();
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="mt-6">
        <NewsletterLabel />
        <p aria-live="polite" className="text-sm leading-[1.5] text-[#ffd88a]">
          You&apos;re on the list ✓ First issue lands next month.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-6 max-w-[340px] max-[640px]:max-w-none">
      <NewsletterLabel />
      <form
        action={FALLBACK_ACTION}
        aria-busy={status === "sending"}
        className="mb-0"
        method="POST"
        onSubmit={handleSubmit}
      >
      <div className="relative flex h-12 w-full items-stretch">
        <input
          aria-label="Work email for the newsletter"
          autoComplete="email"
          className="h-12 min-w-0 w-full border border-[#424a50] bg-ink pl-3.5 pr-12 text-[14px] text-white outline-none placeholder:text-[#6b7276] focus:border-orange"
          name="email"
          placeholder="Enter your work mail..."
          required
          type="email"
        />
        {/* Inline arrow submit: light-yellow hover, dark arrow. */}
        <button
          aria-label="Subscribe"
          className="absolute inset-y-px right-px flex w-11 items-center justify-center border border-transparent bg-[#181b1e] text-[#9ca3af] transition-colors duration-200 hover:border-[#f2e28a] hover:bg-[#fff3c4] hover:text-[#080b0d] disabled:cursor-not-allowed disabled:opacity-60"
          disabled={status === "sending"}
          type="submit"
        >
          {status === "sending" ? (
            <svg className="size-4 animate-spin" fill="none" viewBox="0 0 24 24" strokeWidth="2">
              <circle className="opacity-25" cx="12" cy="12" r="9" stroke="currentColor" />
              <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeLinecap="round" />
            </svg>
          ) : (
            <svg aria-hidden className="size-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M5 12h14m-6-6 6 6-6 6" />
            </svg>
          )}
        </button>
      </div>
      <div aria-live="assertive" className="empty:hidden" role="status">
        {status === "error" && (
          <p className="mt-3 max-w-[340px] text-[12px] leading-[1.5] text-[#f8b4a8]">
            Didn&apos;t go through — try again in a moment.
          </p>
        )}
      </div>
    </form>
    </div>
  );
}
