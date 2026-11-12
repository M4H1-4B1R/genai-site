import Link from "next/link";

import { ImageLightbox } from "@/components/shared/image-lightbox";

type Fact = {
  label: string;
  value: string;
};

type NumberedCard = {
  title: string;
  description: string;
};

const heroTags = ["Client Project", "Custom Sharetribe Marketplace"];

const url = "https://spruceup.ie/";

const snapshot: Fact[] = [
  {
    label: "Client / Context",
    value: "SpruceUp (spruceup.ie) — a two-sided marketplace for finding reliable cleaners in Ireland",
  },
  {
    label: "Engagement",
    value:
      "Full custom design and build to the client's design, deployment and handover. 3 months of free maintenance after launch, as per contract",
  },
  {
    label: "Status",
    value: "Live in production for a couple of months",
  },
  {
    label: "Technology",
    value: "Sharetribe Extend, Node.js, JavaScript, Tailwind CSS",
  },
];

const riskBounds: Fact[] = [
  {
    label: "No health data handled",
    value: "HIPAA does not apply",
  },
  {
    label: "Built to comply with Irish law",
    value: "Irish-law compliant",
  },
  {
    label:
      "Documents cleaners provide for verification, shared with their own consent, stay private and are not shared with anyone",
    value: "Verification data stays private",
  },
];

const contributions: NumberedCard[] = [
  {
    title: "Custom Sharetribe marketplace",
    description:
      "A fully custom-coded Sharetribe Extend build to the client's design, not a generic template.",
  },
  {
    title: "Two-sided marketplace",
    description:
      "Cleaners register and find work; hirers find cleaners in their area. Multipage experience for both sides.",
  },
  {
    title: "Payments with automatic commission",
    description:
      "A fully functional payment system that calculates the platform's commission automatically.",
  },
  {
    title: "Identity verification",
    description:
      "Full identity verification using real documents, so hirers can trust who they book.",
  },
  {
    title: "Irish-law compliance",
    description:
      "Built to comply with Irish law, including how verification data is handled.",
  },
  {
    title: "Security, performance, SEO and GEO",
    description:
      "Security hardening and performance optimisation, with SEO and GEO built in from the start.",
  },
];

const deploymentDetails: Fact[] = [
  {
    label: "Delivery",
    value:
      "GenAILabs built the marketplace on Sharetribe Extend to the client's design, deployed it, then handed it over.",
  },
  {
    label: "Ownership",
    value:
      "The client owns the platform and runs it independently after handover.",
  },
  {
    label: "Maintenance",
    value:
      "3 months of free maintenance after launch, as per the contract.",
  },
];

const evidence = [
  {
    label: "Verified evidence",
    value: "Two-sided marketplace",
    source: "Separate flows for cleaners finding work and hirers finding cleaners",
  },
  {
    label: "Verified evidence",
    value: "Automatic commission",
    source: "Payments calculate the platform's commission without manual work",
  },
  {
    label: "Verified evidence",
    value: "Document-based identity checks",
    source: "Cleaners are verified with real documents, kept private",
  },
  {
    label: "Key outcome",
    value: "5-star Fiverr review",
    source:
      "Delivered end to end and handed over to the client. Live at spruceup.ie.",
    highlight: true,
  },
];

const capabilities: NumberedCard[] = [
  {
    title: "Custom Marketplace Engineering",
    description:
      "Sharetribe Extend, Node.js and Tailwind used to build a bespoke two-sided marketplace with payments and identity verification.",
  },
  {
    title: "Trust and Compliance",
    description:
      "Document-based verification and Irish-law compliance built into the product from the start.",
  },
];

const relatedWork = [
  {
    category: "Client Project",
    cycle: "Live",
    title: "Rennzone",
    description:
      "The global Porsche marketplace: a fully custom Sharetribe build with payments, listings and a blog.",
    image: "/figma/rennzone-hero.png",
    href: "/case-study/rennzone",
  },
  {
    category: "Client Project",
    cycle: "Live",
    title: "Rennworks",
    description:
      "Porsche and McLaren care done right: a custom WordPress site with detailed service pages and a WhatsApp widget.",
    image: "/figma/rennworks-hero.png",
    href: "/case-study/rennworks",
  },
];

// Shared shell for the 1280px content bands below the snapshot.
const bandClass =
  "flex flex-col gap-12 section-x section-y max-[640px]:gap-8";

const cardClass = "rounded-[8px] border border-line bg-[#0f1417]";

// Subtle lift + orange border on hover; no movement for reduced-motion users.
const hoverClass =
  "transition duration-200 ease-out hover:-translate-y-1 hover:border-orange/60 motion-reduce:transition-none motion-reduce:hover:translate-y-0";

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
        <p className="font-mono text-xs font-bold tracking-[1.2px] uppercase text-[#999ea2]">
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
    <span className="rounded-[4px] border border-orange px-2.5 py-1.5 font-mono text-xs font-bold tracking-[0.5px] text-orange">
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
          className={`${cardClass} ${hoverClass} flex flex-col items-start p-6 shadow-[0_18px_40px_-18px_rgba(0,0,0,0.18)] ${gap}`}
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

export function SpruceUpCaseStudyPage() {
  return (
    <main className="w-full">
      {/* 1. HERO */}
      <section className="bg-deep section-x pt-20 pb-10 max-[640px]:pt-12">
        <div className="flex items-center gap-12 max-[900px]:flex-col max-[900px]:items-stretch">
          <div className="flex min-w-0 flex-1 flex-col items-start gap-6">
            <ul className="flex flex-wrap gap-2">
              {heroTags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-line bg-[#0f1417] px-3 py-1 font-mono text-xs font-bold tracking-[0.6px] uppercase text-orange transition-colors duration-200 hover:border-orange"
                >
                  {tag}
                </li>
              ))}
            </ul>
            <h1 className="text-[clamp(40px,5vw,58px)] font-medium leading-[1.1] tracking-[-1.2px] text-text">
              SpruceUp
            </h1>
            <p className="text-lg leading-7 text-muted">
              SpruceUp helps people find reliable cleaners in Ireland. Cleaners
              register and find work; hirers find cleaners in their area.
              GenAILabs designed and built the custom Sharetribe marketplace to
              the client&apos;s design, deployed it and handed it over.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-orange px-2.5 py-1.5 font-mono text-xs font-bold tracking-[0.5px] uppercase text-orange">
                <span className="size-[5px] rounded-full bg-orange" aria-hidden="true" />
                Live
              </span>
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs font-bold uppercase text-orange underline-offset-4 transition-colors duration-200 hover:text-text hover:underline"
              >
                View Live →
              </a>
            </div>
          </div>

          <div className="relative h-[360px] min-w-0 flex-1 max-[900px]:flex-none overflow-clip rounded-[8px] border border-line bg-[#0f1417] max-[640px]:h-[240px]">
            <ImageLightbox
              src="/figma/spruceup-hero.png"
              alt="SpruceUp — find reliable cleaners in Ireland"
              sizes="(max-width: 640px) 100vw, 32vw"
            />
            <span className="absolute bottom-6 left-6 rounded-[4px] border border-line bg-[rgba(13,14,15,0.8)] px-3 py-1.5 font-mono text-xs font-bold tracking-[0.6px] uppercase text-[#747d81]">
              Website homepage
            </span>
          </div>
        </div>
      </section>

      {/* 2. PROJECT SNAPSHOT */}
      <section className="border-y border-[#1c2328] bg-ink section-x py-[60px] max-[640px]:py-12">
        <div className="flex flex-col gap-8">
          <div className="flex items-end justify-between gap-8 max-[900px]:flex-col max-[900px]:items-start max-[900px]:gap-4">
            <div className="flex flex-col gap-3">
              <p className="font-mono text-xs font-bold tracking-[1.2px] uppercase text-[#999ea2]">
                Snapshot
              </p>
              <h2 className="max-w-[447px] text-[clamp(30px,4vw,40px)] font-medium leading-[1.15] text-text">
                Delivery, status and stack.
              </h2>
            </div>
            <p className="text-[15px] leading-6 text-muted">
              Verified status, engagement and technology.
            </p>
          </div>
          <dl className="grid grid-cols-4 gap-4 max-[900px]:grid-cols-2 max-[640px]:grid-cols-1">
            {snapshot.map((fact) => (
              <div key={fact.label} className={`${cardClass} ${hoverClass} flex flex-col gap-2 p-6`}>
                <dt className="font-mono text-xs font-bold tracking-[1px] uppercase text-[#747d81]">
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
                The client needed a custom Sharetribe site for cleaners in
                Ireland: cleaners register and find work, and hirers find
                cleaners in their area. Trust was the hard part, so it had to
                verify cleaners properly.</p>
              <p className="text-[17px] leading-7 text-muted">
                The platform had to support both sides, take payments and
                calculate commission automatically, verify identities with real
                documents, and comply with Irish law. GenAILabs delivered the
                custom design and build, security hardening, performance
                optimisation, SEO and GEO, then maintained it for three months
                after launch.</p>
            </div>
            <aside className={`${cardClass} flex w-[380px] shrink-0 flex-col gap-5 p-6 max-[900px]:w-full`}>
              <p className="font-mono text-xs font-bold tracking-[1px] uppercase text-[#747d81]">
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
            description="Sharetribe Extend, Node.js and Tailwind."
          />
          <div className="flex items-center gap-4 rounded-[4px] border border-[#1c2328] bg-panel px-[18px] py-3.5 max-[640px]:flex-col max-[640px]:items-start max-[640px]:gap-2">
            <p className="shrink-0 font-mono text-xs font-bold tracking-[0.8px] uppercase text-orange">
              System architecture
            </p>
            <p className="text-[13px] leading-[19px] text-muted">
              Custom Sharetribe Extend marketplace in Node.js and JavaScript, styled with Tailwind. Two-sided multipage experience for cleaners and hirers, a payment flow with automatic commission calculation, and document-based identity verification.</p>
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
              Live at spruceup.ie for a couple of months. GenAILabs built the
              marketplace on Sharetribe Extend to the client&apos;s design,
              deployed it and handed it over, with three months of free
              maintenance after launch as per the contract.</p>
            <dl className="grid grid-cols-3 gap-4 max-[900px]:grid-cols-1">
              {deploymentDetails.map((detail) => (
                <div
                  key={detail.label}
                  className={`${hoverClass} flex flex-col gap-2 rounded-[4px] border border-[#1c2328] bg-[#0f1417] p-5`}
                >
                  <dt className="font-mono text-xs font-bold tracking-[0.8px] uppercase text-[#747d81]">
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
            title="Verified facts about the delivered site."
            description="No analytics are cited here. These are facts about the delivered build."
          />
          <div className="grid grid-cols-3 gap-6 max-[900px]:grid-cols-1">
            {evidence.map((item, i) => (
              <article
                key={i}
                className={`flex flex-col items-center gap-3 rounded-[8px] p-8 text-center ${
                  item.highlight
                    ? "border-2 border-orange bg-panel shadow-[0_0_30px_rgba(255,152,0,0.25)] transition-shadow duration-200 hover:shadow-[0_0_44px_rgba(255,152,0,0.4)] motion-reduce:transition-none"
                    : `${hoverClass} border border-line bg-[#0f1417] shadow-[0_18px_40px_-18px_rgba(0,0,0,0.18)]`
                }`}
              >
                <p
                  className={`font-mono text-xs font-bold tracking-[1px] uppercase ${
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

      {/* 10. CAPABILITIES INVOLVED */}
      <section className="bg-deep">
        <div className={bandClass}>
          <SectionHeading
            eyebrow="Capabilities involved"
            title="How core competencies were applied."
            description="Custom marketplace engineering plus trust and compliance, delivered in production."
          />
          <NumberedCards items={capabilities} gap="gap-4" />
        </div>
      </section>

      {/* 11. RELATED WORK */}
      <section className="border-y border-[#1c2328] bg-ink">
        <div className={bandClass}>
          <SectionHeading
            eyebrow="Related work"
            title="Related work."
            description="Other client projects built by the same team."
          />
          <div className="grid grid-cols-2 gap-8 max-[900px]:grid-cols-1">
            {relatedWork.map((project) => (
              <article
                key={project.title}
                className={`${cardClass} ${hoverClass} group flex flex-col gap-5 p-6 shadow-[0_18px_40px_-18px_rgba(0,0,0,0.18)]`}
              >
                <div className="relative h-[180px] overflow-clip rounded-[4px] border border-[#1c2328] bg-deep">
                  <ImageLightbox
                    src={project.image}
                    alt=""
                    sizes="(max-width: 900px) 100vw, 50vw"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-line bg-[#0f1417] px-2.5 py-1 font-mono text-xs font-bold tracking-[0.5px] uppercase text-orange">
                    {project.category}
                  </span>
                  <span className="font-mono text-xs text-[#747d81]">
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
                  className="inline-flex min-h-11 items-center gap-2 font-bold text-orange"
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
      <section className="relative overflow-hidden bg-[linear-gradient(to_bottom,#080b0d,#0f1417_50%,#080b0d)] section-x section-y">
        <div
          className="absolute left-1/2 top-1/2 h-[340px] w-[720px] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-[12px] bg-[rgba(255,152,0,0.1)] blur-[65px]"
          aria-hidden="true"
        />
        <div className="cta-panel cta-panel--sentence relative">
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
