const capabilities = [
  [
    "01",
    "AI Product Engineering",
    "Build AI products around a real business need.",
  ],
  [
    "02",
    "Agentic Layer Engineering",
    "Connect agents to your tools, data, and workflows.",
  ],
  [
    "03",
    "Forward-Deployed Services",
    "Integrate, adapt, and deploy AI inside your operations.",
  ],
];

export function Capabilities() {
  return (
    <section className="capabilities" id="services">
      <div className="section-heading">
        <p className="eyebrow">Capabilities</p>
        <h2>Our core practice</h2>
      </div>
      <div className="capability-list">
        {capabilities.map(([number, title, copy]) => (
          <a href="#contact" key={number}>
            <span className="mono muted">{number}</span>
            <strong>{title}</strong>
            <p>{copy}</p>
            <span className="accent">↗</span>
          </a>
        ))}
      </div>
    </section>
  );
}
