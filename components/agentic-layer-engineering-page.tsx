import Image from "next/image";
import { ArrowDown, ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

import { FaqAccordion } from "@/components/faq-accordion";
import { Marquee } from "@/components/shared/marquee";
import { clientStripItems } from "@/components/shared/client-logos";

const situations = [
  "AI can answer, but it cannot act.",
  "Work requires multiple tools, steps, or decisions.",
  "A workflow needs context from several systems.",
  "Human review and reliability still matter.",
];

const deliverables = [
  [
    "Context & retrieval",
    "Give the system access to the information it needs for the task.",
  ],
  [
    "Tool use",
    "Connect AI to the tools and permissions required to perform useful work.",
  ],
  [
    "Orchestration",
    "Coordinate steps, decisions, and handoffs across a workflow.",
  ],
  [
    "Human review",
    "Make review points and escalation paths explicit where judgment matters.",
  ],
  [
    "Evaluation & reliability",
    "Evaluate behavior and failure cases against the intended use.",
  ],
];

const pipeline = [
  ["01 /", "CONTEXT", "Read the situation"],
  ["02 /", "DECIDE", "Choose a next step"],
  ["03 /", "USE TOOLS", "Use approved tools"],
  ["04 /", "ACT", "Perform the work"],
  ["05 /", "REVIEW", "Check output"],
];

const work = [
  [
    "evidence-1.png",
    "AI PRODUCT ENGINEERING",
    "Kaya Health Coach",
    "Replaced slow enterprise search with instantaneous semantic discovery across 40M documents.",
  ],
  [
    "evidence-2.png",
    "AI PRODUCT ENGINEERING",
    "Generative Supply Chain Copilot",
    "Engineered high-performance model microservices that optimize delivery routing graphs.",
  ],
  [
    "evidence-3.png",
    "AI PRODUCT ENGINEERING",
    "Clinical Trial Data Parser",
    "Built real-time multi-model validation pipelines handling patient metrics with strict SLAs.",
  ],
];

const engagement = [
  [
    "01",
    "Understand the problem",
    "Establish the context and the most useful starting point.",
  ],
  [
    "02",
    "Work closely with the team",
    "Keep engineering connected to the people and workflows involved.",
  ],
  [
    "03",
    "Build / integrate / adapt",
    "Match the work to what the engagement actually requires.",
  ],
  [
    "04",
    "Learn from evidence",
    "Use results and feedback to guide the next decision.",
  ],
];

const faqs = [
  [
    "What is an agentic layer and why does it matter?",
    "An agentic layer sits between large language models and your operational systems, adding structured reasoning, tool orchestration, state management, and verification logic. It turns probabilistic model output into reliable, observable, and auditable workflows that can execute work in production.",
  ],
  [
    "How do your agents differ from basic chatbot integrations?",
    "Basic chatbot integrations are optimized for conversation, while our agentic systems are optimized for execution. We design agents to parse intent, validate inputs, route across services, manage multi-step state, recover from failures, and produce deterministic outcomes with measurable reliability.",
  ],
  [
    "What systems can agents connect to?",
    "Agents can connect to REST and gRPC services, internal APIs, databases, vector stores, ERP systems, ticketing platforms, messaging channels, observability pipelines, and custom backend workflows.",
  ],
  [
    "How do you handle reliability and failure recovery?",
    "We build reliability through type-safe contracts, pre-execution validation, bounded retries, checkpointed state, rollback paths, and deterministic assertion gates. When a step fails, the agent can recover, escalate, or pause for human review instead of continuing blindly.",
  ],
  [
    "Can agents operate across multiple tools and workflows?",
    "Yes. We design orchestration logic that can sequence actions, branch conditionally, delegate sub-tasks, and maintain consistent context across the full end-to-end process.",
  ],
  [
    "What does production-grade agent deployment look like?",
    "Production-grade deployment includes observability, evaluation harnesses, access controls, cost and latency monitoring, audit logging, and clear operational ownership. We design for safe rollout, measurable performance, and continuous improvement.",
  ],
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
}) {
  return (
    <div className="mb-12 flex items-end justify-between gap-8 max-[640px]:flex-col max-[640px]:items-start">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-3 max-w-[760px] text-[clamp(38px,4vw,48px)] font-[400] leading-[1.08] tracking-[-1.5px] text-[#f2f2ef]">
          {title}
        </h2>
      </div>
      {description && (
        <p className="max-w-[400px] text-[15px] leading-6 text-[#9ca3af]">
          {description}
        </p>
      )}
    </div>
  );
}

export function AgenticLayerEngineeringPage() {
  return (
    <main className="bg-[#090a0b]">
      <section className="relative min-h-[720px] overflow-hidden border-b border-[#1c2328] bg-[#080b0d] px-[max(40px,calc((100%_-_1120px)_/_2))] pt-20 max-[900px]:pt-[92px] max-[640px]:min-h-[620px] max-[640px]:px-5 max-[640px]:pt-[68px]">
        <div className="relative z-[1] max-w-[650px]">
          <p className="mb-8 inline-flex items-center gap-1.5 border border-[#293137] bg-[#0f1417] px-2 py-1 text-[11px] font-[700] uppercase tracking-[1.2px] text-[#f4f4f1]">
            <span
              className="inline-block h-[6px] w-[6px] rounded-full bg-[var(--orange)]"
              aria-hidden="true"
            />
            Services / Agentic Layer Engineering
          </p>
          <h1 className="mb-6 max-w-[680px] text-[clamp(46px,5vw,66px)] font-[500] leading-[1.03] tracking-[-1.6px] text-[#f2f2ef] max-[640px]:text-[40px]">
            Engineer AI that can actually do the work.
          </h1>
          <p className="max-w-[576px] text-[18px] leading-7 text-[#9fa4ab]">
            Build systems that can interpret context, use tools, coordinate
            multi-step work, take action, and stay under evaluation and human
            control.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a className="button button-primary" href="#contact">
              Talk to our team <span>→</span>
            </a>
            <a className="button button-outline" href="#relevant-work">
              View relevant work →
            </a>
          </div>
        </div>
        <svg
          className="absolute right-[10%] top-0 h-[722px] w-[418px] max-[900px]:right-[6%] max-[640px]:hidden"
          aria-hidden="true"
          viewBox="0 0 418 722"
        >
          <linearGradient
            id="agentic-hero-sweep"
            x1="0"
            y1="0.7"
            x2="418"
            y2="0.7"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#E6BC73" />
            <stop offset="0.5" stopColor="#B38B4E" />
            <stop offset="1" stopColor="#76684E" stopOpacity={0} />
          </linearGradient>
          <path
            d="M0 0.7C106.4 0.7 167.2 720.7 418 720.7"
            fill="none"
            stroke="url(#agentic-hero-sweep)"
            strokeWidth="1.4"
          />
        </svg>
      </section>

      <section
        className="border-y border-[#1c2328] py-[26px]"
        aria-label="Clients"
      >
        <Marquee
          duration={42}
          items={clientStripItems}
          className="max-[640px]:py-4"
        />
      </section>
      <div className="border-y border-[#1c2328] bg-[#0d0e0f] px-[max(40px,calc((100%_-_1120px)_/_2))] py-[60px] max-[640px]:px-5 max-[640px]:py-10">
        <div className="flex h-[120px] items-center justify-center rounded-[8px] border border-[#293137] bg-[#191c1e]">
          <strong className="text-xl uppercase text-white">Image banner</strong>
        </div>
      </div>

      <section className="border-b border-[#1c2328] px-[max(40px,calc((100%_-_1120px)_/_2))] py-24 max-[640px]:px-5 max-[640px]:py-16">
        <SectionHeading
          eyebrow="When you need this"
          title="Recognize the situation before choosing the service."
          description="Common challenges engineering and product teams bring to our specialized AI systems lab."
        />
        <div className="grid grid-cols-2 gap-6 max-[640px]:grid-cols-1">
          {situations.map((situation, index) => (
            <article
              key={situation}
              className="rounded-[4px] border border-[#293137] bg-[#0f1417] p-7 max-[640px]:p-5"
            >
              <span className="font-mono text-[10px] text-[var(--orange)]">
                0{index + 1}
              </span>
              <h3 className="mt-4 text-[24px] font-[700] leading-[30px] text-[#f2f2ef]">
                {situation}
              </h3>
            </article>
          ))}
        </div>
      </section>

      <section className="border-b border-[#1c2328] bg-[#080b0d] px-[max(40px,calc((100%_-_1120px)_/_2))] py-24 max-[640px]:px-5 max-[640px]:py-16">
        <SectionHeading eyebrow="What we engineer" title="What we engineer." />
        <div className="border-t border-[#293137]">
          {deliverables.map(([title, body]) => (
            <article
              key={title}
              className="grid grid-cols-[400px_1fr] gap-6 border-b border-[#293137] py-7 max-[900px]:grid-cols-2 max-[640px]:grid-cols-1 max-[640px]:gap-3"
            >
              <h3 className="text-[28px] font-[700] leading-[34px] text-[#f2f2ef] max-[640px]:text-[24px]">
                {title}
              </h3>
              <p className="text-[17px] leading-7 text-[#9fa4ab]">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-b border-[#1c2328] px-[max(40px,calc((100%_-_1120px)_/_2))] py-24 max-[640px]:px-5 max-[640px]:py-16">
        <SectionHeading
          eyebrow="Service model"
          title={
            <>
              Context becomes action.
              <br />
              Review stays in the loop.
            </>
          }
        />
        <div className="relative flex gap-12 pt-12 max-[900px]:flex-col max-[900px]:gap-6">
          <span
            className="absolute -left-3 top-12 bottom-0 border-l border-dashed border-[#ff9800] opacity-60 min-[901px]:hidden"
            aria-hidden="true"
          />
          {pipeline.map(([number, title, body], index) => (
            <div
              key={number}
              className={`relative flex-1 rounded-[4px] border bg-[#080b0d] px-4 py-6 text-center ${index === 2 ? "border-[#ff9800] shadow-[0_0_40px_rgba(255,152,0,0.3)]" : "border-[#293137]"}`}
            >
              <span
                className={`font-mono text-[11px] ${index === 2 ? "text-[#ffc081]" : "text-[#747d81]"}`}
              >
                {number}
              </span>
              <strong className="mt-2 block text-[13px] tracking-[0.6px] text-[#f2f2ef]">
                {title}
              </strong>
              <p className="mt-2 text-[14px] leading-5 text-[#9fa4ab]">
                {body}
              </p>
              {(index === 0 || index === pipeline.length - 1) && (
                <span
                  className="absolute -left-3 top-1/2 w-3 border-t border-dashed border-[#ff9800] opacity-60 min-[901px]:hidden"
                  aria-hidden="true"
                />
              )}
              {index < pipeline.length - 1 && (
                <>
                  <span
                    className="absolute top-1/2 -right-12 flex w-12 -translate-y-1/2 items-center justify-center text-[#ff9800] max-[900px]:hidden"
                    aria-hidden="true"
                  >
                    <ArrowRight size={16} />
                  </span>
                  <span
                    className="absolute -bottom-6 left-1/2 flex h-6 w-6 -translate-x-1/2 items-center justify-center text-[#ff9800] min-[901px]:hidden"
                    aria-hidden="true"
                  >
                    <ArrowDown size={14} />
                  </span>
                </>
              )}
            </div>
          ))}
        </div>
        {/* Feedback loop: dashed U returning from the last step back to the
            first, with the caption centered inside it. */}
        <div className="relative mx-[8px] max-[900px]:mx-0">
          <span
            className="absolute inset-0 rounded-b-[6px] border-b border-l border-r border-dashed border-[#ff9800] opacity-60 max-[900px]:hidden"
            aria-hidden="true"
          />
          <p className="py-[72px] text-center text-[15px] leading-6 text-[#747d81] max-[900px]:mt-8 max-[900px]:py-0">
            Return to the problem as evidence changes.
          </p>
        </div>
      </section>

      <section
        id="relevant-work"
        className="border-b border-[#1c2328] px-[max(40px,calc((100%_-_1120px)_/_2))] py-24 max-[640px]:px-5 max-[640px]:py-16"
      >
        <SectionHeading
          eyebrow="Relevant work"
          title="Evidence that demonstrates this capability."
        />
        <div className="grid grid-cols-3 gap-6 max-[900px]:grid-cols-2 max-[640px]:grid-cols-1">
          {work.map(([image, label, title, body]) => (
            <article
              key={title}
              className="flex overflow-hidden rounded-[4px] border border-[#293137] bg-[#0f1417]"
            >
              <div className="flex w-full flex-col">
                <Image
                  src={`/figma/services/${image}`}
                  alt=""
                  width={640}
                  height={440}
                  className="aspect-[1.45] w-full object-cover"
                />
                <div className="flex-1 p-6">
                  <span className="text-[11px] font-[700] tracking-[0.55px] text-[#ffc081]">
                    {label}
                  </span>
                  <h3 className="mt-1.5 text-[22px] font-[700] leading-7 text-[#f2f2ef]">
                    {title}
                  </h3>
                  <p className="text-[14px] leading-[22px] text-[#9fa4ab]">
                    {body}
                  </p>
                </div>
                <a
                  href="#contact"
                  className="border-t border-[#293137] px-6 py-4 text-[13px] font-[700] uppercase tracking-[0.65px] text-[#f2f2ef]"
                >
                  View case study →
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-b border-[#1c2328] px-[max(40px,calc((100%_-_1120px)_/_2))] py-24 max-[640px]:px-5 max-[640px]:py-16">
        <div className="rounded-[4px] border border-[rgba(83,68,52,0.3)] p-8 max-[640px]:p-5 md:p-16">
          <p className="border-b border-[rgba(83,68,52,0.2)] pb-8 text-[14px] uppercase tracking-[0.6px] text-[#f4f4f1]">
            — &nbsp; Proof record{" "}
            <span className="float-right text-[11px] text-[#ffc174]">
              ● Verified audit
            </span>
          </p>
          <blockquote className="mt-10 max-w-[900px] text-[clamp(32px,4vw,48px)] font-[700] leading-none tracking-[-1.2px] text-[#e5e1e4]">
            &quot;They shipped an agentic workflow our compliance team actually
            trusts — audit trails, human overrides, and all.&quot;
          </blockquote>
          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-[rgba(83,68,52,0.2)] pt-8 max-[640px]:grid-cols-1">
            <p>
              <strong className="block text-[10px] uppercase text-white">
                — Daniel Okafor
              </strong>
              <span className="text-[12px] leading-4 text-[#c8c1c5]">
                VP Operations, Northgate Logistics
              </span>
            </p>
            <p>
              <strong className="block text-[10px] uppercase text-white">
                Discipline
              </strong>
              <span className="text-[12px] leading-4 text-[#c8c1c5]">
                Agentic orchestration / compliance automation / audit
                infrastructure
              </span>
            </p>
            <p>
              <strong className="block text-[10px] uppercase text-white">
                Deployment cycle
              </strong>
              <span className="text-[12px] leading-4 text-[#c8c1c5]">
                2025.Q4 production
              </span>
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-[#1c2328] px-[max(40px,calc((100%_-_1120px)_/_2))] py-24 max-[640px]:px-5 max-[640px]:py-16">
        <SectionHeading
          eyebrow="Engagement model"
          title="The engagement model depends on the problem."
        />
        <div className="grid grid-cols-4 gap-8 max-[900px]:grid-cols-2 max-[640px]:grid-cols-1 max-[640px]:gap-4">
          {engagement.map(([number, title, body]) => (
            <article
              key={number}
              className="rounded-[4px] border border-[#293137] bg-[#0f1417] p-8 max-[640px]:p-5"
            >
              <span className="font-mono text-[11px] text-[var(--orange)]">
                {number}
              </span>
              <h3 className="mt-6 text-[22px] leading-7 text-[#f2f2ef]">
                {title}
              </h3>
              <p className="text-[15px] leading-6 text-[#9ca3af]">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-b border-[#1c2328] bg-[#080b0d] px-[max(40px,calc((100%_-_1000px)_/_2))] py-24 max-[640px]:px-5 max-[640px]:py-16">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="eyebrow text-[var(--orange)]">FAQ</p>
          <h2 className="mt-3 text-[clamp(38px,4vw,48px)] leading-[1.08] tracking-[-1.5px] text-[#f2f2ef]">
            Frequently asked questions.
          </h2>
          <p className="mx-auto mt-3 max-w-[560px] text-[15px] leading-6 text-[#9ca4ab]">
            Common questions teams ask before starting an agentic layer
            engineering engagement.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-[1000px]">
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      <section className="bg-[#0d0e0f] px-[max(40px,calc((100%_-_1120px)_/_2))] py-24 max-[640px]:px-5 max-[640px]:py-16">
        <div className="cta-panel cta-panel--sentence">
          <p className="eyebrow">
            <span className="cta-panel-dot" aria-hidden="true" />
            Let&apos;s talk
          </p>
          <h2>Have an AI product worth building?</h2>
          <p>
            Tell us the challenge you&apos;re tackling. We&apos;ll audit the
            technical feasibility and determine the right next step within 48
            hours.
          </p>
          <a className="button button-primary" href="#contact">
            Talk to our team <span>→</span>
          </a>
        </div>
      </section>
    </main>
  );
}
