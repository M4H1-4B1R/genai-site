export function SiteFooter() {
  return (
    <footer className="grid grid-cols-[1.5fr_1fr_1fr_1.5fr] gap-12 border-t border-[#2a2d34] px-[max(40px,calc((100%_-_1280px)_/_2))] py-16 max-[900px]:grid-cols-2 max-[640px]:grid-cols-2 max-[640px]:px-5 max-[640px]:py-12">
      <div className="flex flex-col gap-2.5 max-[640px]:col-span-full">
        <strong className="text-base uppercase">⬡ GenAILabs</strong>
        <p className="m-0 max-w-80 text-sm leading-[1.5] text-[#9ca3af]">
          Monthly intelligence, architecture blueprints, and product deployment
          debriefs.
        </p>
      </div>
      <div className="flex flex-col gap-2.5">
        <span className="text-[11px] uppercase tracking-[1px]">Services</span>
        <a className="text-sm leading-[1.5] text-[#9ca3af]" href="#services">
          AI Product Engineering
        </a>
        <a className="text-sm leading-[1.5] text-[#9ca3af]" href="#services">
          Agentic Layer Engineering
        </a>
        <a className="text-sm leading-[1.5] text-[#9ca3af]" href="#services">
          Forward-Deployed Services
        </a>
      </div>
      <div className="flex flex-col gap-2.5">
        <span className="text-[11px] uppercase tracking-[1px]">Explore</span>
        <a className="text-sm leading-[1.5] text-[#9ca3af]" href="#work">
          Work
        </a>
        <a className="text-sm leading-[1.5] text-[#9ca3af]" href="#services">
          Architecture
        </a>
        <a className="text-sm leading-[1.5] text-[#9ca3af]" href="#about">
          About
        </a>
      </div>
      <div className="flex flex-col gap-2.5 max-[640px]:col-span-full">
        <span className="text-[11px] uppercase tracking-[1px]">Connect</span>
        <a className="text-sm leading-[1.5] text-[#9ca3af]" href="#contact">
          Talk to Our Team
        </a>
        <a className="text-sm leading-[1.5] text-[#9ca3af]" href="#contact">
          Careers
        </a>
        <a className="text-sm leading-[1.5] text-[#9ca3af]" href="#contact">
          Contact
        </a>
        <div className="mt-7 flex max-[640px]:flex-col">
          <input
            className="min-w-0 w-full border border-[#424a50] bg-ink p-3.5 text-white outline-none focus:border-orange"
            placeholder="Enter your work mail..."
          />
          <button className="button button-primary min-w-[165px] border-0 max-[640px]:w-full">
            Subscribe →
          </button>
        </div>
      </div>
      <div className="col-span-full mt-5 flex flex-row justify-between border-t border-[#2a2d34] pt-3 text-[11px] uppercase text-[#6b7280] max-[640px]:flex-col max-[640px]:gap-2">
        <span>© 2025 GENAILABS INC. ALL RIGHTS RESERVED.</span>
        <span>Privacy policy　 Terms of use　 Security</span>
      </div>
    </footer>
  );
}
