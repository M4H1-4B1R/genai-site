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
    <section
      className="border-t border-[#2a2d34] bg-deep px-[max(40px,calc((100%_-_1280px)_/_2))] py-16 max-[640px]:px-5 max-[640px]:py-[68px]"
      id="services"
    >
      <div className="mb-14">
        <p className="eyebrow">Capabilities</p>
        <h2 className="mt-3.5 text-[clamp(40px,4vw,56px)] leading-[1.08] tracking-[-1.5px]">
          Our core practice
        </h2>
      </div>
      <div>
        {capabilities.map(([number, title, copy]) => (
          <a
            className="grid min-h-[76px] grid-cols-[20px_1fr_1fr_20px] items-center gap-[42px] border-b border-line max-[640px]:grid-cols-[20px_1fr_20px] max-[640px]:gap-3 max-[640px]:py-[18px]"
            href="#contact"
            key={number}
          >
            <span className="eyebrow text-[#747d81]">{number}</span>
            <strong className="text-[22px]">{title}</strong>
            <p className="text-[15px] text-muted max-[640px]:hidden">{copy}</p>
            <span className="text-orange">↗</span>
          </a>
        ))}
      </div>
    </section>
  );
}
