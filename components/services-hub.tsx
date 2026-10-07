import Image from "next/image";

import { ServicesProofSlider } from "@/components/services-proof-slider";
import { clientStripItems } from "@/components/shared/client-logos";

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
  ["evidence-1.png", "Rapid Health Desk", "AI PRODUCT ENGINEERING"],
  ["evidence-2.png", "Knowledge Workflows", "AGENTIC SYSTEMS"],
  ["evidence-3.png", "Operations Console", "FORWARD-DEPLOYED"],
];

export function ServicesHub() {
  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="services-hero-glow" />
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
            <a className="button button-primary" href="#contact">
              Talk to our team <span>→</span>
            </a>
            <a className="button button-outline" href="#work">
              View relevant work →
            </a>
          </div>
        </div>
      </section>

      <div
        className="services-client-strip"
        aria-label="Selected technology partners"
      >
        {clientStripItems.map((item, index) => (
          <div className="services-client" key={index}>
            {item}
          </div>
        ))}
      </div>
      <section className="services-banner">
        <div>Image banner</div>
      </section>

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
                <a href="#contact">
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
                <a href="#contact">
                  {service} <b>→</b>
                </a>
              </div>
            ))}
            <div className="services-routing-row services-routing-row-final">
              <div>
                <span>—</span>
                <p>We&apos;re not sure yet.</p>
              </div>
              <a className="button button-primary" href="#contact">
                Talk to our team <b>→</b>
              </a>
            </div>
          </div>
        </section>

        <section className="services-section services-evidence">
          <div className="services-section-heading">
            <p className="eyebrow">Proof in practice</p>
            <h2>Evidence that demonstrates this capability.</h2>
          </div>
          <div className="services-evidence-grid">
            {evidence.map(([image, title, label]) => (
              <article className="services-evidence-card" key={image}>
                <Image
                  src={`/figma/services/${image}`}
                  alt=""
                  width={640}
                  height={440}
                />
                <span>{label}</span>
                <h3>{title}</h3>
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
              <article>
                <strong>Product</strong>
                <h3>Build the product</h3>
                <p>
                  Intuitive front-end interfaces, low-latency streaming
                  endpoints, and high-retention user loops.
                </p>
              </article>
              <article>
                <strong>Agent</strong>
                <h3>Make AI act</h3>
                <p>
                  Orchestrate deterministic tool execution, automated validation
                  loops, and multi-system synthesis.
                </p>
              </article>
              <article>
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
