const nodes = [
  ["PRODUCT", "Interface & Human Workflows"],
  ["AGENT", "Tools, Memory & Orchestration"],
  ["DEPLOYMENT", "Infra, Security & Ops"],
];

export function Architecture() {
  return (
    <section className="grid grid-cols-[1fr_1.55fr] gap-16 border-t border-[#2a2d34] px-[max(40px,calc((100%_-_1280px)_/_2))] py-16 max-[900px]:grid-cols-1 max-[640px]:px-5 max-[640px]:py-[68px]">
      <div className="self-center">
        <p className="eyebrow">Architecture & systems</p>
        <h2 className="mt-3.5 text-[clamp(40px,4vw,56px)] leading-[1.08] tracking-[-1.5px]">
          How the Pieces Connect
        </h2>
        <p className="max-w-[500px] text-[18px] leading-[1.55] text-[#d1d5db]">
          Product, agent, and deployment capabilities work together as a system.
          We design each layer to reinforce the others so your AI system
          delivers value in the real world.
        </p>
        <div className="mt-[30px] flex flex-col gap-1.5 border-l-2 border-white bg-[#14161a99] px-5 py-3.5">
          <strong className="text-[11px] tracking-[0.6px] uppercase">
            Synchronized architecture
          </strong>
          <span className="text-[14px] leading-[1.45] text-[#9ca3af]">
            Rather than treating AI as an isolated API call, our practice ties
            interfaces, automated tool-execution boundaries, and real production
            telematics into a single coherent engine.
          </span>
        </div>
      </div>
      <div className="relative flex min-h-[420px] items-center gap-14 rounded-lg border border-[#2a2d34] bg-[#14161a] p-10 max-[640px]:flex-col max-[640px]:items-stretch max-[640px]:gap-6 max-[640px]:p-5">
        <div className="flex flex-1 flex-col gap-3.5">
          {nodes.map(([title, copy]) => (
            <div
              className="flex flex-col gap-[3px] rounded border border-[#2a2d34] bg-ink p-[17px]"
              key={title}
            >
              <strong className="text-[14px]">{title}</strong>
              <span className="text-[11px] text-[#9ca3af]">{copy}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-[1.4] flex-col gap-3 rounded border-2 border-white p-9 shadow-[0_0_35px_#ff8a0026] max-[640px]:px-5 max-[640px]:py-6">
          <p className="m-0 text-[11px] font-bold tracking-[1.2px] uppercase text-[#ff8a00]">
            Unified target
          </p>
          <strong className="text-[24px] uppercase">
            AI system in real use
          </strong>
          <span className="text-[13px] leading-[1.5] text-[#d1d5db]">
            Autonomous actions execute within hardened security boundaries,
            providing verifiable outcomes, human oversight, and continuous
            observability.
          </span>
          <small className="mt-1 border-t border-[#2a2d34] pt-3 text-[#ff8a00]">
            ● Operational reliability engine active
          </small>
        </div>
      </div>
    </section>
  );
}
