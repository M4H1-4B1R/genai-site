export function ProofQuoteSection() {
  return (
    <section className="border-b border-[#1c2328] bg-[#0d0e0f] px-6 py-16 sm:px-10 sm:py-20 lg:px-20">
      <div className="mx-auto max-w-[1280px]">
        <div className="rounded-[4px] border border-[rgba(83,68,52,0.3)] bg-deep p-8 md:p-14">
          {/* Top Pill Bar */}
          <div className="flex items-center justify-between border-b border-[rgba(83,68,52,0.25)] pb-6">
            <span className="font-mono text-[12px] uppercase tracking-[0.6px] text-white">
              — PROOF RECORD
            </span>
            <div className="flex items-center gap-2 rounded-full border border-[rgba(245,158,11,0.3)] bg-[#2a2a2c] px-3 py-1">
              <span
                className="size-1.5 rounded-full bg-[#f59e0b] animate-pulse"
                aria-hidden="true"
              />
              <span className="font-mono text-[11px] font-medium tracking-wide uppercase text-[#ffc174]">
                VERIFIED AUDIT
              </span>
            </div>
          </div>

          {/* Main Editorial Statement */}
          <blockquote className="my-10 max-w-[920px] text-[clamp(28px,3.8vw,48px)] font-bold leading-[1.15] tracking-[-1.2px] text-[#e5e1e4]">
            &ldquo;GenAILabs gave our operational platform the rare feeling of
            being both extraordinarily intelligent and unmistakably
            human.&rdquo;
          </blockquote>

          {/* 3-Column Technical Attribution Ledger */}
          <div className="grid grid-cols-1 gap-6 border-t border-[rgba(83,68,52,0.25)] pt-8 md:grid-cols-3">
            <div>
              <strong className="block text-[13px] font-bold uppercase tracking-[0.6px] text-white">
                — Mara Voss
              </strong>
              <span className="mt-1 block text-xs leading-relaxed text-[#c8c1c5]">
                Founder &amp; Managing Director, Lumen Field
              </span>
            </div>
            <div>
              <strong className="block font-mono text-[10px] tracking-[0.6px] uppercase text-[#747d81]">
                Discipline
              </strong>
              <span className="mt-1 block text-xs leading-relaxed text-[#c8c1c5]">
                Autonomous Workflow Engine / Model Alignment / Production
                Infrastructure
              </span>
            </div>
            <div>
              <strong className="block font-mono text-[10px] tracking-[0.6px] uppercase text-[#747d81]">
                Deployment cycle
              </strong>
              <span className="mt-1 block text-xs leading-relaxed text-[#c8c1c5]">
                2026.Q1 Production
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
