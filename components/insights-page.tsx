import { clientStripItems } from "@/components/shared/client-logos";
import { Marquee } from "@/components/shared/marquee";
import { CalloutCtaSection } from "@/components/shared/callout-cta-section";
import { ProofQuoteSection } from "@/components/shared/proof-quote-section";
import {
  DeploymentPatternsSection,
  TechStackSection,
} from "@/components/shared/tech-stack-section";
import { TrendingBanner } from "@/components/shared/trending-banner";
import { InsightsLibrary, TopicPill } from "@/components/insights-library";

export function InsightsPage() {
  return (
    <main className="w-full">
      {/* 1. HERO */}
      <section className="border-b border-[#1c2328] bg-[#080b0d] px-6 py-20 sm:px-10 lg:flex lg:min-h-[720px] lg:items-center lg:px-20">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col items-start gap-6">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#293137] bg-[#0f1417] px-2.5 py-1.5">
            <span
              className="size-[5px] rounded-full bg-orange"
              aria-hidden="true"
            />
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.5px] text-orange">
              Insights
            </span>
          </span>
          <h1 className="max-w-[845px] text-[clamp(40px,6vw,64px)] font-bold leading-[1.06] tracking-[-1.6px] text-[#f2f2f0]">
            Ideas, analysis, and lessons from building with AI.
          </h1>
          <p className="max-w-[576px] text-[17px] leading-7 text-[#9fa4ab]">
            Practical thinking on AI products, agentic systems, implementation,
            and real-world use.
          </p>
        </div>
      </section>

      {/* 2. MARQUEE */}
      <section className="border-b border-[#1c2328] bg-ink py-6">
        <Marquee
          ariaLabel="Client technology and partners"
          items={clientStripItems}
        />
      </section>

      {/* 3. TRENDING BANNER */}
      <TrendingBanner />

      {/* 4. FEATURED INSIGHT */}
      <section
        id="featured-insight"
        className="border-b border-[#1c2328] bg-ink px-6 py-16 sm:px-10 sm:py-20 lg:px-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-12 max-w-[600px]">
            <p className="font-mono text-[11px] font-bold uppercase tracking-[1.2px] text-[#999ea2]">
              Featured Insight
            </p>
            <h2 className="mt-3 text-[clamp(34px,4vw,48px)] font-bold leading-[1.08] tracking-[-1.2px] text-[#f2f2f0]">
              One strategically relevant or high-value article.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_319px]">
            <article className="flex min-h-[280px] rounded-[4px] border border-[#293137] bg-[#0f1417] p-6 lg:h-[426px]">
              <div className="relative flex flex-1 items-center justify-center rounded-[4px] bg-[#14161a] p-4">
                <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-[rgba(255,152,0,0.25)] bg-[rgba(8,11,13,0.8)] px-2.5 py-1.5">
                  <span
                    className="size-[5px] rounded-full bg-orange"
                    aria-hidden="true"
                  />
                  <span className="font-mono text-[10px] font-bold uppercase tracking-[0.5px] text-orange">
                    Healthcare AI
                  </span>
                </span>
                <span className="text-center font-mono text-[10px] font-bold uppercase tracking-[1px] text-[#aeb5b8]">
                  Featured article visual
                </span>
              </div>
            </article>

            <div className="flex flex-col items-start gap-5">
              <TopicPill label="[Topic]" />
              <h3 className="text-[32px] font-bold leading-[38px] text-[#f2f2f0]">
                [Featured Article Title]
              </h3>
              <p className="text-[15px] leading-6 text-[#9fa4ab]">
                [Short useful summary of what the reader will learn.]
              </p>
              <p className="font-mono text-[10px] tracking-[0.5px] text-[#747d81]">
                [Date] · [Read time]
              </p>
              <a
                href="#contact"
                className="text-[13px] font-bold text-orange hover:underline"
              >
                Read Article →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INSIGHT LIBRARY */}
      <section
        id="insight-library"
        className="border-b border-[#1c2328] bg-ink px-6 py-16 sm:px-10 sm:py-20 lg:px-20 lg:py-24"
      >
        <div className="mx-auto flex max-w-[1280px] flex-col gap-12">
          <div>
            <p className="font-mono text-[11px] font-bold uppercase tracking-[1.2px] text-[#999ea2]">
              Insight Library
            </p>
            <h2 className="mt-3 text-[clamp(34px,4vw,48px)] font-medium leading-[1.08] tracking-[-1.2px] text-[#f2f2f0]">
              Browse all insights.
            </h2>
          </div>
          <InsightsLibrary />
        </div>
      </section>

      {/* 6–9. SHARED SECTIONS */}
      <TechStackSection />
      <DeploymentPatternsSection />
      <ProofQuoteSection />
      <CalloutCtaSection />
    </main>
  );
}
