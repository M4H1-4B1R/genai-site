import { Architecture } from "@/components/architecture";
import { Capabilities } from "@/components/capabilities";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { ServicesProofSlider } from "@/components/services-proof-slider";
import { FinalCtaSection } from "@/components/shared/final-cta-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WorkShowcase } from "@/components/work-showcase";
import { HeroRightAnimated } from "@/components/hero-right-animated";

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
				<section className="px-50 py-20 max-[960px]:px-3 max-[960px]:py-5">
				<ServicesProofSlider/>
				</section>
        <HeroRightAnimated />
        <FinalCtaSection />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
