import { Contact } from "@/components/contact";
import { ServicesHub } from "@/components/services-hub";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function ServicesPage() {
  return (
    <div className="min-w-[320px] overflow-clip bg-ink">
      <SiteHeader />
      <ServicesHub />
      <section className="cta-section services-cta">
        <div className="cta-panel">
          <p className="eyebrow">
            <span className="cta-panel-dot" aria-hidden="true" />
            Let&apos;s talk
          </p>
          <h2>Let&apos;s talk about your project</h2>
          <p>
            Tell us the problem. We&apos;ll help determine the right starting
            point.
          </p>
          <a className="button button-primary" href="#contact">
            Talk to our team <span>→</span>
          </a>
        </div>
      </section>
      <Contact />
      <SiteFooter />
    </div>
  );
}
