import { HeroLines } from "@/components/hero-lines";
import { Marquee } from "@/components/shared/marquee";

export function Hero() {
  return (
    <section className="hero-scroll" id="top">
      <div className="hero">
        <HeroLines />
        <div className="hero-content">
        <div className="hero-status">
          <span>● Live system</span>
          <small>Build / Act / Deploy</small>
        </div>
        <h1>
          Build AI.
          <br />
          Make It Act.
          <br />
          Put It to Work.
        </h1>
        <div className="button-row">
          <a className="button button-primary" href="#contact">
            Request a strategy briefing <span>→</span>
          </a>
          <a className="button button-outline" href="#work">
            Explore our work →
          </a>
        </div>
        <div className="stats">
          <div>
            <strong>10+</strong>
            <span>AI products shipped</span>
          </div>
          <div>
            <strong>40</strong>
            <span>Agents deployed</span>
          </div>
          <div>
            <strong>12+</strong>
            <span>Production deployments</span>
          </div>
        </div>
      </div>
        <p className="hero-end-tag mono">Build / Act / Deploy</p>
        <Marquee
          className="client-strip"
          duration={42}
          items={[
            "it it",
            "✣ Frostbite",
            "♣ DATAWATCH",
            "⊕ DATA INSIGHT",
            "▲ NextGen",
            "A\\ ELEVATE AI",
          ]}
        />
      </div>
    </section>
  );
}
