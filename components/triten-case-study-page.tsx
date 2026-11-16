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

const siteUrl = "https://www.tritenre.com/";

const heroTags = ["Client Project", "Custom Claude Skill"];

const snapshot: Fact[] = [
  {
    label: "Client / Context",
    value: "Triten Real Estate Partners — a national, full-service real estate investment, development and operations firm",
  },
  {
    label: "Engagement",
    value: "Client project: a custom Claude skill so Claude's output matches the client's business branding",
  },
  {
    label: "Status",
    value: "Delivered to the client",
  },
  {
    label: "Technology",
    value: "Claude skills, Claude Code, brand reference files, PowerPoint template",
  },
];

const riskBounds: Fact[] = [
  {
    label:
      "The skill holds brand rules, logos, a guidelines PDF and a template. It contains no deal, investor or tenant data",
    value: "Brand assets only",
  },
  {
    label:
      "Colleagues copy the skill folder into their own Claude Code skills directory, so each person runs a local copy",
    value: "Runs locally per person",
  },
  {
    label:
      "Fonts, colours, logo rules and tone live in plain text files, so a brand change is a text edit",
    value: "Brand updates are text edits",
  },
];

const contributions: NumberedCard[] = [
  {
    title: "Typography and colour",
    description:
      "Cardo and Lato in four type roles, and a four-colour palette with hex, RGB, CMYK and Pantone values. Never pure black.",
  },
  {
    title: "Logo rules",
    description:
      "Which logo goes on light and dark backgrounds, with clear space and minimum sizes, so Claude never recolours or stretches it.",
  },
  {
    title: "Tone of voice",
    description:
      "A guide to writing like a trusted operator: concrete over abstract, active voice, no hype words, with before-and-after examples.",
  },
  {
    title: "PowerPoint template",
    description:
      "Every deck starts from the wide 16:9 Triten template, with the theme and layouts already set, instead of being rebuilt by hand.",
  },
  {
    title: "Word and HTML output",
    description:
      "Separate references for Word documents and HTML dashboards, with Google Fonts loaded and brand colours as CSS variables.",
  },
  {
    title: "Install guide and updates",
    description:
      "A short guide for sharing the skill with colleagues and a clear path for updating it when the brand changes.",
  },
];

const deploymentDetails: Fact[] = [
  {
    label: "Built by GenAILabs",
    value:
      "The skill itself: the instructions, the brand references for each format and the install guide.",
  },
  {
    label: "Activates on its own",
    value:
      "Claude applies the brand whenever a request is about Triten or TREP work, even if the person does not say \"branded\".",
  },
  {
    label: "Checked before delivery",
    value:
      "Each deliverable gets a self-check: fonts, palette, logo version and tone, before Claude presents it.",
  },
];

const evidence = [
  {
    label: "Verified evidence",
    value: "Three formats covered",
    source: "PowerPoint, Word and HTML each have their own reference",
  },
  {
    label: "Verified evidence",
    value: "Four-colour palette",
    source: "Navy, gold, charcoal and warm gray, with print values included",
  },
  {
    label: "Verified evidence",
    value: "Four type roles",
    source: "Header, Header 2, Body and Call Out in Cardo and Lato",
  },
  {
    label: "Key outcome",
    value: "Claude works on brand by default",
    source:
      "Decks, documents and dashboards for Triten follow the brand without per-request instructions. No usage metrics were shared.",
    highlight: true,
  },
];

const capabilities: NumberedCard[] = [
  {
    title: "Custom Claude Skills",
    description:
      "Turning a company's brand standards into instructions and reference files Claude follows reliably.",
  },
  {
    title: "AI Workflow Design",
    description:
      "Routing each request to the right reference, and checking the result before it reaches the person.",
  },
];

const skillTree = `triten-brand/
├── SKILL.md              brand summary, rules, dispatch
├── INSTALL.md            sharing and updating
├── assets/
│   ├── guidelines/       brand guidelines PDF
│   ├── logos/            dark and white logos
│   └── templates/        wide 16:9 PowerPoint template
└── references/
    ├── brand-core.md     fonts, colours, logo spec
    ├── voice.md          tone of voice
    ├── powerpoint.md
    ├── word.md
    └── html.md`;

const relatedWork = [
  {
    category: "Client Project",
    cycle: "Live",
    title: "Resinwerks",
    description:
      "A sitewide HubSpot chatbot powered by the OpenAI API and trained on the client's own business data.",
    image: "/figma/resinwerks-hero.webp",
    href: "/case-study/resinwerks",
  },
  {
    category: "AI Product Engineering",
    cycle: "Production",
    title: "Huntora",
    description:
      "Lead discovery, email outreach and scheduled blog drafts in one workspace, with human review before publishing.",
    image: "/figma/huntora-hero.png",
    href: "/case-study/huntora",
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

export function TritenCaseStudyPage() {
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
              Triten Brand Skill
            </h1>
            <p className="text-lg leading-7 text-muted">
              Triten wanted Claude&apos;s output to match its business branding.
              GenAILabs built a custom Claude skill that applies Triten&apos;s
              fonts, colours, logo rules and tone of voice to the decks,
              documents, dashboards and writing Claude produces for them.</p>
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-orange px-2.5 py-1.5 font-mono text-xs font-bold tracking-[0.5px] uppercase text-orange">
                <span className="size-[5px] rounded-full bg-orange" aria-hidden="true" />
                Delivered
              </span>
              <a
                href={siteUrl}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs font-bold uppercase text-orange underline-offset-4 transition-colors duration-200 hover:text-text hover:underline"
              >
                Visit tritenre.com →
              </a>
            </div>
          </div>

          <div className="relative h-[360px] min-w-0 flex-1 max-[900px]:flex-none overflow-clip rounded-[8px] border border-line bg-[#0f1417] max-[640px]:h-[240px]">
            <ImageLightbox
              src="/figma/triten-features.webp"
              alt="Triten Brand Skill: typography, colour palette, logo rules, tone of voice, PowerPoint, Word, HTML and non-negotiables"
              sizes="(max-width: 640px) 100vw, 32vw"
            />
            <span className="absolute bottom-6 left-6 rounded-[4px] border border-line bg-[rgba(13,14,15,0.8)] px-3 py-1.5 font-mono text-xs font-bold tracking-[0.6px] uppercase text-[#747d81]">
              What the skill covers
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
            title="Claude that already knows the brand."
            description="The business context, constraints and data handling that shaped the build."
          />
          <div className="flex items-start gap-8 max-[900px]:flex-col max-[900px]:items-stretch">
            <div className="flex min-w-0 flex-1 flex-col gap-6">
              <p className="border-l-4 border-orange pl-6 text-[clamp(24px,3vw,32px)] font-bold leading-[1.2] text-text">
                Claude is capable, but left alone it writes and formats in its
                own style. Triten needed every deck, memo and dashboard to look
                and sound like Triten, without anyone re-explaining the brand
                each time.</p>
              <p className="text-[17px] leading-7 text-muted">
                So we turned the brand guidelines into a Claude skill: rules
                Claude reads before it starts, reference files for each kind of
                deliverable, and the logos and template it needs. It applies
                the brand whenever the work is about Triten.</p>
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
            title="How the skill is built."
            description="Instructions, references and brand assets in one folder."
          />
          <pre className="overflow-x-auto rounded-[8px] border border-line bg-[#0f1417] p-6 font-mono text-[13px] leading-6 text-muted">
            <code>{skillTree}</code>
          </pre>
          <div className="flex items-center gap-4 rounded-[4px] border border-[#1c2328] bg-panel px-[18px] py-3.5 max-[640px]:flex-col max-[640px]:items-start max-[640px]:gap-2">
            <p className="shrink-0 font-mono text-xs font-bold tracking-[0.8px] uppercase text-orange">
              System architecture
            </p>
            <p className="text-[13px] leading-[19px] text-muted">
              A request about Triten work triggers the skill. Claude reads the short brand summary, then opens the reference for the format it is producing (PowerPoint, Word, HTML or plain writing) and uses the bundled logos and template.</p>
          </div>
        </div>
      </section>

      {/* 7. FLYWHEEL IMPULSE */}
      <section className="border-y border-[#1c2328] bg-ink">
        <div className={bandClass}>
          <SectionHeading
            eyebrow="Flywheel impulse"
            title="Delivery, activation and updates."
            description="Verified real-world deployment and support terms."
          />
          <div className="flex flex-col gap-6">
            <p className="border-l-4 border-orange pl-6 text-[17px] leading-7 text-muted">
              The skill was delivered to Triten as a folder that each person
              copies into their own Claude Code skills directory. When the brand
              changes, the text files are edited and the updated folder is
              shared again.</p>
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
            description="No usage metrics were shared. These are facts about what the skill contains."
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
            description="Claude customisation and workflow design."
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
