import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { clientStripItems } from "@/components/shared/client-logos";
import { Marquee } from "@/components/shared/marquee";
import { WorkGrid } from "@/components/work-grid";

type TechItem = {
  name: string;
  icon: string;
};

type TechCategory = {
  title: string;
  description: string;
  items: TechItem[];
};

const techCategories: TechCategory[] = [
  {
    title: "AI & LLM",
    description:
      "Foundation models and AI frameworks for intelligent applications.",
    items: [
      { name: "Open AI", icon: "/figma/work/32d08.svg" },
      { name: "Claude", icon: "/figma/work/306d2.png" },
      { name: "Gemini", icon: "/figma/work/a6e0e.png" },
      { name: "Meta", icon: "/figma/work/d00ff.png" },
      { name: "Mistral AI", icon: "/figma/work/3d9b1.png" },
      { name: "LangChain", icon: "/figma/work/963d5.svg" },
    ],
  },
  {
    title: "Cloud & Infrastructure",
    description:
      "Scalable cloud platforms and infrastructure for high availability, security, and performance.",
    items: [
      { name: "AWS", icon: "/figma/work/92737.png" },
      { name: "Google Cloud", icon: "/figma/work/e45a1.png" },
      { name: "Microsoft Azure", icon: "/figma/work/b94c3.png" },
      { name: "Vercel", icon: "/figma/work/efa6c.svg" },
      { name: "Cloudflare", icon: "/figma/work/b74b9.png" },
      { name: "Docker", icon: "/figma/work/d6e1b.png" },
    ],
  },
  {
    title: "Data & Database",
    description:
      "Databases and vector stores for structured and unstructured data.",
    items: [
      { name: "PostgreSQL", icon: "/figma/work/88070.png" },
      { name: "MySQL", icon: "/figma/work/dc717.png" },
      { name: "MongoDB", icon: "/figma/work/42a67.png" },
      { name: "Redis", icon: "/figma/work/16254.png" },
      { name: "Supabase", icon: "/figma/work/65139.png" },
      { name: "Pinecone", icon: "/figma/work/f4960.svg" },
    ],
  },
  {
    title: "Engineering",
    description:
      "Modern development tools and frameworks for fast, reliable product development.",
    items: [
      { name: "Python", icon: "/figma/work/fd9f3.png" },
      { name: "TypeScript", icon: "/figma/work/da113.png" },
      { name: "JavaScript", icon: "/figma/work/f1a73.png" },
      { name: "React", icon: "/figma/work/4e685.png" },
      { name: "Next.js", icon: "/figma/work/329fe.svg" },
      { name: "FastAPI", icon: "/figma/work/1a079.png" },
    ],
  },
];

const deploymentPatterns = [
  {
    title: "Cloud-native Foundations",
    description:
      "We build on AWS, GCP, and Azure with managed services, container orchestration, and secure deployment patterns.",
  },
  {
    title: "LLMs and Custom Models",
    description:
      "From prompt engineering to fine-tuned models, we ship AI systems that are reliable, measurable, and scalable.",
  },
  {
    title: "Observability and Data",
    description:
      "We instrument systems with monitoring, logging, and analytics so every decision is grounded in real-world data.",
  },
] as const;

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
              <a href="#contact" className="button button-primary">
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
          <div className="relative w-full lg:absolute lg:-top-[72px] lg:right-[10px] lg:h-[572px] lg:w-[710px]">
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

      {/* 3. TRENDING BANNER */}

      <div className="border-y border-[#1c2328] bg-[#0d0e0f] px-[max(40px,calc((100%_-_1120px)_/_2))] py-[60px] max-[640px]:px-5 max-[640px]:py-10">
        <div className="flex h-[120px] items-center justify-center rounded-[8px] border border-[#293137] bg-[#191c1e]">
          <strong className="text-xl uppercase text-white">Image banner</strong>
        </div>
      </div>

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
                    Replaced slow enterprise search with instantaneous semantic
                    discovery across 40M documents. Engineered custom retrieval
                    guardrails to ensure zero hallucination in patient-facing
                    dialogues.
                  </p>
                </div>

                <div className="mt-8 border-t border-[#1c2328] pt-6">
                  <Link
                    href="/case-study"
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
                    End-to-end multi-agent clinical reasoning engine,
                    HIPAA-compliant vector embedding pipeline, and sub-200ms
                    streaming inference microservices on Kubernetes.
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
                    Over 40 million clinical notes indexed with zero data
                    leakage. 94.2% diagnostic retrieval precision audited and
                    confirmed by licensed medical teams.
                  </p>
                </div>
              </div>

              <div className="mt-8 border-t border-[#293137] pt-6">
                <div className="rounded border border-line bg-deep p-4 text-xs font-mono text-muted">
                  <span className="block text-white">Status: DEPLOYED</span>
                  <span className="mt-1 block text-orange">
                    Cluster: US-East Multi-Region
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

      {/* 6. TECH WE USE SECTION */}
      <section className="border-b border-[#1c2328] bg-ink px-6 py-16 sm:px-10 sm:py-20 lg:px-20 lg:py-24">
        <div className="mx-auto max-w-[1280px]">
          {/* Header */}
          <div className="mb-14">
            <p className="font-mono text-[10px] font-bold tracking-[1.2px] uppercase text-[#999ea2]">
              TECH WE USE
            </p>
            <h2 className="mt-3 text-[clamp(36px,4vw,48px)] font-bold leading-tight tracking-[-1.5px] text-white">
              The stack we deploy into production.
            </h2>
            <div className="grid grid-cols-2 gap-5">
              <p className="mt-4 max-w-[820px] text-[16px] leading-[1.65] text-[#c8c1c5] sm:text-[17px]">
                We have first-class support for a wide range of modern cloud and
                AI frameworks. You can build, fine-tune, and deploy using
                cloud-native foundations, custom LLMs, and full-stack
                observability tooling often without any upfront configuration.
              </p>
              <p className="mt-4 max-w-[820px] text-[16px] leading-[1.65] text-[#c8c1c5] sm:text-[17px]">
                Learn how to{" "}
                <a href="#" className="underline text-white bold">
                  get started with our stack
                </a>{" "}
                or explore our production ready patterns, spanning
                infrastructure, AI and Data Engineering below.
              </p>
            </div>
          </div>

          {/* 4 Tech Categories */}
          <div className="flex flex-col gap-6">
            {techCategories.map((category) => (
              <div
                key={category.title}
                className="relative flex flex-col items-start gap-8 rounded-[16px] border border-[#1c2328] p-6 backdrop-blur-sm transition-all duration-300 hover:border-[#384149] sm:p-8 lg:flex-row lg:items-center"
              >
                {/* Category Sidebar Info */}
                <div className="w-full shrink-0 border-b border-[rgba(30,41,59,0.8)] pb-6 lg:w-[320px] lg:border-b-0 lg:border-r lg:pb-0 lg:pr-8">
                  <h3 className="text-xl font-bold tracking-[0.45px] text-white">
                    {category.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-[#94a3b8]">
                    {category.description}
                  </p>
                </div>

                {/* Logos Grid */}
                <div className="grid flex-1 grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6 sm:gap-4 w-full">
                  {category.items.map((tech) => (
                    <div
                      key={tech.name}
                      className="group flex flex-col items-center justify-center rounded-[4px] p-4 text-center transition-all duration-200 hover:border-orange/60 hover:bg-[#1a2329]"
                    >
                      <div className="relative mb-2.5 size-10">
                        <Image
                          src={tech.icon}
                          alt={tech.name}
                          fill
                          className="object-contain filter transition group-hover:brightness-110"
                        />
                      </div>
                      <span className="font-mono text-xs tracking-wide text-[#aeb5b8] transition group-hover:text-white">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. DEPLOYMENT PATTERNS */}
      <section className="border-b border-[#1c2328] bg-[#0d0e0f] px-6 py-16 sm:px-10 sm:py-20 lg:px-20 lg:py-24">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-10">
            <p className="font-mono text-[10px] font-bold tracking-[1.2px] uppercase text-[#999ea2]">
              DEPLOYMENT PATTERNS
            </p>
            <h2 className="mt-3 text-[clamp(30px,3.5vw,40px)] font-bold leading-tight tracking-[-1px] text-white">
              Deploy a Stack Pattern
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {deploymentPatterns.map((pattern) => (
              <article key={pattern.title} className="group">
                <div
                  className="h-[156px] rounded-[4px] border border-[#293137] bg-[#080b0d] transition-colors duration-200 group-hover:border-[#424a50]"
                  aria-hidden="true"
                />
                <h3 className="mt-5 text-sm font-medium text-[#f4f4f1]">
                  {pattern.title}
                </h3>
                <p className="mt-2 text-xs leading-[1.65] text-[#aeb5b8]">
                  {pattern.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 8. EDITORIAL QUOTE / PROOF RECORD */}
      <section className="border-b border-[#1c2328] bg-[#0d0e0f] px-6 py-16 sm:px-10 sm:py-20 lg:px-20">
        <div className="mx-auto max-w-[1280px]">
          <div className="rounded-[4px] border border-[rgba(83,68,52,0.3)] bg-deep p-8 md:p-14">
            {/* Top Pill Bar */}
            <div className="flex items-center justify-between border-b border-[rgba(83,68,52,0.25)] pb-6">
              <span className="font-mono text-[12px] uppercase tracking-[0.6px] text-white">
                — PROOF RECORD
              </span>
              <div className="flex items-center gap-2 rounded-full border border-[rgba(245,158,11,0.3)] bg-[#2a2a2c] px-3 py-1">
                <span
                  className="size-1.5 rounded-full bg-[#f59e0b] animate-pulse"
                  aria-hidden="true"
                />
                <span className="font-mono text-[11px] font-medium tracking-wide uppercase text-[#ffc174]">
                  VERIFIED AUDIT
                </span>
              </div>
            </div>

            {/* Main Editorial Statement */}
            <blockquote className="my-10 max-w-[920px] text-[clamp(28px,3.8vw,48px)] font-bold leading-[1.15] tracking-[-1.2px] text-[#e5e1e4]">
              &ldquo;GenAILabs gave our operational platform the rare feeling of
              being both extraordinarily intelligent and unmistakably
              human.&rdquo;
            </blockquote>

            {/* 3-Column Technical Attribution Ledger */}
            <div className="grid grid-cols-1 gap-6 border-t border-[rgba(83,68,52,0.25)] pt-8 md:grid-cols-3">
              <div>
                <strong className="block text-[13px] font-bold uppercase tracking-[0.6px] text-white">
                  — Mara Voss
                </strong>
                <span className="mt-1 block text-xs leading-relaxed text-[#c8c1c5]">
                  Founder &amp; Managing Director, Lumen Field
                </span>
              </div>
              <div>
                <strong className="block font-mono text-[10px] tracking-[0.6px] uppercase text-[#747d81]">
                  Discipline
                </strong>
                <span className="mt-1 block text-xs leading-relaxed text-[#c8c1c5]">
                  Autonomous Workflow Engine / Model Alignment / Production
                  Infrastructure
                </span>
              </div>
              <div>
                <strong className="block font-mono text-[10px] tracking-[0.6px] uppercase text-[#747d81]">
                  Deployment cycle
                </strong>
                <span className="mt-1 block text-xs leading-relaxed text-[#c8c1c5]">
                  2026.Q1 Production
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. CALLOUT CTA SECTION */}
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
            Let&apos;s discuss the problem you're trying to solve.
          </p>
          <a className="button button-primary mt-8" href="#contact">
            Talk to our team <span>→</span>
          </a>
        </div>
      </section>
    </main>
  );
}
