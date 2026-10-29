import Image from "next/image";

import { ServicesProofSlider } from "@/components/services-proof-slider";
import { clientStripItems } from "@/components/shared/client-logos";
import { Marquee } from "@/components/shared/marquee";

const capabilities = [
  {
    number: "01",
    title: "AI Product Engineering",
    body: "Build AI-powered products, features, and applications for real users with low-latency client inference.",
    tags: ["Full-stack GenAI", "Streaming UX", "Model adapters"],
  },
  {
    number: "02",
    title: "Agentic Layer Engineering",
    body: "Engineer AI that can use context, tools, and multi-step workflows with strict boundary constraints.",
    tags: ["Tool calling", "Memory systems", "Guardrails"],
  },
  {
    number: "03",
    title: "Forward-Deployed Services",
    body: "Embed with your team to solve high-stakes operational problems and move from prototype to production.",
    tags: ["Rapid discovery", "Systems thinking", "Production ops"],
  },
];

const evidence = [
  ["evidence-1.png", "Kaya Functional Health", "Kaya is an AI functional medicine health coach. It guides people through structured wellness sessions", "AI PRODUCT ENGINEERING", "/case-study/kaya"],
  ["nexagent-showcase.png", "Nexagents", "NexAgents (app.nexagents.cloud) puts production AI agents to work for a team", "AGENTIC SYSTEMS", "/case-study/nexagents"],
  ["askdahab-hero.png", "Askdahab", "Ask Dahab (askdahab.com) is a multilingual travel and booking platform for Dahab, Egypt", "FORWARD-DEPLOYED", "/case-study/askdahab"],
];

export function ServicesHub() {
  return (
    <div className="services-page">
      <section className="services-hero">
        <svg
          className="services-hero-waves"
          viewBox="0 0 600 400"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient
              id="services-wave-fade"
              gradientUnits="userSpaceOnUse"
              x1="0"
              y1="0"
              x2="0"
              y2="700"
            >
              <stop offset="0" stopColor="#ff9800" stopOpacity="0.05" />
              <stop offset="0.5" stopColor="#ff9800" stopOpacity="0.4" />
              <stop offset="1" stopColor="#ff9800" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          {Array.from({ length: 9 }, (_, i) => (
            <path
              key={i}
              d="M0 0C60 160 200 220 340 320S480 520 520 700"
              fill="none"
              stroke="url(#services-wave-fade)"
              strokeWidth="1"
              transform={`translate(${i * 20} 0)`}
              vectorEffect="non-scaling-stroke"
            />
          ))}
        </svg>
        <div className="services-container">
          <div className="services-meta">
            <span className="services-badge">
              <i /> Services
            </span>
            <span>SYS_CAPABILITIES</span>
          </div>
          <div className="services-hero-copy">
            <h1>
              AI engineering capabilities for different kinds of problems.
            </h1>
            <p>Three core capabilities. One integrated approach.</p>
          </div>
          <div className="services-actions">
            <a className="button button-primary" href="/contact">
              Talk to our team <span>→</span>
            </a>
            <a className="button button-outline" href="/work">
              View relevant work →
            </a>
          </div>
        </div>
      </section>

      <div
        className="pt-[26px] pb-[30px]"
        aria-label="Selected technology partners"
      >
        <Marquee duration={42} items={clientStripItems} className="max-[640px]:py-4" />
      </div>

      <main className="services-main">
        <section className="services-section">
          <div className="services-section-heading">
            <p className="eyebrow">Capabilities</p>
            <h2>Three ways we can help.</h2>
            <p>Choose by the problem you need solved.</p>
          </div>
          <div className="services-capability-grid">
            {capabilities.map((capability) => (
              <article className="services-capability" key={capability.number}>
                <div>
                  <span className="services-card-number">
                    Capability / {capability.number}
                  </span>
                  <h3>{capability.title}</h3>
                  <p>{capability.body}</p>
                  <div className="services-tags">
                    {capability.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
                <a href="/contact">
                  Explore <span>→</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="services-routing">
          <div className="services-section-heading">
            <p className="eyebrow">Routing</p>
            <h2>Start with the problem, not our terminology.</h2>
            <p>
              Not sure which capability fits? Use the situation you recognize.
            </p>
          </div>
          <div className="services-routing-list">
            {[
              [
                "01",
                "We have an idea for an AI-powered product.",
                "AI Product Engineering",
              ],
              [
                "02",
                "We need AI to perform tasks and take actions.",
                "Agentic Layer Engineering",
              ],
              [
                "03",
                "We have a system that needs to work in the real world.",
                "Forward-Deployed Services",
              ],
            ].map(([number, problem, service]) => (
              <div className="services-routing-row" key={number}>
                <div>
                  <span>{number}</span>
                  <p>{problem}</p>
                </div>
                <a href="/contact">
                  {service} <b>→</b>
                </a>
              </div>
            ))}
            <div className="services-routing-row services-routing-row-final">
              <div>
                <span>—</span>
                <p>We&apos;re not sure yet.</p>
              </div>
              <a className="button button-primary" href="/contact">
                Talk to our team <b>→</b>
              </a>
            </div>
          </div>
        </section>

        <section className="services-section services-evidence">
          <div className="services-section-heading ">
            <p className="eyebrow">Proof in practice</p>
						<div className="flex gap-30 max-[640px]:flex-col max-[640px]:gap-2">
            <h2>Evidence that demonstrates this capability.</h2>
						<a href="/work" className="underline mt-8 font-bold">View All Work →</a>
						</div>
          </div>
          <div className="services-evidence-grid">
            {evidence.map(([image, title, description, label, url]) => (
              <article className="services-evidence-card p-8" key={image}>
                <Image
                  src={`/figma/services/${image}`}
                  alt=""
                  width={640}
                  height={440}
                />
                <span>{label}</span>
                <h3>{title}</h3>
								<p className="ml-4.5 text-muted mb-3">{description}</p>
							<a href={url} className="text-text text-[13px] font-bold ml-5">Explore →</a>
              </article>
            ))}
          </div>
        </section>

        <section className="services-architecture">
          <div className="services-section-heading">
            <p className="eyebrow">Architecture</p>
            <h2>Our AI &amp; Software Capabilities</h2>
            <p>The strongest solution depends on what the problem requires.</p>
          </div>
          <div className="services-architecture-diagram">
            <div className="services-stage-grid">
              <article className="duration-150 bg-[#0f1417] hover:bg-orange hover:text-ink cursor-pointer">
                <strong>Product</strong>
                <h3>Build the product</h3>
                <p>
                  Intuitive front-end interfaces, low-latency streaming
                  endpoints, and high-retention user loops.
                </p>
              </article>
              <article className="duration-150 bg-[#0f1417] hover:bg-orange hover:text-ink cursor-pointer">
                <strong>Agent</strong>
                <h3>Make AI act</h3>
                <p>
                  Orchestrate deterministic tool execution, automated validation
                  loops, and multi-system synthesis.
                </p>
              </article>
              <article className="duration-150 bg-[#0f1417] hover:bg-orange hover:text-ink cursor-pointer">
                <strong>Deployment</strong>
                <h3>Put it into real use</h3>
                <p>
                  Run inside locked-down VPCs, air-gapped clusters, and
                  regulated multi-region sovereign zones.
                </p>
              </article>
            </div>
            <div className="services-connectors" aria-hidden="true">
              <span className="services-connector-drop services-connector-drop-left" />
              <span className="services-connector-drop services-connector-drop-center" />
              <span className="services-connector-drop services-connector-drop-right" />
              <span className="services-connector-bus" />
              <span className="services-connector-elbow" />
              <span className="services-connector-down" />
            </div>
            <article className="services-convergence-core">
              <h3>AI SYSTEM IN REAL USE</h3>
              <p>
                Autonomous actions execute within hardened security boundaries,
                providing verifiable outcomes, human oversight, and continuous
                observability.
              </p>
            </article>
          </div>
        </section>

        <section className="services-section services-why">
          <div className="services-section-heading">
            <p className="eyebrow">Why choose us</p>
            <h2>Why Choose Us</h2>
            <p>
              We combine product thinking, agent engineering, and deployment
              expertise to turn AI concepts into reliable production systems.
            </p>
          </div>
          <div className="services-why-grid">
            <article>
              <span>Principle / 01</span>
              <h3>Production Readiness</h3>
              <p>
                We design for deployment from day one, so your AI system is
                built to operate in the real world.
              </p>
            </article>
            <article>
              <span>Principle / 02</span>
              <h3>Human Oversight</h3>
              <p>
                We build systems that provide verifiable outcomes, human review,
                and continuous observability.
              </p>
            </article>
            <article>
              <span>Principle / 03</span>
              <h3>System Thinking</h3>
              <p>
                We tie interfaces, automated tool-execution boundaries, and real
                production telematics into a single coherent engine.
              </p>
            </article>
          </div>
        </section>

        <ServicesProofSlider />
      </main>
    </div>
  );
}
