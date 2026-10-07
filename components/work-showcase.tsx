import Image from "next/image";

// Literal class maps: Tailwind must see complete class strings at build time,
// so per-side/per-project styling is stored as whole strings, never composed
// from fragments like `project-${slug}`.
const sideClassName = {
  left: "ml-[max(40px,calc((100vw_-_1280px)_/_2))]",
  right: "ml-auto mr-[max(40px,calc((100vw_-_1280px)_/_2))]",
} as const;

// Art-directed background crops. The trailing `!` values beat next/image's
// inline styles (height/width/top/bottom), exactly like the old
// `!important` declarations did; `max-w-none` only needs to outrank
// preflight, so it stays non-important.
const backgroundImageClassName = {
  kaya: "object-cover z-0 max-w-none h-[1062px]! w-[121.3%]! top-[-51px]! max-[640px]:h-[220px]! max-[640px]:w-full! max-[640px]:top-0! max-[640px]:bottom-auto!",
  mingcheji:
    "object-cover z-0 max-w-none h-[878px]! top-[-177px]! max-[640px]:h-[220px]! max-[640px]:top-0! max-[640px]:bottom-auto!",
  nexagent:
    "object-cover z-0 max-w-none h-[876px]! top-[-56px]! max-[640px]:h-[220px]! max-[640px]:top-0! max-[640px]:bottom-auto!",
} as const;

const projects = [
  {
    number: "01",
    type: "Healthcare AI",
    title: "Kaya Health Coach",
    copy: "A personalized health coaching experience powered by AI, from daily check-ins to guided sessions.",
    image: "/figma/selected-work-background.png",
    side: "left",
    art: "kaya",
    slug: "kaya",
  },
  {
    number: "02",
    type: "Trade Compliance AI",
    title: "Mingcheji China Cars",
    copy: "Bring trade documents, checks, and decisions into one workflow.",
    image: "/figma/mingcheji-showcase.png",
    side: "right",
    art: "single",
    slug: "mingcheji",
  },
  {
    number: "03",
    type: "Autonomous Logistics",
    title: "NEXAGENT",
    copy: "A venture studio fused with retail VC . we build and operate real products, then open the cap table so anyone can invest and help grow them.",
    image: "/figma/nexagent-showcase.png",
    side: "left",
    art: "single",
    slug: "nexagent",
  },
] as const;

const kayaPhones = [
  {
    className:
      "absolute h-[60.25%] w-[29%] left-[1.22%] top-[38.71%]",
    screen: "/figma/kaya-phone-right.png",
  },
  {
    className:
      "absolute h-[73.5%] w-[35.32%] left-[32.28%] top-[28.4%]",
    screen: "/figma/kaya-phone-left.png",
  },
  {
    className:
      "absolute h-[62.45%] w-[29%] left-[69.55%] top-[37.73%]",
    screen: "/figma/kaya-phone-right-screen.png",
  },
] as const;

export function WorkShowcase() {
  return (
    <section
      className="border-t border-[#2a2d34] px-[max(40px,calc((100%_-_1280px)_/_2))] py-16 max-[640px]:px-5 max-[640px]:py-[68px]"
      id="work"
    >
      <div className="mb-12">
        <p className="eyebrow">Selected work</p>
        <h2 className="mt-3.5 text-[48px] leading-[52px] tracking-[-1.5px]">
          What we&apos;ve actually built.
        </h2>
      </div>
      <div className="mx-[calc(max(40px,calc((100%_-_1280px)_/_2))_*_-1)] flex flex-col gap-6 max-[640px]:-mx-5">
        {projects.map((project) => (
          <article
            className="relative flex h-[524px] items-center overflow-hidden max-[640px]:h-auto max-[640px]:pt-[220px]"
            key={project.title}
          >
            <Image
              className={backgroundImageClassName[project.slug]}
              src={project.image}
              alt=""
              fill
              sizes="100vw"
            />
            {project.art === "kaya" ? (
              <div
                className="absolute left-[43%] top-[-145px] z-[1] h-[815px] w-[min(57vw,821px)] max-[640px]:left-0 max-[640px]:top-0 max-[640px]:h-[220px] max-[640px]:w-full"
                aria-hidden="true"
              >
                {kayaPhones.map((phone) => (
                  <div className={phone.className} key={phone.className}>
                    <Image
                      className="object-contain"
                      src="/figma/kaya-phone-frame.png"
                      alt=""
                      fill
                      sizes="(max-width: 640px) 30vw, 22vw"
                    />
                    <Image
                      className="object-contain inset-[1.2%]!"
                      src={phone.screen}
                      alt=""
                      fill
                      sizes="(max-width: 640px) 30vw, 22vw"
                    />
                  </div>
                ))}
              </div>
            ) : null}
            <div
              className={`relative z-[2] max-w-[430px] p-0 max-[640px]:m-0 max-[640px]:max-w-none max-[640px]:bg-deep max-[640px]:px-5 max-[640px]:pt-6 max-[640px]:pb-7 ${sideClassName[project.side]}`}
            >
              <p className="font-mono text-[11px] tracking-[1px] uppercase text-orange">
                {project.number} — {project.type}
              </p>
              <h3 className="mt-4 mb-3 text-[32px] max-[640px]:text-[28px]">
                {project.title}
              </h3>
              <p className="text-[17px] leading-[1.65] text-muted">
                {project.copy}
              </p>
              <div className="my-[22px] flex flex-wrap gap-2">
                <span className="rounded-full border border-line px-3.5 py-1.5 font-mono text-[10px] tracking-[0.5px] uppercase text-muted">
                  AI
                </span>
                <span className="rounded-full border border-line px-3.5 py-1.5 font-mono text-[10px] tracking-[0.5px] uppercase text-muted">
                  Automation
                </span>
                <span className="rounded-full border border-line px-3.5 py-1.5 font-mono text-[10px] tracking-[0.5px] uppercase text-muted">
                  Infrastructure
                </span>
              </div>
              <a
                className="text-[13px] font-bold uppercase text-orange"
                href="#contact"
              >
                View project →
              </a>
            </div>
          </article>
        ))}
      </div>
      <a
        className="button button-muted min-h-11! px-8! py-3.5!"
        href="#contact"
      >
        View all work →
      </a>
    </section>
  );
}
