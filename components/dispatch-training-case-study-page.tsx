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

const heroTags = ["Client Project", "Training Platform", "In Development"];

const snapshot: Fact[] = [
  {
    label: "Client / Context",
    value:
      "A web platform for training 911 dispatchers. Product name not finalized, so a generic title is used",
  },
  {
    label: "Engagement",
    value:
      "Fully custom design and build to the client's design, plus deployment and 3 months of free maintenance after launch",
  },
  {
    label: "Status",
    value:
      "Live and under active development. Design and name are not finalized",
  },
  {
    label: "Technology",
    value: "Next.js, Node.js, JavaScript, Tailwind CSS",
  },
];

const riskBounds: Fact[] = [
  {
    label:
      "Scenarios may include health advice, so the platform must follow HIPAA and US law",
    value: "Health content",
  },
  {
    label:
      "Data trainees provide stays private and is not shared with anyone",
    value: "Trainee privacy",
  },
  {
    label: "The design is still being refined with the client",
    value: "Design not final",
  },
];

const contributions: NumberedCard[] = [
  {
    title: "Trainee platform",
    description:
      "Trainees work through assigned call scenarios, each with a briefing first and a score afterwards, and track their own performance and reports.",
  },
  {
    title: "Training system",
    description:
      "A fully functional training system built to the client's requirements: scenarios, assignments with deadlines, scoring and coaching reports.",
  },
  {
    title: "Agency admin panel",
    description:
      "Agencies manage their own trainees, scenarios, protocols, call types, CAD card fields and scoring rules.",
  },
  {
    title: "Superadmin panel",
    description:
      "Platform-level control to provision agencies, publish global scenarios, approve agency submissions and review audit logs and system health.",
  },
  {
    title: "Security & performance",
    description:
      "Robust security, role-based access, an audit log of who changed what, and performance optimization across the app.",
  },
  {
    title: "SEO, GEO & maintenance",
    description:
      "Search and generative-engine optimization, plus 3 months of free maintenance after launch under the contract.",
  },
];

const deploymentDetails: Fact[] = [
  {
    label: "Delivery",
    value:
      "GenAILabs built the whole platform in Next.js, Node and Tailwind from the client's design, and deployed it. It will be handed over to the client when development finishes.",
  },
  {
    label: "Two-sided platform",
    value:
      "One side for trainees running simulated calls, one for agency and platform admins who manage training content and results.",
  },
  {
    label: "Maintenance",
    value:
      "3 months of free maintenance after launch, as per the contract.",
  },
];

const evidence = [
  {
    label: "Roles",
    value: "3 user roles",
    source: "Trainee, agency admin and superadmin, each with its own screens",
  },
  {
    label: "Admin areas",
    value: "12+ admin sections",
    source:
      "Agencies, people, scenarios, assignments, protocols, GIS & maps, call types, CAD card, scoring, reports, audit log and more",
    highlight: true,
  },
  {
    label: "Status",
    value: "Under development",
    source: "No launch metrics or testimonials yet. Screens may change.",
  },
];

const screens = [
  {
    src: "/figma/dispatch-training-trainee.png",
    title: "Trainee screen",
    description:
      "Assigned scenarios with progress, deadlines and retakes. Names and scenario text are blurred.",
  },
  {
    src: "/figma/dispatch-training-agency.png",
    title: "Agency admin",
    description:
      "An agency manages its trainees, scenarios, scoring and CAD card fields. Account details are blurred.",
  },
  {
    src: "/figma/dispatch-training-superadmin.png",
    title: "Superadmin",
    description:
      "Platform-wide control of agencies, the global scenario library and audit logs.",
  },
];

const capabilities: NumberedCard[] = [
  {
    title: "AI Product Engineering",
    description:
      "A custom two-sided web platform built from the client's design, with trainee, agency admin and superadmin experiences.",
  },
  {
    title: "Secure delivery",
    description:
      "Security, performance, SEO and GEO work, plus deployment and post-launch maintenance.",
  },
];

const relatedWork = [
  {
    category: "Client Project",
    cycle: "Live",
    title: "Rennworks",
    description:
      "Porsche and McLaren care done right: a fully custom WordPress site with detailed service pages and a WhatsApp widget.",
    image: "/figma/rennworks-hero.png",
    href: "/case-study/rennworks",
  },
  {
    category: "Client Project",
    cycle: "Live",
    title: "Rennzone",
    description:
      "The global Porsche marketplace: a fully custom Sharetribe build with payments, listings and a blog.",
    image: "/figma/rennzone-hero.png",
    href: "/case-study/rennzone",
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

export function DispatchTrainingCaseStudyPage() {
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
              Dispatch Training Platform
            </h1>
            <p className="text-lg leading-7 text-muted">
              A two-sided web platform for training 911
              dispatchers. GenAILabs designed to the client&apos;s spec, built
              and deployed it. The project is still under development, and
              the name and design are not finalized.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-orange px-2.5 py-1.5 font-mono text-xs font-bold tracking-[0.5px] uppercase text-orange">
                <span className="size-[5px] rounded-full bg-orange" aria-hidden="true" />
                In development
              </span>
            </div>
          </div>

          <div className="relative h-[360px] min-w-0 flex-1 max-[900px]:flex-none overflow-clip rounded-[8px] border border-line bg-[#0f1417] max-[640px]:h-[240px]">
            <ImageLightbox
              src="/figma/dispatch-training-trainee.png"
              alt="Dispatch Training Platform trainee screen with scenarios and progress (sensitive text blurred)"
              sizes="(max-width: 640px) 100vw, 32vw"
            />
            <span className="absolute bottom-6 left-6 rounded-[4px] border border-line bg-[rgba(13,14,15,0.8)] px-3 py-1.5 font-mono text-xs font-bold tracking-[0.6px] uppercase text-[#747d81]">
              Trainee screen · design not final
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
              Status, engagement and technology.
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
                The client needed a custom-coded site to train 911 dispatchers,
                with separate experiences for trainees and for the agencies
                that train them.</p>
              <p className="text-[17px] leading-7 text-muted">
                We delivered a fully custom design and build, with robust
                security, performance optimization, SEO and GEO, plus ongoing
                maintenance. Scenarios may include health advice, so the
                platform has to follow HIPAA and US law, and the data trainees
                provide stays private and is never shared.</p>
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
            description="Next.js, Node.js and Tailwind, built to the client's design."
          />
          <div className="flex items-center gap-4 rounded-[4px] border border-[#1c2328] bg-panel px-[18px] py-3.5 max-[640px]:flex-col max-[640px]:items-start max-[640px]:gap-2">
            <p className="shrink-0 font-mono text-xs font-bold tracking-[0.8px] uppercase text-orange">
              System architecture
            </p>
            <p className="text-[13px] leading-[19px] text-muted">
              Next.js web app with a Node backend. Trainees run scored call scenarios, agency admins manage their own trainees, scenarios and scoring, and a superadmin provisions agencies and approves submitted scenarios. Access is role-based and changes are written to an audit log.</p>
          </div>
        </div>
      </section>

      {/* 7. FLYWHEEL IMPULSE */}
      <section className="border-y border-[#1c2328] bg-ink">
        <div className={bandClass}>
          <SectionHeading
            eyebrow="Flywheel impulse"
            title="Deployment, integration, and real-world use."
            description="Delivery, handover and maintenance terms."
          />
          <div className="flex flex-col gap-6">
            <p className="border-l-4 border-orange pl-6 text-[17px] leading-7 text-muted">
              This platform is live and still under development. The design and
              name are not finalized, and the client will take it over once
              development finishes. No testimonial or launch metrics yet.</p>
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
            title="What has been built so far."
            description="What exists today. No performance or usage metrics are claimed yet."
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

      {/* SCREENS */}
      <section className="border-y border-[#1c2328] bg-ink">
        <div className={bandClass}>
          <SectionHeading
            eyebrow="Screens"
            title="Work in progress."
            description="Current screens. The design is not finalized and may change. Sensitive text is blurred."
          />
          <div className="grid grid-cols-3 gap-6 max-[900px]:grid-cols-1">
            {screens.map((screen) => (
              <article key={screen.title} className={`${cardClass} ${hoverClass} flex flex-col gap-4 p-4`}>
                <div className="relative h-[200px] overflow-clip rounded-[4px] border border-[#1c2328] bg-deep">
                  <ImageLightbox
                    src={screen.src}
                    alt={`Dispatch Training Platform ${screen.title.toLowerCase()} (sensitive text blurred)`}
                    sizes="(max-width: 900px) 100vw, 33vw"
                  />
                </div>
                <h3 className="text-lg font-bold leading-6 text-text">{screen.title}</h3>
                <p className="text-[15px] leading-6 text-muted">{screen.description}</p>
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
            description="Product engineering plus secure, maintained delivery."
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
            description="Other client projects. More to follow once their case studies are approved."
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
