import { ImageLightbox } from "@/components/shared/image-lightbox";
import Link from "next/link";

import { ServicesProofSlider } from "@/components/services-proof-slider";

type Fact = {
  label: string;
  value: string;
};

type NumberedCard = {
  title: string;
  description: string;
};

const heroTags = ["AI Product Engineering", "Forward-Deployed Services"];

const snapshot: Fact[] = [
  {
    label: "Client / Context",
    value: "Ask Dahab (askdahab.com) — multilingual travel and booking platform for Dahab, Egypt, with companion app Ask Sinai",
  },
  {
    label: "Engagement",
    value:
      "End-to-end build: 6-language static site (Eleventy + Nunjucks), admin panel, bookings, SEO, job portal, site search, and Ask Sinai mobile app — ongoing development with 51 releases since October 2026",
  },
  {
    label: "Status",
    value: "Live in production — website at askdahab.com, Ask Sinai on Google Play and App Store",
  },
  {
    label: "Technology",
    value:
      "Eleventy, Nunjucks, Node.js/Express, SQLite, PM2, Caddy, Claude (Anthropic API), Google Search Console, DataForSEO, Stripe (next phase)",
  },
];

const riskBounds: Fact[] = [
  {
    label: "No medical data — HIPAA does not apply",
    value: "Non-medical domain",
  },
  {
    label: "Minimal data stored; passwords hashed; job seeker data not collected; old job/report data auto-deleted (12/6 months); protected against brute force, CSRF, code injection",
    value: "Defensive security posture",
  },
  {
    label: "Liability terms to confirm before payments go live",
    value: "Payments pending",
  },
];

const contributions: NumberedCard[] = [
  {
    title: "6-language website (Eleventy + Nunjucks)",
    description:
      "About 915 static pages across 6 languages, 903 URLs in the sitemap — built with Eleventy and Nunjucks for fast, SEO-friendly delivery.",
  },
  {
    title: "18 bookable experiences & 70+ venue guides",
    description:
      "Curated travel guide with bookable experiences and detailed venue guides, all managed through the admin panel.",
  },
  {
    title: "Admin panel & content management",
    description:
      "Custom admin panel allowing the client team to manage content without code — site rebuilds automatically on changes.",
  },
  {
    title: "Job portal & multilingual site search",
    description:
      "Job portal for local businesses to hire staff, and full-text search across all 6 languages.",
  },
  {
    title: "Ask Sinai mobile app (iOS & Android)",
    description:
      "Companion app for travellers, live on the App Store and Google Play — built alongside the web platform.",
  },
  {
    title: "SEO, analytics & automated testing",
    description:
      "Google Search Console integration, DataForSEO, and 314 automated checks passing on every build.",
  },
];

const deploymentDetails: Fact[] = [
  {
    label: "Integration pattern",
    value:
      "Eleventy static site on VPS → Node.js/Express API for bookings/search → SQLite database → PM2 process management → Caddy reverse proxy with HTTPS → Stripe (planned for payments phase) → Google Search Console & DataForSEO for SEO monitoring",
  },
  {
    label: "Scale protocol",
    value:
      "Static site serves at CDN speed; Node.js API handles dynamic features (bookings, search, admin); SQLite on local disk; PM2 keeps services alive; automated test suite (314 checks) runs on every deployment",
  },
  {
    label: "Maintenance mode",
    value:
      "Client team manages all content in the admin panel without code — site rebuilds itself on changes. GenAILabs deploys code updates. Runs cheaply on a single VPS with static site, Node.js, and SQLite.",
  },
];

const evidence = [
  {
    label: "Verified evidence",
    value: "6 languages, ~915 pages, 903 URLs",
    source: "Build output and sitemap — English, Arabic, Russian, German, French, Italian",
  },
  {
    label: "Verified evidence",
    value: "18 experiences, 70+ venue guides",
    source: "Site data files (listings) — all managed via admin panel",
  },
  {
    label: "Verified evidence",
    value: "314 automated checks passing",
    source: "Automated test suites covering build, content, SEO, and functionality",
  },
  {
    label: "Key outcome",
    value: "Live in production on VPS",
    source:
      "Website at askdahab.com, Ask Sinai on App Store & Google Play — maintained by client via admin panel, code updates by GenAILabs",
    highlight: true,
  },
];

const capabilities: NumberedCard[] = [
  {
    title: "AI Product Engineering",
    description:
      "Full product build: 6-language Eleventy site (~915 pages), admin panel, bookings engine, job portal, multilingual search, and Ask Sinai mobile app — all live in production.",
  },
  {
    title: "Forward-Deployed Services",
    description:
      "Deployed on a single VPS with Caddy, PM2, Node.js/Express, and SQLite. Client manages content via admin panel (no code); GenAILabs ships code updates. 51 releases since October 2026. 314 automated checks on every build.",
  },
];

const relatedWork = [
  {
    category: "AI Product Engineering",
    cycle: "Production",
    title: "Ask Sinai",
    description:
      "Companion mobile app for Ask Dahab travellers — live on the App Store and Google Play, built alongside the web platform.",
    glow: true,
    image: "/figma/asksinai.png",
    href: "/case-study/asksinai",
  },
  {
    category: "AI Product Engineering",
    cycle: "Production",
    title: "Kaya Health Coach",
    description:
      "AI functional medicine coach live on both app stores — Flutter app, FastAPI backend, real-time LLM streaming, structured health journeys.",
    glow: false,
    image: "/figma/work/8b005.png",
    href: "/case-study/kaya",
  },
];

// Shared shell for the 1280px content bands below the snapshot.
const bandClass =
  "mx-auto flex max-w-[1280px] flex-col gap-12 px-[60px] py-20 max-[900px]:px-10 max-[640px]:gap-8 max-[640px]:px-5 max-[640px]:py-14";

const cardClass = "rounded-[8px] border border-line bg-[#0f1417]";

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-end justify-between gap-8 max-[900px]:flex-col max-[900px]:items-start max-[900px]:gap-4">
      <div className="flex max-w-[760px] flex-col gap-3">
        <p className="font-mono text-[11px] font-bold tracking-[1.2px] uppercase text-[#999ea2]">
          {eyebrow}
        </p>
        <h2 className="text-[clamp(30px,4vw,40px)] font-medium leading-[1.15] text-text">
          {title}
        </h2>
      </div>
      <p className="w-[430px] max-w-full shrink-0 text-[15px] leading-6 text-muted max-[900px]:w-auto">
        {description}
      </p>
    </div>
  );
}

function IndexBadge({ index }: { index: number }) {
  return (
    <span className="rounded-[4px] border border-orange px-2.5 py-1.5 font-mono text-[10px] font-bold tracking-[0.5px] text-orange">
      {String(index + 1).padStart(2, "0")}
    </span>
  );
}

function NumberedCards({ items, gap }: { items: NumberedCard[]; gap: string }) {
  return (
    <div className="grid grid-cols-3 gap-6 max-[900px]:grid-cols-1">
      {items.map((item, i) => (
        <article
          key={item.title}
          className={`${cardClass} flex flex-col items-start p-6 shadow-[0_18px_40px_-18px_rgba(0,0,0,0.18)] ${gap}`}
        >
          <IndexBadge index={i} />
          <div className="h-px w-full bg-[#1c2328]" aria-hidden="true" />
          <h3 className="text-lg font-bold leading-6 text-text">{item.title}</h3>
          <p className="text-[15px] leading-6 text-muted">{item.description}</p>
        </article>
      ))}
    </div>
  );
}

export function AskDahabCaseStudyPage() {
  return (
    <main className="w-full">
      {/* 1. HERO */}
      <section className="bg-deep px-[120px] pt-20 max-[900px]:px-10 max-[900px]:pb-16 max-[640px]:px-5 max-[640px]:pt-12">
        <div className="mx-auto flex max-w-[1200px] items-center gap-12 max-[900px]:flex-col max-[900px]:items-stretch">
          <div className="flex min-w-0 flex-1 flex-col items-start gap-6">
            <ul className="flex flex-wrap gap-2">
              {heroTags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-line bg-[#0f1417] px-3 py-1 font-mono text-[10px] font-bold tracking-[0.6px] uppercase text-orange"
                >
                  {tag}
                </li>
              ))}
            </ul>
            <h1 className="text-[clamp(40px,5vw,58px)] font-medium leading-[1.1] tracking-[-1.2px] text-text">
              Ask Dahab
            </h1>
            <p className="text-lg leading-7 text-muted">
              Ask Dahab (askdahab.com) is a multilingual travel and booking platform
              for Dahab, Egypt — 6 languages, about 915 pages, 18 bookable
              experiences, an admin panel, job portal, and multilingual search. The
              companion app Ask Sinai is live on the App Store and Google Play.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-orange px-2.5 py-1.5 font-mono text-[10px] font-bold tracking-[0.5px] uppercase text-orange">
                <span className="size-[5px] rounded-full bg-orange" aria-hidden="true" />
                Production
              </span>
              <span className="font-mono text-[10px] uppercase text-[#747d81]">
                51 releases since October 2026
              </span>
            </div>
          </div>

          <div className="relative h-[360px] min-w-0 flex-1 max-[900px]:flex-none overflow-clip rounded-[8px] border border-line bg-[#0f1417] max-[640px]:h-[240px]">
            <ImageLightbox
              src="/figma/askdahab-hero.png"
              alt="Ask Dahab — multilingual travel platform interface"
              sizes="(max-width: 640px) 100vw, 32vw"
            />
            <span className="absolute bottom-6 left-6 rounded-[4px] border border-line bg-[rgba(13,14,15,0.8)] px-3 py-1.5 font-mono text-[10px] font-bold tracking-[0.6px] uppercase text-[#747d81]">
              Web platform interface
            </span>
          </div>
        </div>
      </section>

      {/* 2. PROJECT SNAPSHOT */}
      <section className="border-y border-[#1c2328] bg-ink px-[120px] py-[60px] max-[900px]:px-10 max-[640px]:px-5 max-[640px]:py-12">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-8">
          <div className="flex items-end justify-between gap-8 max-[900px]:flex-col max-[900px]:items-start max-[900px]:gap-4">
            <div className="flex flex-col gap-3">
              <p className="font-mono text-[11px] font-bold tracking-[1.2px] uppercase text-[#999ea2]">
                Snapshot
              </p>
              <h2 className="max-w-[447px] text-[clamp(30px,4vw,40px)] font-medium leading-[1.15] text-text">
                Production metrics & deployment details.
              </h2>
            </div>
            <p className="text-[15px] leading-6 text-muted">
              Verified production status, stack, and maintenance model.
            </p>
          </div>
          <dl className="grid grid-cols-4 gap-4 max-[900px]:grid-cols-2 max-[640px]:grid-cols-1">
            {snapshot.map((fact) => (
              <div key={fact.label} className={`${cardClass} flex flex-col gap-2 p-6`}>
                <dt className="font-mono text-[10px] font-bold tracking-[1px] uppercase text-[#747d81]">
                  {fact.label}
                </dt>
                <dd className="text-[17px] font-bold leading-7 text-text">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* 4. THE CHALLENGE */}
      <section className="bg-deep">
        <div className={bandClass}>
          <SectionHeading
            eyebrow="The challenge"
            title="What high-stakes problem had to be solved?"
            description="The business context, constraints, and risk surface that shaped every decision."
          />
          <div className="flex items-start gap-8 max-[900px]:flex-col max-[900px]:items-stretch">
            <div className="flex min-w-0 flex-1 flex-col gap-6">
              <p className="border-l-4 border-orange pl-6 text-[clamp(24px,3vw,32px)] font-bold leading-[1.2] text-text">
                Dahab trip information was scattered, outdated and mostly
                English-only. Visitors needed one trusted place to plan and book in
                their own language, and local businesses needed a way to reach them
                and hire staff.
              </p>
              <p className="text-[17px] leading-7 text-muted">
                The platform had to serve an international audience in six languages
                (English, Arabic, Russian, German, French, Italian) with a single
                source of truth for travel content, bookable experiences, venue
                guides, and a job portal for local hiring — all while staying
                fast, secure, and cheap to run. The companion app Ask Sinai
                extends the experience to mobile.
              </p>
            </div>
            <aside className={`${cardClass} flex w-[380px] shrink-0 flex-col gap-5 p-6 max-[900px]:w-full`}>
              <p className="font-mono text-[10px] font-bold tracking-[1px] uppercase text-[#747d81]">
                Operational risk bounds
              </p>
              {riskBounds.map((metric, i) => (
                <div key={metric.value} className="flex flex-col gap-5">
                  <div
                    className={`h-px w-full ${i === 0 ? "bg-line" : "bg-[#1c2328]"}`}
                    aria-hidden="true"
                  />
                  <div className="flex flex-col gap-1">
                    <p className="text-[clamp(18px,4vw,24px)] font-medium tracking-[-1px] text-orange">
                      {metric.value}
                    </p>
                    <p className="text-[15px] leading-6 text-muted">
                      {metric.label}
                    </p>
                  </div>
                </div>
              ))}
            </aside>
          </div>
        </div>
      </section>

      {/* 5. CONTRIBUTIONS */}
      <section className="border-y border-[#1c2328] bg-ink">
        <div className={bandClass}>
          <SectionHeading
            eyebrow="Contributions"
            title="What GenAILabs worked on."
            description="Factual breakdown of our direct engineering contributions."
          />
          <NumberedCards items={contributions} gap="gap-5" />
        </div>
      </section>

      {/* 6. SYSTEM / SOLUTION */}
      <section className="bg-deep">
        <div className={bandClass}>
          <SectionHeading
            eyebrow="System / solution"
            title="Technical design of the custom system."
            description="Eleventy static site, Node.js/Express API, SQLite, PM2, Caddy, and Ask Sinai mobile app."
          />
          <div className="relative w-full aspect-[3/2] max-[640px]:aspect-[4/3] overflow-clip rounded-[8px] border border-line bg-[#0f1417]">
            <ImageLightbox
              src="/figma/askdahab-hero.png"
              alt="Ask Dahab system architecture — Eleventy static site, Node.js API, SQLite, mobile app"
              sizes="(max-width: 1280px) 100vw, 1280px"
              fit="contain"
            />
          </div>
          <div className="flex items-center gap-4 rounded-[4px] border border-[#1c2328] bg-panel px-[18px] py-3.5 max-[640px]:flex-col max-[640px]:items-start max-[640px]:gap-2">
            <p className="shrink-0 font-mono text-[10px] font-bold tracking-[0.8px] uppercase text-orange">
              System architecture
            </p>
            <p className="text-[13px] leading-[19px] text-muted">
              Eleventy + Nunjucks static site (6 languages, ~915 pages) → Node.js/Express API for bookings, search, and admin → SQLite database → PM2 process management → Caddy reverse proxy with automatic HTTPS. Ask Sinai mobile app (iOS/Android) consumes the same API. Google Search Console & DataForSEO for SEO monitoring. Stripe integration planned for payments phase. 314 automated checks run on every build.
            </p>
          </div>
        </div>
      </section>

      {/* 7. FLYWHEEL IMPULSE */}
      <section className="border-y border-[#1c2328] bg-ink">
        <div className={bandClass}>
          <SectionHeading
            eyebrow="Flywheel impulse"
            title="Deployment, integration, and real-world use."
            description="Verified real-world deployment, maintenance, and scale protocols."
          />
          <div className="flex flex-col gap-6">
            <p className="border-l-4 border-orange pl-6 text-[17px] leading-7 text-muted">
              Live in production at askdahab.com with Ask Sinai on the App Store
              and Google Play. The client team manages all content in the admin
              panel without writing code — the site rebuilds itself automatically
              on changes. GenAILabs deploys code updates. The stack runs
              cheaply on a single VPS: static site served by Caddy, Node.js/Express
              API for dynamic features, SQLite for data, PM2 for process
              management. 51 releases since October 2026.
            </p>
            <dl className="grid grid-cols-3 gap-4 max-[900px]:grid-cols-1">
              {deploymentDetails.map((detail) => (
                <div
                  key={detail.label}
                  className="flex flex-col gap-2 rounded-[4px] border border-[#1c2328] bg-[#0f1417] p-5"
                >
                  <dt className="font-mono text-[10px] font-bold tracking-[0.8px] uppercase text-[#747d81]">
                    {detail.label}
                  </dt>
                  <dd className="text-[15px] leading-6 text-text">
                    {detail.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* 8. OUTCOMES / EVIDENCE */}
      <section className="bg-deep">
        <div className={bandClass}>
          <SectionHeading
            eyebrow="Outcomes / evidence"
            title="Verified results from the shipped product."
            description="Every result listed is verified and sourced from the Ask Dahab case data."
          />
          <div className="grid grid-cols-3 gap-6 max-[900px]:grid-cols-1">
            {evidence.map((item, i) => (
              <article
                key={i}
                className={`flex flex-col items-center gap-3 rounded-[8px] p-8 text-center ${
                  item.highlight
                    ? "border-2 border-orange bg-panel shadow-[0_0_30px_rgba(255,152,0,0.25)]"
                    : "border border-line bg-[#0f1417] shadow-[0_18px_40px_-18px_rgba(0,0,0,0.18)]"
                }`}
              >
                <p
                  className={`font-mono text-[10px] font-bold tracking-[1px] uppercase ${
                    item.highlight ? "text-orange" : "text-[#747d81]"
                  }`}
                >
                  {item.label}
                </p>
                <div
                  className={`h-px w-full ${item.highlight ? "bg-line" : "bg-[#1c2328]"}`}
                  aria-hidden="true"
                />
                <p className="text-[clamp(18px,3.5vw,24px)] font-medium tracking-[-1px] text-text">
                  {item.value}
                </p>
                <p className="text-[13px] leading-[19px] text-muted">
                  {item.source}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 9. TESTIMONIAL */}
      <div className="mx-auto max-w-[1280px] bg-ink">
        <ServicesProofSlider />
      </div>

      {/* 10. CAPABILITIES INVOLVED */}
      <section className="bg-deep">
        <div className={bandClass}>
          <SectionHeading
            eyebrow="Capabilities involved"
            title="How core competencies were applied."
            description="AI Product Engineering and Forward-Deployed Services were both demonstrated in production."
          />
          <NumberedCards items={capabilities} gap="gap-4" />
        </div>
      </section>

      {/* 11. RELATED WORK */}
      <section className="border-y border-[#1c2328] bg-ink">
        <div className={bandClass}>
          <SectionHeading
            eyebrow="Related work"
            title="Other production builds."
            description="Companion app and another AI product engineering engagement from the same team."
          />
          <div className="grid grid-cols-2 gap-8 max-[900px]:grid-cols-1">
            {relatedWork.map((project) => (
              <article
                key={project.title}
                className={`${cardClass} group flex flex-col gap-5 p-6 shadow-[0_18px_40px_-18px_rgba(0,0,0,0.18)]`}
              >
                <div className="relative h-[180px] overflow-clip rounded-[4px] border border-[#1c2328] bg-deep">
                  <ImageLightbox
                    src={project.image}
                    alt=""
                    sizes="(max-width: 900px) 100vw, 50vw"
                  />
                  {project.glow && (
                    <div className="absolute -right-px -top-px h-[140px] w-[150px] bg-[linear-gradient(223deg,rgba(255,152,0,0.1)_0%,rgba(255,152,0,0)_50%)] opacity-50 blur-[16px]" />
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-line bg-[#0f1417] px-2.5 py-1 font-mono text-[10px] font-bold tracking-[0.5px] uppercase text-orange">
                    {project.category}
                  </span>
                  <span className="font-mono text-[10px] text-[#747d81]">
                    {project.cycle}
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-bold leading-[30px] text-text">
                    {project.title}
                  </h3>
                  <p className="text-[15px] leading-6 text-muted">
                    {project.description}
                  </p>
                </div>
                <Link
                  href={project.href}
                  className="inline-flex items-center gap-2 font-bold text-orange"
                >
                  <span className="text-[13px] leading-4 tracking-[0.65px] uppercase">
                    View Case Study
                  </span>
                  <span
                    aria-hidden="true"
                    className="text-base transition-transform duration-200 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 12. CALLOUT CTA */}
      <section className="relative overflow-hidden bg-[linear-gradient(to_bottom,#080b0d,#0f1417_50%,#080b0d)] px-20 py-24 max-[900px]:px-10 max-[640px]:px-5 max-[640px]:py-14">
        <div
          className="absolute left-1/2 top-1/2 h-[340px] w-[720px] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-[12px] bg-[rgba(255,152,0,0.1)] blur-[65px]"
          aria-hidden="true"
        />
        <div className="cta-panel cta-panel--sentence relative mx-auto max-w-[1280px]">
          <p className="eyebrow">
            <span className="cta-panel-dot" aria-hidden="true" />
            Let&apos;s talk
          </p>
          <h2>Have a similar challenge?</h2>
          <p>Let&apos;s discuss the problem you&apos;re trying to solve.</p>
          <a className="button button-primary" href="/contact">
            Talk to our team <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>
    </main>
  );
}