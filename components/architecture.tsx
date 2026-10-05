const nodes = [
  ["PRODUCT", "Interface & Human Workflows"],
  ["AGENT", "Tools, Memory & Orchestration"],
  ["DEPLOYMENT", "Infra, Security & Ops"],
];

export function Architecture() {
  return (
    <section className="architecture">
      <div className="architecture-copy">
        <p className="eyebrow">Architecture & systems</p>
        <h2>How the Pieces Connect</h2>
        <p>
          Product, agent, and deployment capabilities work together as a system.
          We design each layer to reinforce the others so your AI system
          delivers value in the real world.
        </p>
        <div className="architecture-note">
          <strong>Synchronized architecture</strong>
          <span>
            Rather than treating AI as an isolated API call, our practice ties
            interfaces, automated tool-execution boundaries, and real production
            telematics into a single coherent engine.
          </span>
        </div>
      </div>
      <div className="diagram">
        <div className="node-stack">
          {nodes.map(([title, copy]) => (
            <div className="diagram-node" key={title}>
              <strong>{title}</strong>
              <span>{copy}</span>
            </div>
          ))}
        </div>
        <div className="diagram-core">
          <p>Unified target</p>
          <strong>AI system in real use</strong>
          <span>
            Autonomous actions execute within hardened security boundaries,
            providing verifiable outcomes, human oversight, and continuous
            observability.
          </span>
          <small>● Operational reliability engine active</small>
        </div>
      </div>
    </section>
  );
}
