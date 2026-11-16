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

const heroTags = ["Client Project", "Mobile App", "AI Coaching"];

const snapshot: Fact[] = [
  {
    label: "Client / Context",
    value: "Confidential client, delivered as a freelance project",
  },
  {
    label: "Engagement",
    value: "Client project: rebuilding the AI coaching logic and releasing the app on iOS and Android",
  },
  {
    label: "Status",
    value: "Live on Android and approved on iOS in February 2024",
  },
  {
    label: "Technology",
    value: "Flutter, OpenAI, LangChain",
  },
];

const riskBounds: Fact[] = [
  {
    label:
      "The coach is meant to ask questions only, one at a time, and never give advice, so the person finds their own answers",
    value: "Non-directive by design",
  },
  {
    label:
      "A language model alone does not track elapsed time, so session length and wrap-up are handled by the surrounding framework",
    value: "Time is managed outside the model",
  },
  {
    label:
      "Coaching quality depends on the underlying model and on the coaching method the client supplied",
    value: "Method comes from the client",
  },
];

const contributions: NumberedCard[] = [
  {
    title: "Diagnosing the failure",
    description:
      "Reviewed the client's prompt and example sessions against the app's behaviour to find why the coach broke its own rules.",
  },
  {
    title: "Framework around the model",
    description:
      "Moved the coaching rules out of a single prompt and into a framework that controls how the conversation unfolds.",
  },
  {
    title: "One question at a time",
    description:
      "Kept the coach to a single question per turn, in a non-directive style, instead of stacked questions or advice.",
  },
  {
    title: "Session pacing",
    description:
      "Added session timing so a coaching conversation runs to a set length and closes with wrap-up questions.",
  },
  {
    title: "Flutter app update",
    description:
      "Connected the new coach logic to the existing Flutter app and rebuilt it for release.",
  },
  {
    title: "Store release",
    description:
      "Prepared the iOS build, handled the review process through to approval, and updated the Android release.",
  },
];

const deploymentDetails: Fact[] = [
  {
    label: "Built by GenAILabs",
    value:
      "The coaching framework, the session logic, the app update and the store releases.",
  },
  {
    label: "Released",
    value:
      "Android was already live. The iOS app went through review and was approved in February 2024.",
  },
  {
    label: "Handover",
    value:
      "The client received the updated source code and both released apps, and asked about retaining GenAILabs for future updates.",
  },
];

const evidence = [
  {
    label: "Verified evidence",
    value: "iOS approved",
    source: "The app was reviewed and approved for distribution on the App Store",
  },
  {
    label: "Verified evidence",
    value: "5-star client review",
    source: "Rated 5 out of 5 for communication, quality of delivery and value",
  },
  {
    label: "Verified evidence",
    value: "Follow-on work requested",
    source: "The client asked about keeping GenAILabs on for updates after delivery",
  },
  {
    label: "Key outcome",
    value: "A coach that follows its method",
    source:
      "The client's coaching approach now runs inside the app, on both stores. No usage metrics were shared.",
    highlight: true,
  },
];

const capabilities: NumberedCard[] = [
  {
    title: "Conversation Design",
    description:
      "Turning a written method into rules, session structure and pacing that a language model follows reliably.",
  },
  {
    title: "Mobile App Delivery",
    description:
      "Updating a Flutter app and taking it through App Store and Google Play releases.",
  },
];

const workflowTree = `sprout/
├── coaching prompt           the client's method as rules
├── session framework         turn rules, timing, wrap-up
├── language model            asks one question per turn
├── flutter app               chat interface
└── store releases            iOS and Android`;

const relatedWork = [
  {
    category: "Client Project",
    cycle: "Delivered",
    title: "Property Ad Agent",
    description:
      "An OpenAI agent that writes unique, rule-checked ads for property listings and saves them to Airtable.",
    image: "/figma/property-ad-agent-features.webp",
    href: "/case-study/property-ad-agent",
  },
  {
    category: "Client Project",
    cycle: "Delivered",
    title: "NDA Analysis Agent",
    description:
      "A CrewAI agent that reviews NDAs against five weighted criteria and returns scores and a clear recommendation.",
    image: "/figma/nda-agent-features.webp",
    href: "/case-study/nda-agent",
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

export function SproutCaseStudyPage() {
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
              Sprout Coaching App
            </h1>
            <p className="text-lg leading-7 text-muted">
              A coach had an AI coaching app that ignored its own method, stacking
              questions and leaning on the book. GenAILabs built a framework
              around the model so it follows the Sprout approach, then released
              the updated app on iOS and Android.</p>
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-orange px-2.5 py-1.5 font-mono text-xs font-bold tracking-[0.5px] uppercase text-orange">
                <span className="size-[5px] rounded-full bg-orange" aria-hidden="true" />
                Delivered
              </span>
            </div>
          </div>

          <div className="relative h-[360px] min-w-0 flex-1 max-[900px]:flex-none overflow-clip rounded-[8px] border border-line bg-[#0f1417] max-[640px]:h-[240px]">
            <ImageLightbox
              src="/figma/sprout-features.webp"
              alt="Sprout Coaching App: one question at a time, non-directive coaching, session pacing, harvest wrap-up, framework around the model, Flutter app, iOS and Android releases"
              sizes="(max-width: 640px) 100vw, 32vw"
            />
            <span className="absolute bottom-6 left-6 rounded-[4px] border border-line bg-[rgba(13,14,15,0.8)] px-3 py-1.5 font-mono text-xs font-bold tracking-[0.6px] uppercase text-[#747d81]">
              What the app does
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
            title="A coach that follows its method."
            description="The business context and constraints that shaped the build."
          />
          <div className="flex items-start gap-8 max-[900px]:flex-col max-[900px]:items-stretch">
            <div className="flex min-w-0 flex-1 flex-col gap-6">
              <p className="border-l-4 border-orange pl-6 text-[clamp(24px,3vw,32px)] font-bold leading-[1.2] text-text">
                The coach&apos;s method works only if the AI asks one question at a
                time and never gives advice. Pasted into a general chat tool it
                worked, but inside the app it broke its own rules, so the
                client needed more than a better prompt.</p>
              <p className="text-[17px] leading-7 text-muted">
                A prompt alone cannot hold the rules or keep time, so we built a
                framework around the model that enforces the method turn by
                turn and closes each session with wrap-up questions.</p>
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
            title="How the coach is built."
            description="A coaching framework around the model, inside a Flutter app."
          />
          <pre className="overflow-x-auto rounded-[8px] border border-line bg-[#0f1417] p-6 font-mono text-[13px] leading-6 text-muted">
            <code>{workflowTree}</code>
          </pre>
          <div className="flex items-center gap-4 rounded-[4px] border border-[#1c2328] bg-panel px-[18px] py-3.5 max-[640px]:flex-col max-[640px]:items-start max-[640px]:gap-2">
            <p className="shrink-0 font-mono text-xs font-bold tracking-[0.8px] uppercase text-orange">
              System architecture
            </p>
            <p className="text-[13px] leading-[19px] text-muted">
              The client&apos;s method is written as rules the framework applies on
              every turn. The model is asked for a single next question,
              the framework tracks session time, and a wrap-up phase closes
              the conversation.</p>
          </div>
        </div>
      </section>

      {/* 7. FLYWHEEL IMPULSE */}
      <section className="border-y border-[#1c2328] bg-ink">
        <div className={bandClass}>
          <SectionHeading
            eyebrow="Flywheel impulse"
            title="Delivery and release."
            description="Verified release and handover terms."
          />
          <div className="flex flex-col gap-6">
            <p className="border-l-4 border-orange pl-6 text-[17px] leading-7 text-muted">
              The coach was reviewed with the client against their own example
              sessions and then released on both stores, with the source code handed
              over at the end.</p>
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
            title="Verified facts about the project."
            description="No usage metrics were shared. These are facts about the order and the release."
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
            description="Conversation design and mobile delivery."
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
