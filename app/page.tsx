import { Architecture } from "@/components/architecture";
import { Automation } from "@/components/automation";
import { Capabilities } from "@/components/capabilities";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { Proof } from "@/components/proof";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WorkShowcase } from "@/components/work-showcase";

export default function Home() {
  // overflow-clip contains horizontal bleed without creating a scroll
  // container, so the sticky hero keeps working (from the old .site-shell).
  return (
    <div className="min-w-[320px] overflow-clip bg-ink">
      <SiteHeader />
      <main>
        <Hero />
        <WorkShowcase />
        <Capabilities />
        <Architecture />
        <Proof />
        <Automation />
        <section className="border-t border-[#2a2d34] bg-[#121314] px-6 py-[120px] text-center max-[640px]:px-5 max-[640px]:py-[90px]">
          <div className="mx-auto max-w-[800px]">
            <p className="eyebrow">Ready for discovery</p>
            <h2 className="mx-auto mt-3.5 mb-[22px] max-w-[700px] text-[clamp(42px,5vw,64px)] leading-[0.98] uppercase">
              Have an AI problem worth building?
            </h2>
            <p className="mx-auto max-w-[700px] text-[18px] leading-[1.55] text-[#d1d5db]">
              Stop experimenting and start engineering. Let&apos;s discuss how
              we can turn your complex requirements into a deployed solution.
            </p>
            <a className="button button-primary mt-8" href="#contact">
              Request a strategy briefing <span>→</span>
            </a>
            <small className="mt-2.5 block text-[12px] tracking-[0.6px] uppercase text-[#6b7280]">
              System / Status / Ready for discovery
            </small>
          </div>
        </section>
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
