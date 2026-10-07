export function Automation() {
  return (
    <section className="border-t border-[#2a2d34] bg-deep px-[max(40px,calc((100%_-_1280px)_/_2))] py-16 max-[640px]:px-5 max-[640px]:py-[68px]">
      <div className="mb-14">
        <p className="eyebrow">Automation categories</p>
        <h2 className="mt-3.5 mb-0 text-[clamp(40px,4vw,56px)] leading-[1.08] tracking-[-1.5px]">
          What AI Can Automate
        </h2>
        <p className="text-[18px] text-[#9fa4ab]">
          Different business processes AI can automate
        </p>
      </div>
      <div className="mb-4 flex flex-wrap gap-1.5">
        <span className="rounded-full bg-[#131518] px-3.5 py-1.5 text-[14px] tracking-[0.5px] text-white">
          All topics
        </span>
        <span className="rounded-full px-3.5 py-1.5 text-[14px] tracking-[0.5px] text-[#4d525c]">
          Design
        </span>
        <span className="rounded-full px-3.5 py-1.5 text-[14px] tracking-[0.5px] text-[#4d525c]">
          Development
        </span>
        <span className="rounded-full px-3.5 py-1.5 text-[14px] tracking-[0.5px] text-[#4d525c]">
          Marketing
        </span>
        <span className="rounded-full px-3.5 py-1.5 text-[14px] tracking-[0.5px] text-[#4d525c]">
          Business
        </span>
        <span className="rounded-full px-3.5 py-1.5 text-[14px] tracking-[0.5px] text-[#4d525c]">
          Technology
        </span>
      </div>
      <div className="h-[415px] rounded-lg border border-line max-[640px]:h-[260px]" />
    </section>
  );
}
