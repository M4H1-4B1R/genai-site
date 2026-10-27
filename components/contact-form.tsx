"use client";

import { useState } from "react";

/**
 * Project-intake form backed by FormSubmit.co (zero-account email relay:
 * POST form data → delivered to support@genailabs.agency as a formatted
 * email). Uses their AJAX endpoint so the page never navigates away:
 * idle → sending (button locks) → success (inline confirmation) | error
 * (inline banner + retry). POSTs directly to the plain endpoint when JS
 * is unavailable as a fallback. Hidden fields: _subject/_template format
 * the email; the _honey honeypot silently drops bot submissions.
 *
 * IMPORTANT: FormSubmit requires one-time activation — the first real
 * submission (or visit to formsubmit.co/support@genailabs.agency) emails
 * an activation link that someone at the target address must click.
 */
const ENDPOINT = "https://formsubmit.co/ajax/support@genailabs.agency";
const FALLBACK_ACTION = "https://formsubmit.co/support@genailabs.agency";
const DIRECT_GMAIL =
  "https://mail.google.com/mail/?view=cm&fs=1&to=support@genailabs.agency";

type Status = "idle" | "sending" | "success" | "error";

const FIELD_CLASSES =
  "border border-[#424a50] bg-ink p-3.5 text-white outline-none focus:border-orange";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    const form = event.currentTarget;
    setStatus("sending");
    try {
      // fetch has no native timeout — cap the wait ourselves so a hung
      // request can't leave the button locked forever.
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 15000);
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
        signal: controller.signal,
      });
      clearTimeout(timer);
      if (!res.ok) throw new Error(String(res.status));
      const out = (await res.json()) as { success?: string | boolean };
      if (out.success !== "true" && out.success !== true) {
        throw new Error("rejected");
      }
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        aria-live="polite"
        className="flex flex-col items-start gap-5 border border-[#2a2d34] px-10 py-10 max-[640px]:px-6 max-[640px]:py-8"
      >
        <h3 className="m-0 text-[28px]">Message sent ✓</h3>
        <p className="m-0 max-w-[420px] text-[15px] leading-[1.6] text-[#9ca3af]">
          Thanks — your project brief is in our inbox. We&apos;ll get back to
          you within one business day. Need something urgent?{" "}
          <a
            className="underline"
            href={DIRECT_GMAIL}
            target="_blank"
            rel="noreferrer"
          >
            Email us directly
          </a>
          .
        </p>
        <button
          className="button button-outline"
          onClick={() => setStatus("idle")}
          type="button"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      action={FALLBACK_ACTION}
      aria-busy={status === "sending"}
      className="border border-[#2a2d34] px-10 pt-9 pb-10 max-[640px]:px-[18px] max-[640px]:py-6"
      method="POST"
      onSubmit={handleSubmit}
    >
      <div className="mb-8 flex items-center justify-between">
        <h3 className="m-0 text-[28px]">Project intake</h3>
        <span className="text-[#747d81] font-mono text-[10px] tracking-[0.7px] uppercase">
          * Required fields
        </span>
      </div>

      {/* FormSubmit hidden config — excluded from the visible form, all
          values ship with the POST. */}
      <input name="_subject" type="hidden" value="New project inquiry — genailabs.agency" />
      <input name="_template" type="hidden" value="table" />
      <input name="_captcha" type="hidden" value="false" />
      {/* Honeypot: bots that autofill this field get silently ignored. */}
      <input className="hidden" name="_honey" tabIndex={-1} autoComplete="off" />

      <div className="grid grid-cols-2 gap-x-4 gap-y-6 max-[640px]:grid-cols-1 max-[640px]:gap-0">
        <label className="mb-6 flex flex-col gap-2 text-[#747d81] font-mono text-[10px] tracking-[0.7px] uppercase">
          Name *
          <input
            autoComplete="name"
            className={FIELD_CLASSES}
            name="name"
            placeholder="Your full name"
            required
            type="text"
          />
        </label>
        <label className="mb-6 flex flex-col gap-2 text-[#747d81] font-mono text-[10px] tracking-[0.7px] uppercase">
          Work email *
          <input
            autoComplete="email"
            className={FIELD_CLASSES}
            name="email"
            placeholder="name@company.com"
            required
            type="email"
          />
        </label>
      </div>
      <label className="mb-6 flex flex-col gap-2 text-[#747d81] font-mono text-[10px] tracking-[0.7px] uppercase">
        What are you working on? *
        <textarea
          className={`min-h-[130px] resize-y ${FIELD_CLASSES}`}
          name="message"
          placeholder="Describe the problem, current constraints, and what success needs to look like."
          required
        />
      </label>
      <label className="mb-6 grid grid-cols-[18px_120px_1fr] items-start gap-2.5 leading-[1.5] text-[#747d81] font-mono text-[10px] tracking-[0.7px] uppercase max-[640px]:grid-cols-[18px_1fr]">
        <input
          className="m-0 size-[18px] accent-orange"
          name="marketing_consent"
          type="checkbox"
          value="yes"
        />
        <span>Marketing consent</span>
        <small className="col-auto max-[640px]:col-start-2 font-sans text-[12px] leading-[1.5] tracking-normal text-[#747d81] normal-case">
          I agree to receive relevant project and product updates. I can
          withdraw consent at any time.{" "}
          <a className="underline" href="/privacy-policy">
            View the Privacy Policy.
          </a>
        </small>
      </label>

      <div
        aria-live="assertive"
        className="empty:hidden"
        role="status"
      >
        {status === "error" && (
          <p className="mb-5 border border-[#5a2a26] bg-[#241414] p-4 text-[13px] leading-[1.55] text-[#f8b4a8]">
            Something went wrong and the message didn&apos;t go out. Please
            try again, or{" "}
            <a
              className="underline"
              href={DIRECT_GMAIL}
              target="_blank"
              rel="noreferrer"
            >
              email support@genailabs.agency
            </a>{" "}
            directly.
          </p>
        )}
      </div>
      <button
        className="button button-primary disabled:cursor-not-allowed disabled:opacity-60"
        disabled={status === "sending"}
        type="submit"
      >
        {status === "sending" ? "Sending…" : "Talk to our team →"}
      </button>
    </form>
  );
}
