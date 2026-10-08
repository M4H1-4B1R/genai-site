import { clientStripItems } from "@/components/shared/client-logos";
import { Marquee } from "@/components/shared/marquee";

import Image from "next/image";

const situations = [
  "A new AI product or feature needs to be built.",
  "An existing product needs an AI capability.",
  "A prototype needs to become a real product.",
  "A workflow should become a usable product experience.",
];

const deliverables = [
  [
    "AI-powered applications",
    "Build an application around a clear user need and the AI capability that serves it best.",
  ],
  [
    "AI product features",
    "Add useful AI capabilities to the product your users already know.",
  ],
  [
    "Internal AI tools",
    "Create practical tools that help a team use AI in its everyday work.",
  ],
  [
    "AI-enabled workflows",
    "Turn a repeated task or process into a usable product experience.",
  ],
  [
    "Integrations",
    "Connect the product with the data, software, and services it needs to work reliably.",
  ],
];

const modelSteps = [
  [
    "01 / MAP",
    "DEFINE",
    "Map business constraints, requirements and latency thresholds.",
  ],
  [
    "02 / ARCHITECT",
    "DESIGN",
    "Select context models, partition parameters & secure boundaries.",
  ],
  [
    "03 / PIPELINE",
    "ENGINEER",
    "Construct robust streaming endpoints and Triton logic graphs.",
  ],
  [
    "04 / SCALE",
    "PUT INTO USE",
    "Production rollout with automatic failovers and zero downtime.",
  ],
  [
    "05 / DRIFT_CHECK",
    "LEARN / ADAPT",
    "Continually monitor production accuracy arrays & compress nodes.",
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
    "What types of AI products do you build?",
    "We build everything from internal copilots and workflow automation to customer-facing AI features, multimodal search experiences, custom model services, and production-grade orchestration layers.",
  ],
  [
    "How long does a typical engagement take?",
    "Most engagements begin with a focused discovery and architecture sprint, then move into iterative delivery. Depending on scope, teams typically see a working prototype in a few weeks and a production-ready path within one to three months.",
  ],
  [
    "Do you work with existing codebases or start from scratch?",
    "Both. We can start from scratch on a greenfield build or integrate directly into your existing platform, APIs, and data architecture. Our goal is to fit the delivery model to your current stack and team capacity.",
  ],
  [
    "What's your approach to data privacy and security?",
    "We design privacy and security into the architecture from day one. That includes access controls, data retention rules, isolation between services, secure model interactions, and deployment patterns that support enterprise compliance requirements.",
  ],
  [
    "How do you measure success for AI products?",
    "Success is measured with real operational and product signals, not just demos. We track response latency, cost efficiency, task completion, model quality, user adoption, and reliability under production traffic.",
  ],
  [
    "Can you integrate AI into our existing product?",
    "Yes. A common engagement is adding AI capabilities into an existing product without disrupting core performance. We build around your current architecture, isolate high-risk dependencies, and ship features that feel native to your users.",
  ],
];

const work = [
  [
    "evidence-1.png",
    "HEALTHCARE AI",
    "Kaya Health Coach",
    "Replaced slow enterprise search with instantaneous semantic discovery across 40M documents.",
  ],
  [
    "evidence-2.png",
    "LOGISTICS",
    "Generative Supply Chain Copilot",
    "Engineered high-performance model microservices that optimize delivery routing graphs.",
  ],
  [
    "evidence-3.png",
    "HEALTHCARE",
    "Clinical Trial Data Parser",
    "Built real-time multi-model validation pipelines handling patient metrics with strict SLAs.",
  ],
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-12">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="text-[#f2f2ef] text-[clamp(38px,4vw,48px)] font-[400] leading-[1.08] tracking-[-1.5px] mt-3 max-w-[760px]">
        {title}
      </h2>
      {description && <p className="text-[#9ca3af] text-[15px] leading-[24px] mt-0 max-w-[560px]">{description}</p>}
    </div>
  );
}

export function ProductEngineeringPage() {
  return (
    <main className="bg-[#0d0e0f]">
      <section className="relative overflow-hidden border-b border-[#1c2328] bg-[#080b0d] min-h-[720px] px-[max(40px,calc((100%_-_1120px)_/_2))] pt-[110px] max-[900px]:pt-[92px] max-[640px]:pt-[68px]">
        <div className="relative z-[1] max-w-[650px]">
          <p className="inline-flex items-center gap-1.5 bg-[#0f1417] border border-[#293137] rounded-[2px] text-[#9ca3af] font-[700] text-[11px] tracking-[1.2px] uppercase px-2 py-1 mb-8">
            <span className="inline-block h-[6px] w-[6px] rounded-full bg-[var(--orange)]" aria-hidden="true" />
            Services / AI Product Engineering
          </p>
          <h1 className="text-[#f2f2ef] text-[clamp(46px,5vw,64px)] font-[700] leading-[1.06] tracking-[-1.5px] mb-6 max-w-[680px]">
            Turn AI opportunities into products people can use.
          </h1>
          <p className="text-[#9ca3af] text-[18px] leading-[28px] mb-0 max-w-[576px]">
            Design and build AI-powered products, features, and applications for
            real users, from new concepts to launched products.
          </p>
          <div className="flex flex-wrap gap-4 mt-10">
            <a className="button button-primary" href="#contact">
              Talk to our team <span>→</span>
            </a>
            <a className="button button-outline" href="#relevant-work">
              View relevant work →
            </a>
          </div>
        </div>
        <svg
          className="absolute right-[10%] top-0 h-[722px] w-[418px] max-[900px]:right-[6%] max-[640px]:right-[-8%]"
          aria-hidden="true"
          viewBox="0 0 418 722"
        >
          <linearGradient id="pe-hero-sweep" x1="0" y1="0.7" x2="418" y2="0.7" gradientUnits="userSpaceOnUse">
            <stop stopColor="#E6BC73" />
            <stop offset="0.5" stopColor="#B38B4E" />
            <stop offset="1" stopColor="#76684E" stopOpacity={0} />
          </linearGradient>
          <path
            d="M0 0.7C106.4 0.7 167.2 720.7 418 720.7"
            fill="none"
            stroke="url(#pe-hero-sweep)"
            strokeWidth="1.4"
          />
        </svg>
      </section>
      <section
        className="border-y border-[#1c2328] pt-[26px] pb-[30px]"
        aria-label="Clients"
      >
        <Marquee duration={42} items={clientStripItems} className="max-[640px]:py-4" />
      </section>
      <div className="bg-[#0d0e0f] border-y border-[#1c2328] px-[max(40px,calc((100%_-_1120px)_/_2))] py-[38px]">
        <div className="flex h-[116px] items-center justify-center rounded-[8px] border border-[#30363d] bg-[#161b22]">
          <strong className="text-white font-[700] text-[20px] tracking-[0.4px] uppercase">
            IMAGE BANNER
          </strong>
        </div>
      </div>
      <section className="border-b border-[#1c2328] px-[max(40px,calc((100%_-_1120px)_/_2))] py-[96px]">
        <SectionHeading
          eyebrow="When you need this"
          title="Recognize the situation before choosing the service."
          description="Common challenges engineering and product teams bring to our specialized AI systems lab."
        />
        <div className="grid grid-cols-2 gap-6">
          {situations.map((situation, index) => (
            <article key={situation} className="bg-[#0f1417] border border-[#293137] rounded-[4px] p-8">
              <span className="text-[var(--orange)] font-[700] text-[11px] font-mono tracking-[1px]">0{index + 1}</span>
              <h3 className="text-[#f2f2ef] text-[24px] font-[500] leading-[30px] mt-4">{situation}</h3>
            </article>
          ))}
        </div>
      </section>
      <section className="border-b border-[#1c2328] px-[max(40px,calc((100%_-_1120px)_/_2))] py-[96px]">
        <div className="mb-12">
          <p className="eyebrow">Deliverables</p>
          <h2 className="text-[#f2f2ef] text-[clamp(38px,4vw,48px)] font-[400] leading-[1.08] tracking-[-1.5px] mt-3 max-w-[760px]">
            What we engineer.
          </h2>
        </div>
        <div className="border-t border-[#293137]">
          {deliverables.map(([title, body]) => (
            <article key={title} className="grid grid-cols-2 gap-12 border-b border-[#293137] p-6">
              <h3 className="text-[#f2f2ef] text-[28px] leading-[34px]">{title}</h3>
              <p className="text-[#9ca3af] text-[17px] leading-[28px]">{body}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="border-b border-[#1c2328] px-[max(40px,calc((100%_-_1120px)_/_2))] py-[96px]">
        <div className="mb-12">
          <p className="eyebrow">How we work</p>
          <h2 className="text-[#f2f2ef] text-[clamp(38px,4vw,48px)] font-[400] leading-[1.08] tracking-[-1.5px] mt-3 max-w-[760px]">
            Service Model
          </h2>
        </div>
        <div className="relative flex gap-3">
          <span className="absolute left-[10%] right-[10%] top-[-22px] border-t border-dashed border-[#ff9800] opacity-50" aria-hidden="true" />
          {modelSteps.map(([number, title, body], index) => (
            <div
              className={`flex-1 bg-[#080b0d] border border-[#293137] rounded-[4px] p-6 flex flex-col gap-2.5 ${index === 2 ? "border-[var(--orange)]" : ""}`}
              key={number}
            >
              <span className={`${index === 2 ? "text-[#ffc081]" : "text-[#747d81]"} font-[700] text-[10px] font-mono tracking-[1px]"`}
              >{number}</span
              >
              <strong className="text-[#f4f4f1] text-[13px] tracking-[0.6px]">{title}</strong>
              <p className="text-[#9ca3af] text-[13px] leading-[20px]">{body}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-[#6b7280] text-[15px] mt-12">
          Return to the problem as evidence changes.
        </p>
      </section>
      <section className="border-b border-[#1c2328] px-[max(40px,calc((100%_-_1120px)_/_2))] py-[96px]" id="relevant-work">
        <div className="flex items-end justify-between gap-8">
          <div>
            <p className="eyebrow">Relevant work</p>
            <h2 className="text-[#f2f2ef] text-[clamp(38px,4vw,48px)] font-[400] leading-[1.08] tracking-[-1.5px] mt-3 max-w-[760px]">
              Evidence that demonstrates this capability.
            </h2>
          </div>
          <a href="#contact" className="text-[var(--orange)] text-[13px] font-[700] tracking-[0.65px] uppercase">
            View all work →
          </a>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {work.map(([image, label, title, body]) => (
            <article key={title} className="bg-[#0f1417] border border-[#293137] rounded-[4px] overflow-hidden flex flex-col">
              <Image
                src={`/figma/services/${image}`}
                alt=""
                width={640}
                height={440}
                className="w-full aspect-[1.45] object-cover"
              />
              <div className="flex-1 p-6">
                <span className="text-[var(--orange)] text-[11px] font-[700] tracking-[0.55px]">{label}</span>
                <h3 className="text-[#f2f2ef] text-[20px] leading-[26px] mt-1.5">{title}</h3>
                <p className="text-[#9ca3af] text-[14px] leading-[22px] mt-0">{body}</p>
              </div>
              <a href="#contact" className="border-t border-[#293137] p-6 flex-1">
                View case study →
              </a>
            </article>
          ))}
        </div>
      </section>
      <section className="border-t border-[rgba(83,68,52,0.2)] px-[max(40px,calc((100%_-_1120px)_/_2))] py-[49px]">
        <div className="border border-[rgba(83,68,52,0.3)] rounded-[4px] p-8 md:p-16">
          <p className="text-[#f4f4f1] text-[14px] tracking-[0.6px] uppercase border-b border-[rgba(83,68,52,0.2)] pb-8 mb-0">
            — &nbsp; Proof record <span className="float-right text-[#ffc174] text-[11px]">● Verified audit</span>
          </p>
          <blockquote className="text-[#e5e1e4] text-[clamp(32px,4vw,48px)] font-[700] leading-[1] tracking-[-1.2px] mt-10 mb-10 max-w-[900px]">
            &quot;GenAILabs gave our operational platform the rare feeling of being
            both extraordinarily intelligent and unmistakably human.&quot;
          </blockquote>
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[rgba(83,68,52,0.2)]">
            <p>
              <strong className="text-[10px] tracking-[0.6px] uppercase text-white block mt-1">— Mara Voss</strong>
              <span className="text-[#c8c1c5] text-[12px] leading-[16px]">
                Founder &amp; Managing Director, Lumen Field
              </span>
            </p>
            <p>
              <strong className="text-[10px] tracking-[0.6px] uppercase text-white block mt-1">Discipline</strong>
              <span className="text-[#c8c1c5] text-[12px] leading-[16px]">
                Autonomous Workflow Engine / Model Alignment / Production Infrastructure
              </span>
            </p>
            <p>
              <strong className="text-[10px] tracking-[0.6px] uppercase text-white block mt-1">Deployment cycle</strong>
              <span className="text-[#c8c1c5] text-[12px] leading-[16px]">
                2026.Q1 Production
              </span>
            </p>
          </div>
        </div>
      </section>
      <section className="border-b border-[#1c2328] px-[max(40px,calc((100%_-_1120px)_/_2))] py-[96px]">
        <div className="mb-12">
          <p className="eyebrow">How we engage</p>
          <h2 className="text-[#f2f2ef] text-[clamp(38px,4vw,48px)] font-[400] leading-[1.08] tracking-[-1.5px] mt-3 max-w-[760px]">
            The engagement model depends on the problem.
          </h2>
        </div>
        <div className="grid grid-cols-4 gap-8">
          {engagement.map(([number, title, body]) => (
            <article key={number} className="bg-[#0f1417] border border-[#293137] rounded-[4px] p-8">
              <span className="text-[var(--orange)] font-[700] text-[11px] font-mono tracking-[1px]">{number}</span>
              <h3 className="text-[#f2f2ef] text-[22px] leading-[28px] mt-6">{title}</h3>
              <p className="text-[#9ca3af] text-[15px] leading-[24px] mt-0">{body}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="border-b border-[#1c2328] px-[max(40px,calc((100%_-_1120px)_/_2))] py-[96px] text-center">
        <div className="mx-auto max-w-[760px]">
          <p className="eyebrow">FAQ</p>
          <h2 className="text-[#f2f2ef] text-[clamp(38px,4vw,48px)] font-[400] leading-[1.08] tracking-[-1.5px] mt-3">
            Frequently asked questions.
          </h2>
          <p className="text-[#9ca3af] text-[15px] leading-[24px] mt-0 mx-auto max-w-[560px]">
            Common questions teams ask before starting an AI product engineering engagement.
          </p>
        </div>
        <div className="border-t border-[#1c2328]">
          {faqs.map(([question, answer]) => (
            <article key={question} className="border-b border-[#293137] py-7">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-[#f4f4f1] text-[18px] leading-[24px]">{question}</h3>
                <span className="inline-flex items-center justify-center flex-0 w-[24px] h-[24px] rounded-full bg-[rgba(255,152,0,0.1)] border border-[rgba(255,192,129,0.3)] text-[var(--orange)]">
                  −
                </span>
              </div>
              <p className="text-[#9ca3af] text-[15px] leading-[24px] mt-4">{answer}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-[#0d0e0f] px-[max(40px,calc((100%_-_1120px)_/_2))] py-[96px]">
        <div className="bg-[#0f1417] border border-[#293137] rounded-[4px] p-18 md:p-72">
          <p className="eyebrow">Let&apos;s talk</p>
          <h2 className="text-[#f2f2ef] text-[clamp(42px,5vw,56px)] font-[500] leading-[1.08] tracking-[-1.5px] mt-4 mb-4 max-w-[700px]">
            Have an AI product worth building?
          </h2>
          <p className="text-[#9ca3af] text-[17px] leading-[28px] mt-0 mb-8 max-w-[672px]">
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
