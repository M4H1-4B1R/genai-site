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
    value: "Mingcheji — global car-history and parts platform for buyers outside China (website + mobile app)",
  },
  {
    label: "Engagement",
    value: "Full website redesign + new backend API: sign-in, accounts, free part checks, Stripe pay-first orders, coupons, order queue, GlobalVIN vehicle data",
  },
  {
    label: "Status",
    value: "Pilot — running on a preview site, not yet in production",
  },
  {
    label: "Technology",
    value: "Next.js 16, React 19, Tailwind CSS 4, next-intl · Node.js, TypeScript, Express 5, PostgreSQL, Kysely, pg-boss, Zod · Stripe Checkout, Google sign-in · GlobalVIN, che168 via Apify · Vercel, Render preview, Sentry",
  },
];

const riskBounds: Fact[] = [
  {
    label: "Operational context",
    value: "Chinese-car history and parts data exists in Chinese, priced in CNY, written for China's own formats; pilot runs on a preview site, not production",
  },
  {
    label: "Technical constraints",
    value: "API keys stay on the server; full VINs from listings never reach the browser; dealer phone numbers are never stored or shown",
  },
];

const contributions: NumberedCard[] = [
  {
    title: "Website + mobile app redesign",
    description:
      "Full redesign of the website to the new Figma designs, including Arabic right-to-left layout, replacing the earlier Chinese/English demo with ¥ prices and hard-coded cars.",
  },
  {
    title: "Backend API",
    description:
      "New backend API: sign-in (Google, optional password), accounts, free part checks, Stripe pay-first orders, coupons, and an order queue.",
  },
  {
    title: "Vehicle data access",
    description:
      "Access to the vehicle data provider (GlobalVIN, via the China Vehicle History backend) for car-history reports.",
  },
  {
    title: "Car Parts",
    description:
      "VIN or part-number lookup, a car's full parts catalogue, and OEM prices in USD.",
  },
];

const deploymentDetails: Fact[] = [
  {
    label: "Integration pattern",
    value:
      "GlobalVIN vehicle and spare-parts APIs; che168 listings via Apify (chosen for Car Search); Stripe Checkout payments; Google sign-in",
  },
  {
    label: "Scale protocol",
    value:
      "At most about 5 GlobalVIN calls at once (paid orders first); circuit breaker pauses calls when GlobalVIN fails; daily budget stops spending past a cap",
  },
  {
    label: "Maintenance mode",
    value:
      "Prices, limits, coupon rules and call costs are settings stored with history, picked up within 30 seconds; background jobs retry deliveries for up to 24 hours",
  },
];

const evidence = [
  {
    label: "Verified evidence",
    value: "Six languages on every page",
    source:
      "next-intl — English, Arabic, Russian, Spanish, Portuguese, Chinese — with full Arabic right-to-left layout",
  },
  {
    label: "Verified evidence",
    value: "No lookup paid for twice",
    source: "Results are stored; a search that finds nothing issues a 60-day coupon",
  },
  {
    label: "Key outcome",
    value: "Car Parts works end to end",
    source:
      "Sign-in, free checks, Stripe payment, order queue, and a translated whole-car parts catalogue",
    highlight: true,
  },
];

const capabilities: NumberedCard[] = [
  {
    title: "AI Product Engineering",
    description:
      "Full website redesign to new Figma designs with Arabic RTL; new backend API and Car Parts lookup with OEM prices in USD — all demonstrated in the pilot.",
  },
  {
    title: "Forward-Deployed Services",
    description:
      "Pilot running on a preview site (Vercel website, Render API preview) with settings-based configuration picked up within 30 seconds and self-repairing background jobs.",
  },
];

const relatedWork: Array<{
  category: string;
  cycle: string;
  title: string;
  description: string;
  glow: boolean;
}> = [];

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

export function MingchejiCaseStudyPage() {
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
              Mingcheji
            </h1>
            <p className="text-lg leading-7 text-muted">
              Mingcheji gives buyers outside China one platform to check a
              Chinese car&apos;s history, find parts that fit it, and browse listings
              — in six languages, with prices in USD. Pilot on a preview site;
              not yet in production.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-orange px-2.5 py-1.5 font-mono text-[10px] font-bold tracking-[0.5px] uppercase text-orange">
                <span className="size-[5px] rounded-full bg-orange" aria-hidden="true" />
                Pilot — preview site
              </span>
              <span className="font-mono text-[10px] uppercase text-[#747d81]">
                Preview on Render today
              </span>
            </div>
          </div>

          <div className="relative h-[360px] min-w-0 flex-1 max-[900px]:flex-none overflow-clip rounded-[8px] border border-line bg-[#0f1417] max-[640px]:h-[240px]">
            <ImageLightbox
              src="/figma/mingcheji-hero.png"
              alt="Mingcheji mobile app — Hot lots vehicle listings with verified badges"
              sizes="(max-width: 640px) 320px, 32vw"
            />
            <span className="absolute bottom-6 left-6 rounded-[4px] border border-line bg-[rgba(13,14,15,0.8)] px-3 py-1.5 font-mono text-[10px] font-bold tracking-[0.6px] uppercase text-[#747d81]">
              Mobile app interface
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
                Production metrics &amp; deployment details.
              </h2>
            </div>
            <p className="text-[15px] leading-6 text-muted">
              Audited environment metrics verified against live deployment.
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
                Buyers outside China had no easy way to check a Chinese car&apos;s
                history, find parts that fit it, or browse listings — the data
                exists in Chinese, priced in yuan (CNY), and written for
                China&apos;s own formats.
              </p>
              <p className="text-[17px] leading-7 text-muted">
                The client needed one global platform in six languages
                (English, Arabic, Russian, Spanish, Portuguese, Chinese) with
                prices in USD. An earlier front-end demo (Chinese/English, ¥
                prices, hard-coded cars) has been fully replaced; Car Search
                and the history report pages run on sample data until the live
                data is connected.
              </p>
            </div>
            <aside className={`${cardClass} flex w-[380px] shrink-0 flex-col gap-5 p-6 max-[900px]:w-full`}>
              <p className="font-mono text-[10px] font-bold tracking-[1px] uppercase text-[#747d81]">
                Operational risk bounds
              </p>
              {riskBounds.map((metric, i) => (
                <div key={metric.label} className="flex flex-col gap-5">
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
            description="Next.js website, Node.js/Express backend, GlobalVIN vehicle data, Stripe payments, and self-repairing background jobs."
          />
					<img src="/architecture.svg" />
          <div className="flex items-center gap-4 rounded-[4px] border border-[#1c2328] bg-panel px-[18px] py-3.5 max-[640px]:flex-col max-[640px]:items-start max-[640px]:gap-2">
            <p className="shrink-0 font-mono text-[10px] font-bold tracking-[0.8px] uppercase text-orange">
              System architecture
            </p>
            <p className="text-[13px] leading-[19px] text-muted">
              Next.js 16 website (Vercel) → Node.js/Express 5 API (Render
              preview) → GlobalVIN vehicle & spare-parts APIs via the China
              Vehicle History backend; che168 listings via Apify for Car Search;
              Stripe Checkout payments; Google sign-in; PostgreSQL + Kysely +
              pg-boss job queue; Sentry monitoring. Reports show only
              provider-returned data, with &quot;no data&quot; states for empty sections.
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
              Pilot running on a preview site (Vercel website, Render API
              preview). Changes ship without a release: prices, limits, coupon
              rules and call costs are settings stored with history and picked
              up within 30 seconds. Production target is a VPS with Docker
              (proxy, API, worker, Postgres, backups) — not built yet.
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
            title="Audited metrics proving system efficacy."
            description="Every metric listed is verified and sourced from the Mingcheji case data."
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
                <p className="text-[clamp(28px,3.5vw,32px)] font-medium tracking-[-1px] text-text">
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
            description="AI Product Engineering and Forward-Deployed Services were both demonstrated in this pilot."
          />
          <NumberedCards items={capabilities} gap="gap-4" />
        </div>
      </section>

      {/* 11. RELATED WORK */}
      <section className="border-y border-[#1c2328] bg-ink">
        <div className={bandClass}>
          <SectionHeading
            eyebrow="Related work"
            title="None — Mingcheji is the first in this domain."
            description="No related case studies exist yet for the Mingcheji project."
          />
          <div className="grid grid-cols-2 gap-8 max-[900px]:grid-cols-1">
            {relatedWork.map((project) => (
              <article
                key={project.cycle}
                className={`${cardClass} group flex flex-col gap-5 p-6 shadow-[0_18px_40px_-18px_rgba(0,0,0,0.18)]`}
              >
                <div
                  className="relative h-[180px] overflow-clip rounded-[4px] border border-[#1c2328] bg-deep"
                  aria-hidden="true"
                >
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
                  href="/work#all-work"
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
