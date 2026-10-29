import Image from "next/image";
import Link from "next/link";

import { ImageLightbox } from "@/components/shared/image-lightbox";
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
    value:
      "Kaya — AI functional medicine health coach for iOS and Android, published by GenAILabs",
  },
  {
    label: "Engagement",
    value:
      "End-to-end build: Flutter app, backend API, AI coaching engine, Firebase auth and payments — then a fixed price plus an ongoing retainer for maintenance",
  },
  {
    label: "Status",
    value: "Live on the App Store and Google Play (production)",
  },
  {
    label: "Technology",
    value:
      "Flutter, GetX, Firebase Auth, Firebase FCM · Python FastAPI, PostgreSQL · OpenAI / LLM streaming over SSE · Stripe · Google Sign-In, Apple Sign-In · Flutter Secure Storage, Codemagic CI/CD",
  },
];

const riskBounds: Fact[] = [
  {
    label:
      "Medical disclaimer shown at onboarding; liability is limited to coaching guidance, not medical advice",
    value: "Coaching guidance only",
  },
  {
    label: "Data encrypted at rest; not HIPAA-certified, but GDPR-aligned",
    value: "GDPR-aligned, encrypted at rest",
  },
];

const contributions: NumberedCard[] = [
  {
    title: "Flutter app",
    description:
      "Cross-platform iOS and Android app built with GetX: guided sessions, coaching conversations, progress tracking, and multi-device session management.",
  },
  {
    title: "AI coaching engine",
    description:
      "Real-time coach responses streamed from OpenAI/LLM over SSE — under one second to the first token — with personalised health journeys.",
  },
  {
    title: "Structured health journeys",
    description:
      "Intro → foundation → follow-up sessions, a habit and goal system, mood tracking, and weekly analytics.",
  },
  {
    title: "Backend API",
    description:
      "Python FastAPI service on PostgreSQL for sessions, habits, goals, mood, progress, and uploads of up to 10 images per session.",
  },
  {
    title: "Auth, payments & delivery",
    description:
      "Firebase Auth with Google and Apple sign-in, FCM notifications, Stripe payments, Flutter Secure Storage, and Codemagic CI/CD.",
  },
];

const deploymentDetails: Fact[] = [
  {
    label: "Integration pattern",
    value:
      "Firebase Auth (Google and Apple sign-in) and FCM, Stripe payments, OpenAI/LLM streaming over SSE, Codemagic CI/CD shipping to the App Store and Google Play",
  },
  {
    label: "Scale protocol",
    value:
      "Multi-device session management with conflict resolution, biometric login with refresh token rotation, and up to 10 images per session",
  },
  {
    label: "Maintenance mode",
    value:
      "Fixed price plus an ongoing retainer: bug fixes, model updates, and new features each sprint, watched through an internal dashboard, Firebase Analytics, and App Store Connect",
  },
];

const evidence = [
  {
    label: "Verified evidence",
    value: "Under 1s to first token",
    source: "Real-time coach responses streamed over SSE from the LLM",
  },
  {
    label: "Verified evidence",
    value: "Biometric login, rotating refresh tokens",
    source: "Multi-device sessions with conflict resolution and secure storage",
  },
  {
    label: "Key outcome",
    value: "Live on the App Store & Google Play",
    source:
      "Production release built end to end by GenAILabs, maintained on a fixed price plus retainer",
    highlight: true,
  },
];

const capabilities: NumberedCard[] = [
  {
    title: "AI Product Engineering",
    description:
      "The whole product: Flutter app, FastAPI backend, AI coaching engine with sub-second SSE streaming, Firebase auth, Stripe payments, and structured intro → foundation → follow-up journeys.",
  },
  {
    title: "Forward-Deployed Services",
    description:
      "Live on both app stores through Codemagic CI/CD, with multi-device session handling and a maintenance retainer covering bug fixes, model updates, and new features each sprint.",
  },
];

const relatedWork = [
  {
    category: "AI Product Engineering",
    cycle: "Pilot",
    title: "Mingcheji",
    description:
      "Global car-history and parts platform for buyers outside China — six languages, USD pricing, piloted on a preview site.",
    glow: true,
    image: "/figma/mingcheji-showcase.png",
    href: "/case-study/mingcheji",
  },
  {
    category: "Agentic Layer Engineering",
    cycle: "Production",
    title: "NexAgents",
    description:
      "Production AI agent platform for teams — per-person model access, agent builder, data stores with spending caps, and metered token costs.",
    glow: false,
    image: "/figma/nexagents-hero.png",
    href: "/case-study/nexagents",
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

export function KayaCaseStudyPage() {
  return (
    <main className="w-full">
      {/* 1. HERO */}
      <section className="bg-deep px-[120px] pt-20 max-[900px]:px-10 max-[900px]:pb-16 max-[640px]:px-5 max-[640px]:pt-12 pb-10">
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
              Kaya Functional Health
            </h1>
            <p className="text-lg leading-7 text-muted">
              Kaya is an AI functional medicine health coach. It guides people
              through structured wellness sessions — intro, foundation,
              follow-up — with real-time coaching, habit, goal and mood
              tracking, and personalised journeys that don&apos;t need a human
              coach for every interaction.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-orange px-2.5 py-1.5 font-mono text-[10px] font-bold tracking-[0.5px] uppercase text-orange">
                <span className="size-[5px] rounded-full bg-orange" aria-hidden="true" />
                Live — App Store &amp; Google Play
              </span>
              <span className="font-mono text-[10px] uppercase text-[#747d81]">
                Public store links not available yet
              </span>
            </div>
          </div>

          <div className="relative h-[360px] min-w-0 flex-1 max-[900px]:flex-none overflow-clip rounded-[8px] border border-line bg-[#0f1417] max-[640px]:h-[240px]">
            <ImageLightbox
              fit="contain"
              src="/figma/kaya-phone-left.png"
              alt="Kaya mobile app — guided coaching session"
              sizes="(max-width: 640px) 100vw, 32vw"
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
                Production status &amp; delivery details.
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
                The client needed a personalised AI health coaching app that
                guides people through structured wellness sessions, tracks
                habits, goals and mood, and answers in real time — without
                requiring a human coach for every interaction.
              </p>
              <p className="text-[17px] leading-7 text-muted">
                Kaya — AI functional medicine health coach — had to work as a
                cross-platform product: coaching conversations, guided
                sessions, progress tracking and personalised health journeys,
                with sessions that follow the user across devices. It also had
                to ship through both app stores, carry the medical disclaimer
                at onboarding, and stay aligned with GDPR while coaching
                guidance remained clearly separate from medical advice.
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
            description="Flutter client, FastAPI backend, LLM streaming, Firebase auth, Stripe payments, and Codemagic delivery to both stores."
          />
          <Image
            src="/figma/work/8b005.png"
            alt="Kaya — coaching app and web presence"
            width={1536}
            height={1024}
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="h-auto w-full rounded-[8px] border border-line"
          />
          <div className="flex items-center gap-4 rounded-[4px] border border-[#1c2328] bg-panel px-[18px] py-3.5 max-[640px]:flex-col max-[640px]:items-start max-[640px]:gap-2">
            <p className="shrink-0 font-mono text-[10px] font-bold tracking-[0.8px] uppercase text-orange">
              System architecture
            </p>
            <p className="text-[13px] leading-[19px] text-muted">
              Flutter app with GetX on iOS and Android → Python FastAPI on
              PostgreSQL for sessions, habits, goals, mood and uploads →
              OpenAI/LLM responses streamed over SSE. Firebase Auth handles
              Google and Apple sign-in; Firebase FCM delivers notifications;
              Stripe handles payments; Flutter Secure Storage holds credentials;
              Codemagic CI/CD ships builds to the App Store and Google Play.
              Firebase Analytics, an internal dashboard, and App Store Connect
              cover monitoring.
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
              Kaya is live in production on the App Store and Google Play. The
              engagement was a fixed price for the build, followed by an ongoing
              retainer for maintenance: bug fixes, model updates, and new
              features each sprint. Public store links are not available yet.
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
            description="Every result listed is verified and sourced from the Kaya case data."
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
            description="Two more engagements from the same team."
          />
          <div className="grid grid-cols-2 gap-8 max-[900px]:grid-cols-1">
            {relatedWork.map((project) => (
              <article
                key={project.title}
                className={`${cardClass} group flex flex-col gap-5 p-6 shadow-[0_18px_40px_-18px_rgba(0,0,0,0.18)]`}
              >
                <div className="relative h-[180px] overflow-clip rounded-[4px] border border-[#1c2328] bg-deep">
                  <Image
                    src={project.image}
                    alt=""
                    fill
                    sizes="(max-width: 900px) 100vw, 50vw"
                    className="object-cover"
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
