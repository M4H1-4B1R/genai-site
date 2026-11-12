import Image from "next/image";
import Link from "next/link";

import { clientStripItems } from "@/components/shared/client-logos";
import { FinalCtaSection } from "@/components/shared/final-cta-section";
import { Marquee } from "@/components/shared/marquee";
import {ServicesProofSlider} from "@/components/services-proof-slider";

const team = [
  {
    name: "Laith Al Abbadi",
    role: "Founder and AI Engineer",
    expertise: "Python, Node, PyTorch",
    image: "/team/laith-al-abbadi.webp",
  },
  {
    name: "Nafiul Hasan",
    role: "Software Engineer",
    expertise: "TypeScript, Next.js, MongoDB",
    image: "/team/nafiul-hasan.webp",
  },
  {
    name: "Trinandha Yudha Ismoyo",
    role: "UI/UX Designer",
    expertise: "Figma, Wireframing, Hi-Fi design",
    image: "/team/trinandha-yudha-ismoyo.webp",
  },
  {
    name: "Sharifa Akhter",
    role: "Full Stack Developer",
    expertise: "JavaScript, Tailwind, Next.js",
    image: "/team/sharifa-akhter.webp",
  },
  {
    name: "Kushal Ghosh",
    role: "Software Engineer",
    expertise: "TypeScript, MongoDB, Docker",
    image: "/team/kushal-ghosh.webp",
  },
  {
    name: "Taufiquzzaman Emon",
    role: "Frontend & SEO Developer",
    expertise: "Next.js, Tailwind",
    image: "/team/taufiquzzaman-emon.webp",
  },
  {
    name: "Adri Shikhar Barua",
    role: "Full Stack Engineer",
    expertise: "Next.js, React, Node",
    image: "/team/adri-shikhar-barua.webp",
  },
  {
    name: "Chalimatus Sa'diyah",
    role: "Digital Marketing Expert",
    expertise: "Social Media Marketing, Content Creation",
    image: "/team/chalimatus-sadiyah.webp",
  },
  {
    name: "Mahi Abir",
    role: "Web Developer",
    expertise: "JavaScript, Next.js, Node",
    image: "/team/mahi-abir.webp",
  },
];

const showcase = [
  {
    title: "Kaya Health Coach",
    category: "Healthcare AI",
    summary:
      "AI functional medicine coach guiding people through structured wellness sessions, with real-time coaching and habit, goal and mood tracking. Under 1s to first token.",
    image: "/figma/work/8b005.png",
    url: "/case-study/kaya",
  },
  {
    title: "Ask Dahab",
    category: "Travel & Booking Platform",
    summary:
      "Multilingual travel and booking platform for Dahab, Egypt — 6 languages, ~915 pages, 18 bookable experiences, admin panel, job portal and the Ask Sinai mobile app.",
    image: "/figma/askdahab-hero.png",
    url: "/case-study/askdahab",
  },
];

const metrics = [
  { label: "Systems in production", value: "30+" },
  { label: "Avg deployment cycle", value: "8 WKS" },
  { label: "Uptime SLA", value: "99.9%", accent: true },
];

const facts = [
  ["Founded on engineering discipline", "Built by practitioners who have shipped AI at scale."],
  ["Independent and embedded", "We work alongside your team, not around it."],
  ["Global reach, Amman-rooted", "Delivering production-grade AI for global enterprise clients."],
];

const thinking = [
  ["Build for real use", "Design around the environment where the system must actually work—production constraints, real users, live data."],
  ["Systems, not isolated features", "Think across products, agents, integrations, and operations. A feature that doesn't fit the system is a liability."],
  ["Prove before claiming", "Use evidence and clear contribution instead of generic hype. Evaluations, metrics, and outcomes speak louder than narratives."],
  ["Adapt to the environment", "Learn from real constraints and adjust the system accordingly. Rigid process breaks; adaptive teams ship."],
];

const principles = [
  ["Understand the problem", "We spend time mapping the actual problem before writing any code. If the framing is wrong, the system will be too."],
  ["Engineer around real constraints", "Every production environment has real limits—latency, cost, compliance, and data access. We design around those, not around ideal conditions."],
  ["Work closely with the team", "We embed with your team at key points. We transfer knowledge, not just deliverables—because a system no one can maintain isn't a system."],
  ["Learn from evidence", "Every iteration produces signal. We instrument, evaluate, and adjust based on what real usage tells us—not what the spec assumed."],
];

const expertise = [
  ["AI Engineering", "End-to-end design and delivery of AI-powered systems—from architecture through production deployment and ongoing operations.", "/services/ai-product-engineering"],
  ["Model Alignment", "Fine-tuning, RLHF, and evaluation frameworks that make frontier models behave reliably in domain-specific production contexts.", "/services"],
  ["Agentic Systems", "Multi-agent orchestration, tool use, memory, and guardrails for autonomous workflows that operate safely at scale.", "/services/agentic-layer-engineering"],
  ["Production Infrastructure", "Scalable serving, monitoring, observability, and cost controls that keep AI systems performant and auditable over time.", "/services"],
];

const sectionClass =
  "border-b border-[#1c2328] bg-ink section-x section-y";
const card = "rounded-[8px] border border-[#494247]";
const cardClass = `${card} bg-[#0f1417]`;
const index = "font-mono text-xs text-orange";
const secondary = "text-[#c8c1c5]";

function Section({
  eyebrow,
  title,
  aside,
  children,
}: {
  eyebrow: string;
  title: string;
  aside?: string;
  children: React.ReactNode;
}) {
  return (
    <section className={sectionClass}>
      <div className="flex flex-col gap-10 lg:gap-12">
        <div className="flex flex-col justify-between gap-4 border-b border-[#494247] pb-4 md:flex-row md:items-end md:gap-12">
          <div className="flex flex-col gap-3 md:max-w-[760px]">
            <p className="font-mono text-[12px] font-bold tracking-[1.2px] text-[#999ea2]">
              {eyebrow}
            </p>
            <h2 className="text-[clamp(32px,4vw,48px)] font-medium leading-[1.08] tracking-[-1.2px] text-white">
              {title}
            </h2>
          </div>
          {aside && (
            <p className={`text-[15px] leading-6 md:w-[430px] md:shrink-0 ${secondary}`}>
              {aside}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}

export function AboutPage() {
  return (
    <main className="w-full">
      {/* 1. HERO */}
      <section className="border-b border-[#1c2328] bg-[#080b0d] section-x py-16 sm:py-20 lg:flex lg:min-h-[720px] lg:items-center">
        <div className="mx-auto grid w-full max-w-[1280px] items-center gap-12 lg:grid-cols-2">
          <div className="flex flex-col items-start gap-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-orange px-2.5 py-1.5">
                <span className="size-[5px] rounded-full bg-orange" aria-hidden="true" />
                <span className="font-mono text-xs font-bold uppercase tracking-[0.5px] text-orange">
                  AI Engineering Agency
                </span>
              </span>
              <span className="font-mono text-xs text-[#747d81]">
                AMMAN, JORDAN / GLOBAL DELIVERY
              </span>
            </div>
            <h1 className="text-[clamp(44px,6vw,64px)] font-bold uppercase leading-[1.06] tracking-[-1.6px] text-white">
              About
              <br />
              GenAI Labs
            </h1>
            <p className={`max-w-[600px] text-[18px] leading-7 ${secondary}`}>
              AI engineering built around real problems. We turn complex
              requirements into deployed, production-grade AI systems that earn
              trust through evidence.
            </p>
          </div>
          <div className="relative min-h-[340px] overflow-clip rounded-[8px] border border-[#494247] bg-[#211d1f]">
            <div
              className="absolute right-[-1px] top-[-1px] h-[220px] w-[260px] bg-[linear-gradient(220deg,rgba(255,152,0,0.1)_0%,rgba(255,152,0,0)_55%)] opacity-70 blur-[24px]"
              aria-hidden="true"
            />
            <svg
              className="absolute left-6 right-6 top-8 h-[150px] w-[calc(100%-48px)] sm:left-[47px] sm:w-[calc(100%-94px)]"
              viewBox="0 0 400 150"
              preserveAspectRatio="none"
              fill="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="about-chart-fill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ff9800" stopOpacity="0.28" />
                  <stop offset="100%" stopColor="#ff9800" stopOpacity="0" />
                </linearGradient>
              </defs>
              {[30, 70, 110].map((y) => (
                <line key={y} x1="0" x2="400" y1={y} y2={y} stroke="#494247" strokeOpacity="0.5" strokeDasharray="3 5" />
              ))}
              {[20, 60, 100, 140, 180, 220, 260, 300, 340].map((x, i) => (
                <rect key={x} x={x} y={150 - [28, 40, 34, 52, 46, 64, 58, 76, 70][i]} width="14" height={[28, 40, 34, 52, 46, 64, 58, 76, 70][i]} rx="2" fill="#494247" fillOpacity="0.55" />
              ))}
              <path d="M0 120 L40 104 L80 112 L120 86 L160 92 L200 64 L240 72 L280 44 L320 52 L360 22 L400 12 L400 150 L0 150 Z" fill="url(#about-chart-fill)" />
              <path d="M0 120 L40 104 L80 112 L120 86 L160 92 L200 64 L240 72 L280 44 L320 52 L360 22 L400 12" stroke="#ff9800" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
            </svg>
            <dl className="absolute bottom-8 left-6 right-6 flex flex-wrap gap-x-6 gap-y-4 sm:left-[47px] sm:gap-x-12">
              {metrics.map((m) => (
                <div key={m.label} className="flex flex-col gap-1">
                  <dt className="font-mono text-xs uppercase tracking-[0.8px] text-[#747d81]">
                    {m.label}
                  </dt>
                  <dd
                    className={`text-[28px] font-bold ${m.accent ? "text-orange" : "text-white"}`}
                  >
                    {m.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* 2. MARQUEE */}
      <section className="border-b border-[#1c2328] bg-ink py-6">
        <Marquee ariaLabel="Client technology and partners" items={clientStripItems} />
      </section>

      {/* 4. WHO WE ARE */}
      <Section eyebrow="WHO WE ARE" title="Who We Are">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-8">
            <p className={`text-[17px] leading-7 ${secondary}`}>
              We are an AI engineering practice built for teams that use AI to
              solve real-world problems—not just generate demos. We believe the
              best technology is invisible: it works, it scales, and it earns
              trust through evidence.
            </p>
            <figure className={`flex flex-col gap-4 ${card} bg-[#211d1f] p-7`}>
              <span className="text-[40px] font-bold leading-10 text-orange" aria-hidden="true">
                &ldquo;
              </span>
              <blockquote className="text-xl font-bold leading-7 text-[#f4f4f1]">
                We believe it takes great people to deliver a great product.
              </blockquote>
              <figcaption className="flex items-center gap-2 text-[13px] font-medium tracking-[0.5px] text-orange">
                <span className="h-px w-6 bg-orange" aria-hidden="true" />
                Our Engineering Team
              </figcaption>
            </figure>
          </div>
          <ol>
            {facts.map(([title, text], i) => (
              <li key={title} className="flex items-center gap-4 border-b border-[#494247] py-5">
                <span className={index}>{String(i + 1).padStart(2, "0")}</span>
                <div className="flex flex-col gap-1">
                  <h3 className="text-[15px] font-bold text-white">{title}</h3>
                  <p className={`text-[13px] leading-[19px] ${secondary}`}>{text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* 5. HOW WE THINK */}
      <Section
        eyebrow="HOW WE THINK"
        title="How we think."
        aside="Behavior-based principles rather than generic values—each one tied to how we act inside a project."
      >
        <ol className="border-t border-[#494247]">
          {thinking.map(([title, text], i) => (
            <li
              key={title}
              className="grid gap-2 border-b border-[#494247] py-6 md:grid-cols-2 md:gap-12"
            >
              <div className="flex flex-col gap-2">
                <span className={index}>{String(i + 1).padStart(2, "0")}</span>
                <h3 className="text-[clamp(22px,2.4vw,29px)] font-medium leading-[1.17] text-white">
                  {title}
                </h3>
              </div>
              <p className={`text-[15px] leading-6 ${secondary}`}>{text}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* 6. OPERATING PRINCIPLES */}
      <Section
        eyebrow="OPERATING PRINCIPLES"
        title="Operating principles—not a rigid methodology."
        aside="These are the behaviors that govern how we engage, build, and deliver—regardless of project size."
      >
        <div className="grid grid-cols-1 items-start gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map(([title, text], i) => (
            <article key={title} className={`flex flex-col gap-4 p-6 ${cardClass}`}>
              <span className={index}>{String(i + 1).padStart(2, "0")}</span>
              <h3 className="text-sm font-bold uppercase leading-5 tracking-[-0.4px] text-[#f4f4f1]">
                {title}
              </h3>
              <p className={`text-[13px] leading-[19px] ${secondary}`}>{text}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* 7. OUR EXPERTISE */}
      <Section
        eyebrow="OUR EXPERTISE"
        title="Our Expertise"
        aside="Four core capability domains that underpin every engagement—from prototype to production."
      >
        <div className="grid grid-cols-1 items-start gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {expertise.map(([title, text, href], i) => (
            <article key={title} className={`flex flex-col gap-6 p-6 ${cardClass}`}>
              <div className="flex flex-col gap-3">
                <span className={index}>{String(i + 1).padStart(2, "0")}</span>
                <h3 className="text-[18px] font-bold leading-6 text-white">{title}</h3>
              </div>
              <p className={`text-sm leading-[22px] ${secondary}`}>{text}</p>
              <Link href={href} className="text-[13px] font-bold uppercase leading-5 text-orange hover:underline">
                View expertise →
              </Link>
            </article>
          ))}
        </div>
        <div className={`flex flex-col justify-between gap-6 ${card} bg-[#191c1e] px-6 py-8 shadow-[0_10px_7.5px_rgba(0,0,0,0.1)] sm:px-10 md:flex-row md:items-center`}>
          <div className="flex flex-col gap-2">
            <p className="text-xl font-bold leading-7 text-[#f4f4f1]">
              Ready to build something real?
            </p>
            <p className={`text-sm leading-[22px] ${secondary}`}>
              Let&apos;s discuss how we can turn your requirements into a
              deployed AI system.
            </p>
          </div>
          <Link href="/services" className="button button-primary shrink-0 justify-center">
            Explore all expertise <span>→</span>
          </Link>
        </div>
      </Section>

      {/* 8. MEET THE TEAM */}
      <Section
        eyebrow="THE TEAM"
        title="Meet the Team"
        aside="Practitioners who have shipped AI in production environments across finance, health, and enterprise software."
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {team.map((m) => (
            <article key={m.name} className={`flex flex-col gap-4 p-6 ${cardClass}`}>
              <div className={`relative aspect-[4/3] w-full overflow-clip ${card}`}>
                <Image src={m.image} alt={m.name} fill sizes="(max-width: 768px) 100vw, 400px" className="object-cover object-top" />
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="text-xl font-bold leading-7 text-[#f4f4f1]">{m.name}</h3>
                <p className="text-[13px] font-bold uppercase tracking-[0.5px] text-orange">
                  {m.role}
                </p>
                <p className={`text-[13px] leading-[19px] ${secondary}`}>
                  {m.expertise}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* 9. PROJECT SHOWCASE */}
      <Section
        eyebrow="PROJECT SHOWCASE"
        title="Two projects that demonstrate how philosophy appears in real work."
        aside="Explore parallel high-throughput production implementations."
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {showcase.map((p) => (
            <article key={p.title} className={`flex flex-col items-start gap-4 p-6 ${cardClass}`}>
              <div className={`relative h-[200px] w-full overflow-clip ${card}`}>
                <Image src={p.image} alt={p.title} fill sizes="(max-width: 768px) 100vw, 600px" className="object-cover" />
              </div>
              <span className="rounded-[4px] border border-[rgba(255,152,0,0.2)] bg-[#1c1410] px-2 py-1 font-mono text-xs font-bold uppercase tracking-[0.5px] text-orange">
                {p.category}
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold leading-7 text-[#f4f4f1]">{p.title}</h3>
                <p className={`text-sm leading-5 ${secondary}`}>{p.summary}</p>
              </div>
              <Link href={p.url} className="flex items-center gap-2 font-bold text-orange hover:underline">
                <span className="text-[13px] uppercase leading-5">View Case Study</span>
                <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </Section>

      {/* 10-11. SHARED SECTIONS */}
			<ServicesProofSlider />
      <FinalCtaSection />
    </main>
  );
}
