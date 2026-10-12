export function CalloutCtaSection() {
  return (
    <section className="bg-[#0d0e0f] px-6 py-16 sm:px-10 sm:py-20 lg:px-20 lg:py-28 lg:max-w-[1280px] lg:mx-auto">
      <div className="cta-panel cta-panel--sentence max-w-[1120px] mx-auto">
        <p className="eyebrow">
          <span className="cta-panel-dot" aria-hidden="true" />
          Let&apos;s talk
        </p>
        <h2 className="text-[clamp(38px,4vw,48px)] font-medium leading-[1.08] tracking-[-1.5px] mt-6 max-w-[700px]">
          Have a similar challenge?
        </h2>
        <p className="mt-4 text-[17px] leading-7 text-[#d1d5db] max-w-[672px]">
          Let&apos;s discuss the problem you&apos;re trying to solve.
        </p>
        <a className="button button-primary mt-8" href="#contact">
          Talk to our team <span>→</span>
        </a>
      </div>
    </section>
  );
}
