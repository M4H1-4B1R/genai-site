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

const heroTags = ["Client Project", "CrewAI Agent"];

const snapshot: Fact[] = [
  {
    label: "Client / Context",
    value: "Confidential client, delivered as a freelance project",
  },
  {
    label: "Engagement",
    value: "Client project: a CrewAI agent that reviews NDAs and recommends whether to sign",
  },
  {
    label: "Status",
    value: "Delivered and completed in early 2025",
  },
  {
    label: "Technology",
    value: "CrewAI, OpenAI language models, Python",
  },
];

const riskBounds: Fact[] = [
  {
    label:
      "The agent reads the PDF it is given and returns a review. The code stores no documents or client data",
    value: "No document storage",
  },
  {
    label:
      "It supports the reviewer's decision with scores, quotes and recommendations. A person still makes the final call",
    value: "Decision support, not legal advice",
  },
  {
    label:
      "Review quality depends on the PDF containing searchable text, and the agent needs an OpenAI API key with credit",
    value: "Needs text-based PDFs",
  },
];

const contributions: NumberedCard[] = [
  {
    title: "PDF text extraction",
    description:
      "A tool opens the NDA, extracts its text and checks for corrupt files, empty pages and unusable text before analysis starts.",
  },
  {
    title: "Weighted criteria",
    description:
      "Five areas, each with its own sub-criteria and weight: confidentiality, scope, duration, enforceability and compliance.",
  },
  {
    title: "Analyst agent",
    description:
      "A CrewAI agent set up as a senior NDA analyst, guided by a detailed prompt and the reviewer's own instructions for each run.",
  },
  {
    title: "Scores and risk levels",
    description:
      "Every criterion gets a score, a risk level, quotes from the document and specific recommendations.",
  },
  {
    title: "Clear recommendation",
    description:
      "The review ends with a decision: approve as is, approve with changes (listed), or deny with the dealbreakers explained.",
  },
  {
    title: "Validation and handover",
    description:
      "Output is checked for structure and required fields. The client received the source code and written documentation.",
  },
];

const deploymentDetails: Fact[] = [
  {
    label: "Built by GenAILabs",
    value:
      "The agent, its prompts, the criteria configuration, the PDF tool and the output checks.",
  },
  {
    label: "Delivered as code",
    value:
      "Source code and a documentation file the client runs in their own environment with their own API key.",
  },
  {
    label: "Instructions per run",
    value:
      "The reviewer passes focus instructions with each NDA, such as trade secrets or term length.",
  },
];

const evidence = [
  {
    label: "Verified evidence",
    value: "Delivered early",
    source: "Delivered Jan 30, 2025, ahead of the Feb 9 due date, and completed Feb 2",
  },
  {
    label: "Verified evidence",
    value: "Five weighted criteria",
    source: "Each with its own sub-criteria, score and risk level",
  },
  {
    label: "Verified evidence",
    value: "Three possible decisions",
    source: "Approve, approve with changes, or deny",
  },
  {
    label: "Key outcome",
    value: "A first-pass NDA review on demand",
    source:
      "The client can run an NDA through the agent and get a structured review. No usage metrics were shared.",
    highlight: true,
  },
];

const capabilities: NumberedCard[] = [
  {
    title: "Multi-Agent Frameworks",
    description:
      "Building task-focused agents with CrewAI, with prompts, tools and output rules designed together.",
  },
  {
    title: "Document Analysis",
    description:
      "Turning long legal documents into scored, structured reviews that point back to the source text.",
  },
];

const workflowTree = `nda-analysis-agent/
├── main.py                 entry point
└── src/
    ├── agents/             analyst agent and task
    ├── config/             weighted criteria
    ├── tools/              PDF text extraction
    └── utils/              output conversion and checks`;

const relatedWork = [
  {
    category: "Client Project",
    cycle: "Delivered",
    title: "LinkedIn Connection Agent",
    description:
      "An n8n workflow that turns a Google Sheet of prospects into LinkedIn connection requests.",
    image: "/figma/linkedin-agent-features.webp",
    href: "/case-study/linkedin-agent",
  },
  {
    category: "Client Project",
    cycle: "Delivered",
    title: "Triten",
    description:
      "A custom Claude skill that applies a real estate firm's fonts, colours, logo rules and tone to what Claude produces.",
    image: "/figma/triten-features.webp",
    href: "/case-study/triten",
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

export function NdaAgentCaseStudyPage() {
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
              NDA Analysis Agent
            </h1>
            <p className="text-lg leading-7 text-muted">
              A client needed a faster first pass on non-disclosure agreements.
              GenAILabs built a CrewAI agent that reads an NDA in PDF form,
              scores it against five weighted criteria and ends with a clear
              recommendation: approve, approve with changes, or deny.</p>
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-orange px-2.5 py-1.5 font-mono text-xs font-bold tracking-[0.5px] uppercase text-orange">
                <span className="size-[5px] rounded-full bg-orange" aria-hidden="true" />
                Delivered
              </span>
            </div>
          </div>

          <div className="relative h-[360px] min-w-0 flex-1 max-[900px]:flex-none overflow-clip rounded-[8px] border border-line bg-[#0f1417] max-[640px]:h-[240px]">
            <ImageLightbox
              src="/figma/nda-agent-features.webp"
              alt="NDA Analysis Agent: PDF text extraction, five weighted criteria, scores and risk levels, clear recommendation, output validation, human reviewer decides"
              sizes="(max-width: 640px) 100vw, 32vw"
            />
            <span className="absolute bottom-6 left-6 rounded-[4px] border border-line bg-[rgba(13,14,15,0.8)] px-3 py-1.5 font-mono text-xs font-bold tracking-[0.6px] uppercase text-[#747d81]">
              What the agent does
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
            title="Faster first-pass NDA reviews."
            description="The business context, constraints and data handling that shaped the build."
          />
          <div className="flex items-start gap-8 max-[900px]:flex-col max-[900px]:items-stretch">
            <div className="flex min-w-0 flex-1 flex-col gap-6">
              <p className="border-l-4 border-orange pl-6 text-[clamp(24px,3vw,32px)] font-bold leading-[1.2] text-text">
                Reading every NDA closely takes time, and the same questions come
                up each time: how wide is the confidentiality, how long does it
                last, can it be enforced. The client wanted an agent to do the
                first pass and say what to approve, change or refuse.</p>
              <p className="text-[17px] leading-7 text-muted">
                So we built a CrewAI agent that extracts the text, evaluates it
                against weighted criteria, and returns scores, risk levels,
                quotes from the document and a final recommendation.</p>
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
            title="How the agent is built."
            description="A small codebase with one job per module."
          />
          <pre className="overflow-x-auto rounded-[8px] border border-line bg-[#0f1417] p-6 font-mono text-[13px] leading-6 text-muted">
            <code>{workflowTree}</code>
          </pre>
          <div className="flex items-center gap-4 rounded-[4px] border border-[#1c2328] bg-panel px-[18px] py-3.5 max-[640px]:flex-col max-[640px]:items-start max-[640px]:gap-2">
            <p className="shrink-0 font-mono text-xs font-bold tracking-[0.8px] uppercase text-orange">
              System architecture
            </p>
            <p className="text-[13px] leading-[19px] text-muted">
              The PDF tool extracts the NDA text. The analyst agent evaluates it against the weighted criteria and the reviewer&apos;s instructions. The output is converted, checked for required fields and saved.</p>
          </div>
        </div>
      </section>

      {/* 7. FLYWHEEL IMPULSE */}
      <section className="border-y border-[#1c2328] bg-ink">
        <div className={bandClass}>
          <SectionHeading
            eyebrow="Flywheel impulse"
            title="Delivery and handover."
            description="Verified real-world deployment and support terms."
          />
          <div className="flex flex-col gap-6">
            <p className="border-l-4 border-orange pl-6 text-[17px] leading-7 text-muted">
              The agent was delivered as source code with written documentation,
              covering setup, usage, the criteria, error handling and common
              fixes. The client runs it with their own OpenAI API key.</p>
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
            title="Verified facts about the build."
            description="No usage metrics were shared. These are facts about the order and the build."
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
            description="Agent frameworks and document analysis."
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
