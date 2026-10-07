import { HeroLines } from "@/components/hero-lines";
import { clientStripItems } from "@/components/shared/client-logos";
import { Marquee } from "@/components/shared/marquee";

export function Hero() {
  return (
    <>
      {/* `hero-scroll` and `hero` are inert hook classes: hero-lines.tsx
          queries them via closest()/querySelector() to drive --hero-p.
          All styling comes from utilities. */}
      <section
        className="hero-scroll relative h-[320vh] max-[900px]:h-auto motion-reduce:h-auto"
        id="top"
      >
        <div className="hero sticky top-0 h-screen min-h-[930px] overflow-hidden bg-ink max-[900px]:relative max-[900px]:h-auto max-[900px]:min-h-0 motion-reduce:relative motion-reduce:h-auto motion-reduce:min-h-0">
          <HeroLines />
          <div className="relative z-[1] mx-auto max-w-[1120px] px-0 pt-[140px] pb-20 opacity-[max(0,calc(1_-_var(--hero-p,0)*1.5))] translate-x-[calc(var(--hero-p,0)*-220px)] will-change-[opacity,transform] max-[900px]:px-8 max-[900px]:pt-[110px] max-[900px]:opacity-100 max-[900px]:translate-x-0 max-[640px]:px-5 max-[640px]:pt-[90px] max-[640px]:pb-10">
            <div className="mb-10 flex items-center gap-[14px]">
              <span className="rounded-full border border-orange px-2.5 py-1.5 font-mono text-[10px] tracking-[0.5px] uppercase text-orange">
                ● Live system
              </span>
              <small className="eyebrow">Build / Act / Deploy</small>
            </div>
            <h1 className="mb-10 max-w-[760px] text-[clamp(48px,5vw,72px)] leading-[1.04] tracking-[-2px] max-[640px]:text-[46px] max-[640px]:tracking-[-1px]">
              Build AI.
              <br />
              Make It Act.
              <br />
              Put It to Work.
            </h1>
            <div className="flex flex-wrap gap-4">
              <a className="button button-primary" href="#contact">
                Request a strategy briefing <span>→</span>
              </a>
              <a className="button button-outline" href="#work">
                Explore our work →
              </a>
            </div>
            <div className="mt-12 grid max-w-[760px] grid-cols-3 gap-6 border-t border-[#2a2d34] pt-4 max-[640px]:gap-3">
              <div>
                <strong className="block text-[26px] max-[640px]:text-xl">
                  10+
                </strong>
                <span className="mt-1 block text-[12px] tracking-[0.55px] uppercase text-[#9ca3af] max-[640px]:text-[9px]">
                  AI products shipped
                </span>
              </div>
              <div>
                <strong className="block text-[26px] max-[640px]:text-xl">
                  40
                </strong>
                <span className="mt-1 block text-[12px] tracking-[0.55px] uppercase text-[#9ca3af] max-[640px]:text-[9px]">
                  Agents deployed
                </span>
              </div>
              <div>
                <strong className="block text-[26px] max-[640px]:text-xl">
                  12+
                </strong>
                <span className="mt-1 block text-[12px] tracking-[0.55px] uppercase text-[#9ca3af] max-[640px]:text-[9px]">
                  Production deployments
                </span>
              </div>
            </div>
          </div>
          <p className="eyebrow absolute right-[15%] top-[42%] z-[1] m-0 opacity-[min(1,max(0,(var(--hero-p,0)_-_0.8)_*_6))] max-[900px]:hidden motion-reduce:hidden">
            Build / Act / Deploy
          </p>
          <Marquee
            className="absolute bottom-0 left-0 z-[2] w-full border-y border-[#1c2328] pt-[26px] pb-[30px] opacity-[max(0,calc(1_-_var(--hero-p,0)*4))] max-[900px]:hidden max-[900px]:opacity-100 motion-reduce:hidden"
            duration={42}
            items={clientStripItems}
            itemClassName="opacity-80"
          />
        </div>
      </section>
      <section
        className="border-y border-[#1c2328] pt-[26px] pb-[30px]"
        aria-label="Clients"
      >
        <Marquee duration={42} items={clientStripItems} />
      </section>
    </>
  );
}
