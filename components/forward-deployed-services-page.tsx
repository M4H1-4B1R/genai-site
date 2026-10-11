import Image from "next/image";
import { ArrowDown, ArrowRight } from "lucide-react";

import { EngagementModel } from "@/components/engagement-model";
import { FaqAccordion } from "@/components/faq-accordion";
import { clientStripItems } from "@/components/shared/client-logos";
import { Marquee } from "@/components/shared/marquee";

const challenges = [
  [
    "A demo works, but real-world use is harder.",
    "The gap between a promising prototype and a reliable deployed system requires real engineering—not just more model tuning.",
  ],
  [
    "Integration is the hard part.",
    "Connecting AI to existing software, data pipelines, and workflows takes more than an API call—it requires contextual understanding.",
  ],
  [
    "The operating environment keeps changing.",
    "Systems that worked last quarter break when processes, tools, or data shift. You need a team embedded in the environment.",
  ],
  [
    "Real use reveals what needs to adapt.",
    "Deployment is the beginning, not the end. Sustained value requires observing behavior and refining as you learn.",
  ],
];

const capabilities = [
  [
    "Understand",
    "Map the workflow, constraints, and people the system needs to work with.",
  ],
  [
    "Integrate",
    "Connect models to the software, data, and operating systems already in place.",
  ],
  [
    "Deploy",
    "Put the system into its intended environment with a clear path to real use.",
  ],
  [
    "Learn From Use",
    "Observe behavior, gather feedback, and identify where the system falls short.",
  ],
  [
    "Adapt",
    "Refine the system as the operating environment and its needs change.",
  ],
];

const pipeline = [
  ["Understand", "Read the environment"],
  ["Integrate", "Connect the systems"],
  ["Deploy", "Put AI into use"],
  ["Learn from use", "Observe and evaluate"],
  ["Adapt", "Refine the solution"],
];

const engagement = [
  [
    "Understand the problem",
    "Establish the context and the most useful starting point.",
  ],
  [
    "Work closely with the team",
    "Keep engineering connected to the people and workflows involved.",
  ],
  [
    "Build / integrate / adapt",
    "Match the work to what the engagement actually requires.",
  ],
  [
    "Leave a stronger system",
    "Create durable capability, not a handoff that decays.",
  ],
] as const;

const faqs = [
  [
    "What are forward deployed services?",
    "Forward deployed services integrate AI capabilities directly into operational environments, enhancing real-time decision-making and responsiveness. They align the system with the workflows, data, and constraints where value is created.",
  ],
  [
    "When should we use a forward deployed team?",
    "Use this model when a promising prototype needs to become a reliable system, or when the hard work is integration, adoption, and learning from real use.",
  ],
  [
    "How does the engagement start?",
    "We begin by understanding the environment: the workflow, people, systems, constraints, and the outcome that matters. From there we shape the smallest useful path to deployment.",
  ],
  [
    "Do you work with existing engineering teams?",
    "Yes. The model is designed to work closely with the teams who own the operating environment, leaving behind a system and practices they can continue to improve.",
  ],
];

function SectionLabel({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[1.2px] text-orange">
      <span className="h-px w-6 bg-orange" />
      {children}
    </div>
  );
}

export function ForwardDeployedServicesPage() {
  return (
    <main className="bg-deep text-[#f2f2ef]">
      {/* Hero - matches services-hub layout */}
      <section className="border-b border-[#1c2328] px-6 py-16 sm:px-10 sm:py-20 lg:px-20 lg:py-28 lg:min-h-[520px]">
        <div className="max-w-[720px] mx-auto lg:mx-0">
          <div className="inline-flex items-center gap-2 border border-[#293137] bg-[#0f1417] px-[9px] py-[5px] text-[10px] font-bold tracking-[1.2px] text-orange mb-8">
            <i className="h-1.5 w-1.5 rounded-full bg-orange" />
            SERVICES / FORWARD DEPLOYED
          </div>
          <h1 className="mb-6 text-[clamp(48px,6vw,64px)] font-bold leading-[1.06] tracking-[-1.8px]">
            Put AI to work where your business actually runs.
          </h1>
          <p className="max-w-[576px] text-[17px] leading-7 text-[#9fa4ab] mb-8">
            Integrate, deploy, and adapt AI inside the workflows, software,
            data, and operating environment where it needs to create value.
          </p>
          <div className="flex flex-wrap gap-4">
            <a className="button button-primary" href="#contact">
              Talk to our team <span>→</span>
            </a>
            <a className="button button-outline" href="#evidence">
              View relevant work →
            </a>
          </div>
        </div>
      </section>

      {/* Client logo marquee */}
      <div
        className="border-b border-[#1c2328] px-6 py-4 sm:px-10 lg:px-20"
        aria-label="Selected technology partners"
      >
        <Marquee duration={42} items={clientStripItems} className="max-[640px]:py-4" />
      </div>

      {/* Image banner */}
      <section className="border-b border-[#1c2328] bg-ink px-6 py-12 sm:px-10 sm:py-16 lg:px-20 lg:py-20">
        <div className="min-h-[100px] sm:min-h-[120px] lg:min-h-[140px] grid place-items-center rounded-lg border border-[#293137] bg-[#191c1e] font-bold tracking-[.5px] text-[14px] sm:text-[16px]">
          IMAGE BANNER
        </div>
      </section>

      {/* When you need this - Challenges */}
      <section className="border-b border-[#1c2328] bg-deep px-6 py-16 sm:px-10 sm:py-20 lg:px-20 lg:py-24">
        <div className="mb-12 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-[600px]">
            <SectionLabel>When you need this</SectionLabel>
            <h2 className="mt-4 max-w-[720px] text-[clamp(38px,4vw,48px)] font-bold leading-[1.08] tracking-[-1.2px]">
              Recognize the situation before choosing the service.
            </h2>
          </div>
          <p className="max-w-[400px] text-[15px] leading-6 text-[#9fa4ab]">
            Common challenges engineering and product teams bring to our
            specialized AI systems lab.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-px bg-[#293137] sm:gap-y-4 sm:gap-x-px md:grid-cols-2 lg:gap-px">
          {challenges.map(([title, body], index) => (
            <article
              className="bg-[#0f1417] px-6 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-10"
              key={title}
            >
              <strong className="text-[13px] tracking-[1px] text-orange">
                0{index + 1}
              </strong>
              <h3 className="my-4 text-xl sm:text-2xl font-bold leading-[1.2] tracking-tight">
                {title}
              </h3>
              <p className="text-sm leading-[22px] text-[#9fa4ab]">{body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* What we do - Capabilities */}
      <section className="border-b border-[#1c2328] bg-ink px-6 py-16 sm:px-10 sm:py-20 lg:px-20 lg:py-24">
        <div className="mb-12 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-[600px]">
            <SectionLabel>What we do</SectionLabel>
            <h2 className="mt-4 max-w-[720px] text-[clamp(38px,4vw,48px)] font-bold leading-[1.08] tracking-[-1.2px]">
              What we do in your environment.
            </h2>
          </div>
          <p className="max-w-[400px] text-[15px] leading-6 text-[#9fa4ab]">
            Five capabilities we bring on-site—from mapping the problem to
            refining the system after it ships.
          </p>
        </div>
        <div className="border-t border-[#293137]">
          {capabilities.map(([title, body], index) => (
            <div
              className="flex flex-col gap-6 border-b border-[#293137] py-6 sm:py-8 lg:flex-row lg:items-center lg:gap-8 lg:py-10"
              key={title}
            >
              <div className="flex flex-1 items-baseline gap-6 sm:gap-8">
                <b
                  className={`w-10 shrink-0 text-[10px] sm:text-[11px] tracking-[1px] ${index === 2 ? "text-orange" : "text-[#747d81]"}`}
                >
                  0{index + 1}
                </b>
                <h3 className="text-[clamp(28px,3.5vw,34px)] font-medium">
                  {title}
                </h3>
              </div>
              <p className="w-full sm:max-w-[480px] text-sm leading-[22px] text-[#9fa4ab]">
                {body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Service model - Pipeline */}
      <section className="relative overflow-hidden border-b border-[#1c2328] bg-[#0f1417] px-6 py-16 sm:px-10 sm:py-20 lg:px-20 lg:py-24 before:absolute before:inset-[25%_20%] before:bg-[#ff98000d] before:blur-[50px] before:content-['']">
        <div className="relative">
          <SectionLabel>Service model</SectionLabel>
          <h2 className="mt-4 mb-12 text-[clamp(38px,4vw,48px)] font-bold leading-[1.08] tracking-[-1.2px]">
            Context becomes action.
            <br />
            Review stays in the loop.
          </h2>
          <div className="relative flex flex-col gap-4 lg:flex-row lg:gap-6">
            {pipeline.map(([title, body], index) => (
              <div
                className={`relative flex-1 min-w-0 rounded border bg-deep p-5 sm:p-6 lg:p-8 ${
                  index === 2
                    ? "border-orange shadow-[0_0_20px_rgba(255,152,0,0.25)]"
                    : "border-[#293137]"
                }`}
                key={title}
              >
                <b
                  className={`block font-mono text-[10px] tracking-[1px] ${
                    index === 2 ? "text-orange" : "text-[#747d81]"
                  }`}
                >
                  0{index + 1} /
                </b>
                <strong className="mt-3 block text-[13px] font-bold uppercase tracking-[.6px] text-[#f2f2ef]">
                  {title}
                </strong>
                <p className="mt-2 text-sm leading-[22px] text-[#9fa4ab]">
                  {body}
                </p>
                {index < pipeline.length - 1 && (
                  <>
                    <span
                      className="absolute top-1/2 -right-6 z-10 flex w-6 -translate-y-1/2 items-center justify-center text-orange hidden lg:flex"
                      aria-hidden="true"
                    >
                      <ArrowRight size={16} />
                    </span>
                    <span
                      className="absolute -bottom-6 left-1/2 z-10 flex h-6 w-6 -translate-x-1/2 items-center justify-center text-orange lg:hidden"
                      aria-hidden="true"
                    >
                      <ArrowDown size={14} />
                    </span>
                  </>
                )}
              </div>
            ))}
          </div>
          <p className="mt-12 text-center text-[15px] leading-6 text-[#747d81]">
            Return to the problem as evidence changes.
          </p>
        </div>
      </section>

      {/* Evidence */}
      <section
        className="border-b border-[#1c2328] bg-ink px-6 py-16 sm:px-10 sm:py-20 lg:px-20 lg:py-24"
        id="evidence"
      >
        <div className="mb-12 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-[600px]">
            <SectionLabel>Evidence</SectionLabel>
            <h2 className="mt-4 max-w-[720px] text-[clamp(38px,4vw,48px)] font-bold leading-[1.08] tracking-[-1.2px]">
              Evidence that demonstrates capability.
            </h2>
          </div>
          <p className="max-w-[400px] text-[15px] leading-6 text-[#9fa4ab]">
            Selected work shows what changes when AI is engineered for the
            environment—not just the demo.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3">
          {[
            [
              "raw-3.png",
              "FIELD OPERATIONS",
              "Operational Intelligence Console",
            ],
            ["raw-4.png", "FINANCE", "Decision Support Workflow"],
            ["raw-5.png", "HEALTHCARE", "Clinical Trial Data Parser"],
          ].map(([image, tag, title]) => (
            <article
              className="overflow-hidden border border-[#293137] bg-[#0f1417]"
              key={title}
            >
              <div className="relative aspect-[1.5] border-b border-[#293137]">
                <Image
                  src={`/figma/forward-deployed/${image}`}
                  alt=""
                  fill
                  sizes="(max-width: 800px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="px-4 sm:px-6 py-5 sm:py-6">
                <small className="block text-[10px] tracking-[1px] text-[#ffc081]">
                  {tag}
                </small>
                <h3 className="mt-2 text-xl font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-[22px] text-[#9fa4ab]">
                  Built for real workflows, strict constraints, and measurable
                  outcomes.
                </p>
                <a
                  className="mt-4 inline-block text-[13px] font-bold uppercase text-[#f2f2ef]"
                  href="#contact"
                >
                  View case study →
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Quote */}
      <section className="border-b border-[#53443433] bg-ink px-6 py-16 sm:px-10 sm:py-20 lg:px-20 lg:py-28">
        <p className="max-w-[900px] mx-auto text-center text-[clamp(28px,4vw,48px)] font-bold leading-none tracking-[-1.2px]">
          “GenAILabs gave our operational platform the rare feeling of being
          both extraordinarily intelligent and unmistakably human.”
        </p>
        <div className="mt-10 flex flex-col justify-between gap-2 border-t border-[#53443433] pt-6 text-xs text-[#c8c1c5] sm:flex-row sm:items-center">
          <strong className="text-white">— Mara Voss</strong>
          <span>Founder & Managing Director, Lumen Field</span>
        </div>
      </section>

      {/* Engagement model */}
      <section className="border-b border-[#1c2328] bg-deep px-6 py-16 sm:px-10 sm:py-20 lg:px-20 lg:py-24">
        <SectionLabel>Engagement model</SectionLabel>
        <h2 className="mt-4 max-w-[720px] text-[clamp(38px,4vw,48px)] font-bold leading-[1.08] tracking-[-1.2px]">
          The engagement model depends on the problem.
        </h2>
        <EngagementModel items={engagement} />
      </section>

      {/* FAQ */}
      <section className="border-b border-[#1c2328] bg-ink px-6 py-16 sm:px-10 sm:py-20 lg:px-20 lg:py-24">
        <SectionLabel>FAQ</SectionLabel>
        <h2 className="mb-12 mt-4 max-w-[720px] text-[clamp(38px,4vw,48px)] font-bold leading-[1.08] tracking-[-1.2px]">
          Frequently asked questions regarding our forward deployed services.
        </h2>
        <FaqAccordion faqs={faqs} />
      </section>

      {/* CTA */}
      <section className="bg-[#0d0e0f] px-6 py-16 sm:px-10 sm:py-20 lg:px-20 lg:py-28 lg:max-w-[1280px] lg:mx-auto">
        <div className="cta-panel cta-panel--sentence max-w-[1120px] mx-auto">
          <p className="eyebrow">
            <span className="cta-panel-dot" aria-hidden="true" />
            Let&apos;s talk
          </p>
          <h2 className="text-[clamp(38px,4vw,48px)] font-medium leading-[1.08] tracking-[-1.5px] mt-6 max-w-[700px]">
            Ready to put AI to work in your business?
          </h2>
          <p className="mt-4 text-[17px] leading-7 text-[#d1d5db] max-w-[672px]">
            Bring us the problem, and we&apos;ll determine the useful next step.
          </p>
          <a className="button button-primary mt-8" href="#contact">
            Talk to our team <span>→</span>
          </a>
        </div>
      </section>
    </main>
  );
}