import { Architecture } from "@/components/architecture";
import { Automation } from "@/components/automation";
import { Capabilities } from "@/components/capabilities";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { Proof } from "@/components/proof";
import { FinalCtaSection } from "@/components/shared/final-cta-section";
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
        <FinalCtaSection />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
