import { ServicesProofSlider } from "@/components/services-proof-slider";

type Fact = {
  label: string;
  value: string;
};

type NumberedCard = {
  title: string;
  description: string;
};

const heroTags = ["Agentic Layer Engineering", "Forward-Deployed Services"];

const snapshot: Fact[] = [
  {
    label: "Client / Context",
    value: "NexAgents — app.nexagents.cloud — a team running AI agents at work in production",
  },
  {
    label: "Engagement",
    value:
      "Production deployment and automated deployer; per-person model access and admin console; agent builder; data stores (Google Search Console, GA4, LinkedIn) per agent with spending caps; token cost reduction and metering on every request",
  },
  {
    label: "Status",
    value: "Live in production (last deployed 3 Oct 2026)",
  },
  {
    label: "Technology",
    value:
      "Node.js, TypeScript, Fastify, PostgreSQL, pg-boss · Slack (Bolt, Socket Mode) and web chat · Claude Agent SDK with Pi, OpenCode, Codex and Claude Code harnesses; MCP connectors (e.g. Google, Huntora) · Apify (LinkedIn), Google Analytics 4, Google Search Console · Docker on a VPS, Caddy (HTTPS)",
  },
];

const riskBounds: Fact[] = [
  {
    label: "Operational context",
    value:
      "Each person's keys and logins stay in their own keychain and are never shared; paid data sources carry a spending cap per data store; schedules stay off until approved",
  },
  {
    label: "Technical constraint",
    value:
      "Google sign-in app in test mode: at most 100 users can connect Google services, and they must reconnect every 7 days",
  },
];

const contributions: NumberedCard[] = [
  {
    title: "Production deployment & automated deployer",
    description:
      "Production deployment and an automated deployer: tagged releases, CI check first, rollback, GitHub reports",
  },
  {
    title: "Per-person model access & admin console",
    description:
      "Per-person model access and an admin console for models, budgets and usage per person and per agent",
  },
  {
    title: "Agent builder",
    description: "Employees build their own agents; @team splits a task across several agents",
  },
  {
    title: "Data stores with spending caps",
    description:
      "Data stores (Google Search Console, GA4, LinkedIn) granted to each agent separately, with spending caps",
  },
  {
    title: "Token cost reduction & metering",
    description: "Token cost reduction and metering on every request",
  },
];

const deploymentDetails: Fact[] = [
  {
    label: "Integration pattern",
    value:
      "Automated deployer on each tagged release: tag the running version, back up the database, rebuild, verify — health check, automatic rollback, 4 kept backups, alerts through GitHub",
  },
  {
    label: "Scale protocol",
    value:
      "One VPS (11 GB RAM, 193 GB disk) running Docker: four app services (core, portal, web UI, admin) behind Caddy, and Postgres holding all state",
  },
  {
    label: "Maintenance mode",
    value:
      "Changes without a release: admins manage people, models, Slack setup and AI provider order in the admin console",
  },
];

const evidence = [
  {
    label: "Verified evidence",
    value: "−74% input tokens on a measured turn (52.6k → 13.8k)",
    source:
      "Stable cacheable prompt, trimmed tool output, tools loaded only when needed",
  },
  {
    label: "Verified evidence",
    value: "87% cache hit on the first step (14.6k of 16.9k tokens), ~6× cheaper",
    source: "Prompt cache works between messages; it was hitting 0% before the fix",
  },
  {
    label: "Key outcome",
    value: "Safer releases — every change reviewed before merge and tested live in Slack",
    source:
      "Automated deployer: health check, automatic rollback, 4 kept backups, GitHub alerts",
    highlight: true,
  },
];

const capabilities: NumberedCard[] = [
  {
    title: "Agentic Layer Engineering",
    description:
      "Agent builder where employees build their own agents; @team splits a task across several; data stores (Google Search Console, GA4, LinkedIn) granted per agent with spending caps — all in production.",
  },
  {
    title: "Forward-Deployed Services",
    description:
      "Production deployment on one VPS behind Caddy with an automated deployer: tagged releases, CI check first, rollback, GitHub reports, 4 kept backups.",
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

export function NexagentsCaseStudyPage() {
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
              NexAgents
            </h1>
            <p className="text-lg leading-7 text-muted">
              NexAgents (app.nexagents.cloud) puts production AI agents to work
              for a team — agents that answer reliably, per-person control over
              models, tools, passwords and company data, and metered token
              costs. Live in production; last deployed 3 Oct 2026.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-orange px-2.5 py-1.5 font-mono text-[10px] font-bold tracking-[0.5px] uppercase text-orange">
                <span className="size-[5px] rounded-full bg-orange" aria-hidden="true" />
                Production
              </span>
              <span className="font-mono text-[10px] uppercase text-[#747d81]">
                Live since 3 Oct 2026
              </span>
            </div>
          </div>

          <div className="relative h-[360px] min-w-0 flex-1 overflow-clip rounded-[8px] border border-line bg-[#0f1417] max-[640px]:h-[240px]">
            <div
              className="absolute -right-px -top-px h-[240px] w-[280px] bg-[linear-gradient(220deg,rgba(255,152,0,0.1)_0%,rgba(255,152,0,0)_55%)] opacity-70 blur-[24px]"
              aria-hidden="true"
            />
            <span className="absolute bottom-6 left-6 rounded-[4px] border border-line bg-[rgba(13,14,15,0.8)] px-3 py-1.5 font-mono text-[10px] font-bold tracking-[0.6px] uppercase text-[#747d81]">
              No schematic available — architecture described below
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

      {/* 3. TRENDING BANNER */}
      <div className="bg-ink px-[max(40px,calc((100%_-_1280px)_/_2))] py-[60px] max-[640px]:px-5 max-[640px]:py-10">
        <div className="flex h-[120px] items-center justify-center rounded-[8px] border border-line bg-[#191c1e] shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)]">
          <strong className="text-xl uppercase text-text">Image banner</strong>
        </div>
      </div>

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
                Agents that answer well only some of the time, no control over
                who may use which models, tools, passwords and company data, and
                costs that add up because every message resends large prompts.
              </p>
              <p className="text-[17px] leading-7 text-muted">
                A team wanted to use AI agents at work but faced three gaps:
                unreliable answers, no access control over models, tools,
                passwords and company data, and rising costs as every message
                re-sends large prompts. Already in place: the open-source qm
                agent platform (forked July 2026) with Slack and web chat,
                per-person sandbox, memory, files, keychain, schedules, skills
                and web apps.
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
                    <p className="text-[clamp(32px,4vw,40px)] font-medium tracking-[-1px] text-orange">
                      {metric.value}
                    </p>
                    <p className="text-[15px] leading-6 text-muted">{metric.label}</p>
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
            description="Production stack: one VPS behind Caddy, four Docker app services, PostgreSQL state, Slack and web chat, Claude Agent SDK, and the qm agent platform."
          />
          <div
            className={`${cardClass} h-[415px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] max-[640px]:h-[240px]`}
            aria-hidden="true"
          />
          <div className="flex items-center gap-4 rounded-[4px] border border-[#1c2328] bg-panel px-[18px] py-3.5 max-[640px]:flex-col max-[640px]:items-start max-[640px]:gap-2">
            <p className="shrink-0 font-mono text-[10px] font-bold tracking-[0.8px] uppercase text-orange">
              System architecture
            </p>
            <p className="text-[13px] leading-[19px] text-muted">
              One VPS (11 GB RAM, 193 GB disk) running Docker: four app
              services (core, portal, web UI, admin) behind Caddy, with
              PostgreSQL holding all state. Chat via Slack (Bolt, Socket Mode)
              and web chat. AI through the Claude Agent SDK with Pi, OpenCode,
              Codex and Claude Code harnesses and MCP connectors (e.g. Google,
              Huntora). Data from Apify (LinkedIn), Google Analytics 4 and
              Google Search Console. Already in place: the open-source qm agent
              platform (forked July 2026).
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
              Live in production on app.nexagents.cloud (last deployed 3 Oct
              2026). The automated deployer tags the running version, backs up
              the database, rebuilds and verifies on each tagged release — with
              a health check, automatic rollback, 4 kept backups and alerts
              through GitHub. Admins manage people, models, Slack setup and AI
              provider order in the admin console without a release.
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
            description="Every metric listed is verified and sourced from the NexAgents case data."
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
                <p className="text-[clamp(32px,3.5vw,40px)] font-medium tracking-[-1px] text-text">
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
            description="Agentic Layer Engineering and Forward-Deployed Services were both demonstrated in production."
          />
          <NumberedCards items={capabilities} gap="gap-4" />
        </div>
      </section>

      {/* 11. RELATED WORK */}
      <section className="border-y border-[#1c2328] bg-ink">
        <div className={bandClass}>
          <SectionHeading
            eyebrow="Related work"
            title="None — NexAgents has no related case studies yet."
            description="No related case studies exist yet for the NexAgents project."
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
