export function Proof() {
  return (
    <section
      className="mx-auto max-w-[1280px] border-t border-[#53443433] px-16 py-[49px] max-[640px]:px-5 max-[640px]:py-10"
      id="insights"
    >
      <div className="flex justify-between border-b border-[#53443433] pb-[33px] uppercase">
        <span>— &nbsp; Proof record</span>
        <b className="rounded-xl border border-[#f59e0b4d] px-[11px] py-[3px] text-[11px] font-medium text-[#ffc174]">
          ● Verified audit
        </b>
      </div>
      <blockquote className="m-0 max-w-[930px] border-b border-[#53443433] py-[42px] text-[clamp(32px,4vw,52px)] leading-[1.05] font-bold tracking-[-1.2px] max-[640px]:text-[34px]">
        “GenAILabs gave our operational platform the rare feeling of being both
        extraordinarily intelligent and unmistakably human.”
      </blockquote>
      <div className="grid grid-cols-3 gap-6 pt-10 max-[640px]:grid-cols-1">
        <div className="flex flex-col gap-1">
          <strong className="text-[12px] uppercase">
            — Mara Voss
          </strong>
          <span className="text-xs leading-[1.4] text-[#c8c1c5]">
            Founder & Managing Director, Lumen Field
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <strong className="text-[12px] uppercase">
            Discipline
          </strong>
          <span className="text-xs leading-[1.4] text-[#c8c1c5]">
            Autonomous Workflow Engine / Model Alignment / Production
            Infrastructure
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <strong className="text-[12px] uppercase">
            Deployment cycle
          </strong>
          <span className="text-xs leading-[1.4] text-[#c8c1c5]">
            2026.Q1 production
          </span>
        </div>
      </div>
    </section>
  );
}
