import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { clientStripItems } from "@/components/shared/client-logos";
import { Marquee } from "@/components/shared/marquee";
import { CalloutCtaSection } from "@/components/shared/callout-cta-section";
import {
  DeploymentPatternsSection,
  TechStackSection,
} from "@/components/shared/tech-stack-section";
import { WorkGrid } from "@/components/work-grid";
import {ServicesProofSlider} from "@/components/services-proof-slider";

export function WorkHubPage() {
  return (
    <main className="w-full">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden border-b border-[#1c2328] bg-deep px-6 py-16 sm:px-10 sm:py-20 lg:min-h-[720px] lg:px-20 lg:py-20">
        <div className="relative mx-auto flex max-w-[1280px] flex-col justify-center gap-12 lg:grid lg:h-[720px] lg:grid-cols-12 lg:gap-6">
          {/* Left Column */}
          <div className="flex w-full flex-col items-start lg:col-span-7 lg:h-[371px] lg:justify-between">
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-orange bg-orange/10 px-3 py-1">
                <span
                  className="size-1.5 rounded-full bg-orange animate-pulse"
                  aria-hidden="true"
                />
                <span className="font-mono text-[10px] font-bold tracking-[0.5px] uppercase text-orange">
                  Work Hub
                </span>
              </div>
              <span className="font-mono text-[11px] uppercase tracking-[0.5px] text-[#747d81]">
                VERIFIED CASE STUDIES
              </span>
            </div>

            {/* Headline */}
            <h1 className="mt-6 text-[clamp(44px,6vw,64px)] font-bold leading-[1.06] tracking-[-1.5px] text-[#f4f4f1]">
              Our Work
            </h1>

            {/* Subtitle */}
            <p className="mt-4 max-w-[620px] text-[17px] leading-[1.65] text-[#c8c1c5]">
              Real projects. Real impact. Verified production deployments across
              AI product engineering, agentic systems, and forward-deployed
              services.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="/contact" className="button button-primary">
                <span>TALK TO OUR TEAM</span>
                <span aria-hidden="true">→</span>
              </a>
              <a
                href="#featured-work"
                className="inline-flex min-h-[48px] items-center justify-center rounded-[2px] border border-[#6a7276] px-6 py-3 font-sans text-[13px] font-bold uppercase tracking-[0.65px] text-[#f4f4f1] transition hover:border-white hover:text-white"
              >
                VIEW RELEVANT WORK →
              </a>
            </div>
          </div>

          {/* Right Hero Graphic */}
          <div className="relative w-full lg:absolute lg:-top-[72px] lg:right-[-80px] lg:h-[572px] lg:w-[800px]">
            <div className="relative aspect-[16/11] w-full overflow-hidden rounded-[4px]  lg:h-full lg:aspect-auto">
              <Image
                src="/figma/work/72e66.png"
                alt="Trade intelligence dashboard shown on a laptop and phone"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 710px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. MARQUEE SECTION */}
      <section className="border-b border-[#1c2328] bg-ink py-6">
        <Marquee
          ariaLabel="Client technology and partners"
          items={clientStripItems}
        />
      </section>

      {/* 4. FEATURED WORK SECTION */}
      <section
        id="featured-work"
        className="border-b border-[#1c2328] bg-ink px-6 py-16 sm:px-10 sm:py-20 lg:px-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1280px]">
          {/* Header Row */}
          <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="font-mono text-[10px] font-bold tracking-[1.2px] uppercase text-[#999ea2]">
                FEATURED WORK
              </p>
              <h2 className="mt-2 text-[clamp(36px,4vw,48px)] font-bold leading-tight tracking-[-1.5px] text-[#f4f4f1]">
                Strongest verified proof first.
              </h2>
            </div>
            <a
              href="#all-work"
              className="inline-flex items-center gap-1.5 font-sans text-sm font-medium text-orange transition hover:underline"
            >
              <span>View All Work</span>
              <ArrowUpRight size={16} />
            </a>
          </div>

          {/* Featured Content Grid */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_360px]">
            {/* Primary Featured Card */}
            <article className="group relative flex flex-col overflow-hidden rounded-[4px] border border-[#293137] bg-[#0f1417]">
              {/* Schematic Preview Box */}
              <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-[#293137] bg-[#13191d] sm:aspect-[16/9]">
                <Image
                  src="/figma/work/8b005.png"
                  alt="Kaya Health Coach architecture schematic"
                  fill
                  sizes="(max-width: 1024px) 100vw, 800px"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute right-4 top-4 z-10 rounded-[2px] border border-[rgba(255,192,129,0.3)] bg-[rgba(8,11,13,0.85)] px-3 py-1 backdrop-blur-sm">
                  <span className="font-mono text-[11px] font-medium tracking-[0.5px] uppercase text-[#ffa600]">
                    HEALTHCARE AI
                  </span>
                </div>
              </div>

              {/* Card Meta & Copy */}
              <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[1px] text-[#ffc081]">
                    AI PRODUCT ENGINEERING
                  </p>
                  <h3 className="mt-2 text-[26px] font-bold text-[#f2f2ef] sm:text-[30px]">
                    Kaya Health Coach
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-[#aeb5b8] sm:text-[16px]">
                    AI functional medicine coach guiding people through
                    structured wellness sessions, with real-time coaching
                    responses and habit, goal and mood tracking — live on both
                    app stores.
                  </p>
                </div>

                <div className="mt-8 border-t border-[#1c2328] pt-6">
                  <Link
                    href="/case-study/kaya"
                    className="inline-flex items-center gap-2 text-[14px] font-bold uppercase tracking-[0.6px] text-[#f2f2ef] transition-colors group-hover:text-orange"
                  >
                    <span>View Case Study</span>
                    <span className="transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </article>

            {/* Right Side: Project Proof Breakdown */}
            <div className="flex flex-col justify-between rounded-[4px] border border-[#293137] bg-[#0f1417]/70 p-6 sm:p-8">
              <div className="flex flex-col gap-6">
                <div>
                  <span className="font-mono text-[11px] font-bold uppercase tracking-[1.2px] text-orange">
                    PROJECT PROOF
                  </span>
                  <h4 className="mt-1.5 text-base font-bold text-[#f4f4f1]">
                    What GenAI Labs worked on
                  </h4>
                  <p className="mt-2 text-sm leading-[1.65] text-[#aeb5b8]">
                    Flutter app, FastAPI backend, AI coaching engine with SSE
                    streaming, Firebase auth and Stripe payments — built end to
                    end by GenAILabs.
                  </p>
                </div>

                <div className="border-t border-[#293137] pt-6">
                  <span className="font-mono text-[11px] font-bold uppercase tracking-[1.2px] text-orange">
                    STRONGEST EVIDENCE
                  </span>
                  <h4 className="mt-1.5 text-base font-bold text-[#f4f4f1]">
                    Verified production metrics
                  </h4>
                  <p className="mt-2 text-sm leading-[1.65] text-[#aeb5b8]">
                    Live on the App Store and Google Play, with sub-second
                    first-token streaming and sessions that follow the user
                    across devices.
                  </p>
                </div>
              </div>

              <div className="mt-8 border-t border-[#293137] pt-6">
                <div className="rounded border border-line bg-deep p-4 text-xs font-mono text-muted">
                  <span className="block text-white">
                    Status: LIVE ON APP STORE &amp; GOOGLE PLAY
                  </span>
                  <span className="mt-1 block text-orange">
                    Maintained on a fixed price plus retainer
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ALL SELECTED WORK GRID */}
      <section
        id="all-work"
        className="border-b border-[#1c2328] bg-deep px-6 py-16 sm:px-10 sm:py-20 lg:px-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-10">
            <p className="eyebrow">CASE STUDIES &amp; DEPLOYMENTS</p>
            <h2 className="mt-3 text-[clamp(36px,4vw,48px)] font-bold leading-tight tracking-[-1.5px] text-[#f4f4f1]">
              All Selected Work.
            </h2>
            <p className="mt-3 max-w-[680px] text-[16px] leading-relaxed text-[#c8c1c5]">
              Filter by domain to review how we engineer tailored intelligence
              into complex enterprise stacks.
            </p>
          </div>

          <WorkGrid />
        </div>
      </section>

      <TechStackSection />

      <DeploymentPatternsSection />

			<section className="lg:px-50 py-10 sm:px-5">
			<ServicesProofSlider/>
			</section>

      <CalloutCtaSection />
    </main>
  );
}
