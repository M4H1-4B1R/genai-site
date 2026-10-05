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
  return (
    <div className="site-shell">
      <SiteHeader />
      <main>
        <Hero />
        <WorkShowcase />
        <Capabilities />
        <Architecture />
        <Proof />
        <Automation />
        <section className="cta-section">
          <div className="cta-inner">
            <p className="eyebrow">Ready for discovery</p>
            <h2>Have an AI problem worth building?</h2>
            <p>
              Stop experimenting and start engineering. Let&apos;s discuss how
              we can turn your complex requirements into a deployed solution.
            </p>
            <a className="button button-primary" href="#contact">
              Request a strategy briefing <span>→</span>
            </a>
            <small>System / Status / Ready for discovery</small>
          </div>
        </section>
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
