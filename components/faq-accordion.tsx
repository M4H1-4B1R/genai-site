"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";

export function FaqAccordion({ faqs }: { faqs: string[][] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="border-t border-[#1c2328]">
      {faqs.map(([question, answer], index) => {
        const expanded = open === index;
        return (
          <article key={question} className="border-b border-[#293137]">
            <h3>
              <button
                type="button"
                aria-expanded={expanded}
                aria-controls={`faq-panel-${index}`}
                id={`faq-button-${index}`}
                onClick={() => setOpen(expanded ? null : index)}
                className="flex w-full cursor-pointer items-center justify-between gap-4 py-7 text-left"
              >
                <span className="text-[#f4f4f1] text-[18px] leading-[24px] font-[500]">
                  {question}
                </span>
                <span
                  className="inline-flex h-[24px] w-[24px] shrink-0 items-center justify-center rounded-full border border-[rgba(255,192,129,0.3)] bg-[rgba(255,152,0,0.1)] text-[var(--orange)]"
                  aria-hidden="true"
                >
                  {expanded ? <Minus size={12} /> : <Plus size={12} />}
                </span>
              </button>
            </h3>
            <div
              id={`faq-panel-${index}`}
              role="region"
              aria-labelledby={`faq-button-${index}`}
              className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="pb-7 text-[#9ca3af] text-[15px] leading-[24px]">
                  {answer}
                </p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
