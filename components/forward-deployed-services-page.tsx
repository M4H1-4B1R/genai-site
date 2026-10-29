import Image from "next/image";
import { ArrowDown, ArrowRight } from "lucide-react";

import { EngagementModel } from "@/components/engagement-model";
import { FaqAccordion } from "@/components/faq-accordion";
import { clientStripItems } from "@/components/shared/client-logos";
import { Marquee } from "@/components/shared/marquee";
import { WorkTag } from "@/components/shared/work-tag";
import {ServicesProofSlider} from "@/components/services-proof-slider";

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
    "Forward deployed services integrate AI capabilities directly into operational environments, enhancing real-time decision-making and responsiveness. They are crucial because they enable organizations to leverage AI in a way that is directly aligned with their operational needs, ensuring efficiency and effectiveness.",
  ],
  [
    "How do your forward deployed services differ from traditional AI solutions?",
    "Traditional AI solutions often focus on data analysis or insights, whereas our forward deployed services are designed for immediate action and integration within existing workflows. They facilitate real-time responses and operational execution, ensuring that AI is not just a tool for analysis but a partner in execution.",
  ],
  [
    "What systems can your forward deployed services connect to?",
    "Our forward deployed services can interface with a variety of systems, including cloud platforms, on-premise databases, CRM systems, and third-party APIs. We customize the integration to fit seamlessly within your existing technology stack.",
  ],
  [
    "How do you ensure reliability and recovery in your services?",
    "We incorporate robust error handling, automated recovery protocols, and continuous monitoring to ensure reliability. If an issue arises, our services can automatically revert to a stable state or alert human operators for intervention.",
  ],
  [
    "Can your services operate across different tools and workflows?",
    "Absolutely. Our forward deployed services are designed to function across various tools and workflows, allowing for seamless orchestration and coordination between different systems and processes.",
  ],
  [
    "What does a successful deployment of forward deployed services look like?",
    "A successful deployment includes comprehensive monitoring, user access management, performance analytics, and a clear framework for ongoing improvement. We ensure that the services are scalable and adaptable to evolving business needs.",
  ],
];

const work = [
  [
    "evidence-1.png",
    "FORWARD-DEPLOYED",
    "Kaya Health Coach",
    "Replaced slow enterprise search with instantaneous semantic discovery across 40M documents.",
		"/case-study/kaya",
    "HEALTHCARE AI",
  ],
  [
    "nexagent-showcase.png",
    "FORWARD-DEPLOYED",
    "Nexagent",
    "NexAgents (app.nexagents.cloud) puts production AI agents to work for a team",
		"/case-study/nexagents",
    "AI WORKSPACE",
  ],
  [
    "askdahab-hero.png",
    "FORWARD-DEPLOYED",
    "AskDahab",
    "Ask Dahab (askdahab.com) is a multilingual travel and booking platform for Dahab, Egypt",
		"/case-study/askdahab",
    "TRAVEL & BOOKING",
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
      {/* Hero - matches services-hub layout but with arc SVG on desktop */}
      <section className="border-b border-[#1c2328] px-10 sm:px-10 lg:grid lg:grid-cols-[minmax(0,8fr)_minmax(280px,4fr)] lg:gap-8 lg:px-80 lg:min-h-[520px] py-5">
        <div className="max-w-[720px] mx-auto lg:mx-0 self-start lg:self-center pt-12 lg:pt-0">
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
            <a className="button button-primary" href="/contact">
              Talk to our team <span>→</span>
            </a>
            <a className="button button-outline" href="#evidence">
              View relevant work →
            </a>
          </div>
        </div>
        <div className="hidden lg:flex min-h-[560px] max-h-[720px] items-center justify-center opacity-90" aria-hidden="true">
          <Image
            src="/figma/forward-deployed/hero-vector.svg"
            alt=""
            width={418}
            height={720}
            priority
            className="h-auto w-full max-h-[720px] object-contain"
          />
        </div>
      </section>

      {/* Client logo marquee */}
      <div
        className="border-b border-[#1c2328] px-6 py-4 sm:px-10 lg:px-20"
        aria-label="Selected technology partners"
      >
        <Marquee duration={42} items={clientStripItems} className="max-[640px]:py-4" />
      </div>


      {/* When you need this - Challenges */}
      <section className="border-b border-[#1c2328] bg-deep px-6 py-16 sm:px-10 sm:py-20 lg:px-50 lg:py-24">
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
      <section className="border-b border-[#1c2328] bg-ink py-20 px-50 max-[960px]:px-7">
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
              className="flex flex-col gap-6 border-b border-[#293137] py-6 sm:py-8 lg:flex-row lg:items-center lg:gap-8 lg:py-10 hover:text-orange"
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
			<section className="bg-deep">
      <div className="relative overflow-hidden border-b border-[#1c2328] bg-[#0f1417] px-6 py-16 sm:px-10 sm:py-20 lg:px-50 lg:py-24 before:absolute before:inset-[25%_20%] before:bg-[#ff98000d] before:blur-[50px] before:content-['']">
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
				</div>
      </section>

      {/* Evidence */}
      
      <section className="border-b border-[#1c2328] px-[max(40px,calc((100%_-_1120px)_/_2))] max-[640px]:px-5 py-[96px] max-[640px]:py-16" id="evidence">
        <div className="flex items-end justify-between gap-8 max-[640px]:flex-col max-[640px]:items-start mb-10">
          <div>
            <p className="eyebrow">Relevant work</p>
            <h2 className="text-[#f2f2ef] text-[clamp(38px,4vw,48px)] font-[400] leading-[1.08] tracking-[-1.5px] mt-3 max-w-[760px]">
              Evidence that demonstrates this capability.
            </h2>
          </div>
          <a href="/work" className="text-[var(--orange)] text-[13px] font-[700] tracking-[0.65px] uppercase">
            View all work →
          </a>
        </div>
        <div className="grid grid-cols-3 max-[900px]:grid-cols-2 max-[640px]:grid-cols-1 gap-6">
          {work.map(([image, label, title, body, url, tag]) => (
            <article key={title} className="bg-[#0f1417] border border-[#293137] rounded-[4px] overflow-hidden flex flex-col">
              <div className="relative">
                <Image
                  src={`/figma/services/${image}`}
                  alt=""
                  width={640}
                  height={440}
                  className="w-full aspect-[1.45] object-cover"
                />
                <WorkTag tag={tag} />
              </div>
              <div className="flex-1 p-6">
                <span className="text-[var(--orange)] text-[11px] font-[700] tracking-[0.55px]">{label}</span>
                <h3 className="text-[#f2f2ef] text-[20px] leading-[26px] mt-1.5">{title}</h3>
                <p className="text-[#9ca3af] text-[14px] leading-[22px] mt-0">{body}</p>
              </div>
              <a href={url} className="border-t border-[#293137] p-6 flex-1">
                View case study →
              </a>
            </article>
          ))}
        </div>
      </section>


      {/* Quote */}
      
      <section className="border-t border-[#1c2328] px-50 max-[640px]:px-5 py-[49px]">
			<ServicesProofSlider/>
      </section>


      {/* Engagement model */}
      <section className="border-b border-[#1c2328] bg-deep px-6 py-16 sm:px-10 sm:py-20 lg:px-50 lg:py-24">
        <SectionLabel>Engagement model</SectionLabel>
        <h2 className="mt-4 max-w-[720px] text-[clamp(38px,4vw,48px)] font-bold leading-[1.08] tracking-[-1.2px]">
          The engagement model depends on the problem.
        </h2>
        <EngagementModel items={engagement} />
      </section>

      {/* FAQ */}
      <section className="border-b border-[#1c2328] bg-ink px-6 py-16 sm:px-10 sm:py-20 lg:px-50 lg:py-24">
        <SectionLabel>FAQ</SectionLabel>
        <h2 className="mb-12 mt-4 max-w-[720px] text-[clamp(38px,4vw,48px)] font-bold leading-[1.08] tracking-[-1.2px]">
          Frequently asked questions regarding our forward deployed services.
        </h2>
        <FaqAccordion faqs={faqs} />
      </section>

      {/* CTA */}
      <section className="bg-deep px-6 py-16 sm:px-10 sm:py-20 lg:px-20 lg:py-28 lg:max-w-[1280px] lg:mx-auto">
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
          <a className="button button-primary mt-8" href="/contact">
            Talk to our team <span>→</span>
          </a>
        </div>
      </section>
    </main>
  );
}
