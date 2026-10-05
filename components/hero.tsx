import Image from "next/image";

export function Hero() {
  return (
    <section className="hero" id="top">
      <Image
        className="hero-art"
        src="/figma/raw-16.png"
        alt=""
        fill
        priority
        sizes="100vw"
      />
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
      <div className="client-strip" aria-label="Selected clients">
        {[
          "it it",
          "✣ Frostbite",
          "♣ DATAWATCH",
          "⊕ DATA INSIGHT",
          "▲ NextGen",
          "A\\ ELEVATE AI",
        ].map((client) => (
          <span key={client}>{client}</span>
        ))}
      </div>
    </section>
  );
}
