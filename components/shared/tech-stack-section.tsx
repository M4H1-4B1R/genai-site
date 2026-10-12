import Image from "next/image";

type TechItem = {
  name: string;
  icon: string;
};

type TechCategory = {
  title: string;
  description: string;
  items: TechItem[];
};

const techCategories: TechCategory[] = [
  {
    title: "AI & LLM",
    description:
      "Foundation models and AI frameworks for intelligent applications.",
    items: [
      { name: "Open AI", icon: "/figma/work/32d08.svg" },
      { name: "Claude", icon: "/figma/work/306d2.png" },
      { name: "Gemini", icon: "/figma/work/a6e0e.png" },
      { name: "Meta", icon: "/figma/work/d00ff.png" },
      { name: "Mistral AI", icon: "/figma/work/3d9b1.png" },
      { name: "LangChain", icon: "/figma/work/963d5.svg" },
    ],
  },
  {
    title: "Cloud & Infrastructure",
    description:
      "Scalable cloud platforms and infrastructure for high availability, security, and performance.",
    items: [
      { name: "AWS", icon: "/figma/work/92737.png" },
      { name: "Google Cloud", icon: "/figma/work/e45a1.png" },
      { name: "Microsoft Azure", icon: "/figma/work/b94c3.png" },
      { name: "Vercel", icon: "/figma/work/efa6c.svg" },
      { name: "Cloudflare", icon: "/figma/work/b74b9.png" },
      { name: "Docker", icon: "/figma/work/d6e1b.png" },
    ],
  },
  {
    title: "Data & Database",
    description:
      "Databases and vector stores for structured and unstructured data.",
    items: [
      { name: "PostgreSQL", icon: "/figma/work/88070.png" },
      { name: "MySQL", icon: "/figma/work/dc717.png" },
      { name: "MongoDB", icon: "/figma/work/42a67.png" },
      { name: "Redis", icon: "/figma/work/16254.png" },
      { name: "Supabase", icon: "/figma/work/65139.png" },
      { name: "Pinecone", icon: "/figma/work/f4960.svg" },
    ],
  },
  {
    title: "Engineering",
    description:
      "Modern development tools and frameworks for fast, reliable product development.",
    items: [
      { name: "Python", icon: "/figma/work/fd9f3.png" },
      { name: "TypeScript", icon: "/figma/work/da113.png" },
      { name: "JavaScript", icon: "/figma/work/f1a73.png" },
      { name: "React", icon: "/figma/work/4e685.png" },
      { name: "Next.js", icon: "/figma/work/329fe.svg" },
      { name: "FastAPI", icon: "/figma/work/1a079.png" },
    ],
  },
];

const deploymentPatterns = [
  {
    title: "Cloud-native Foundations",
    description:
      "We build on AWS, GCP, and Azure with managed services, container orchestration, and secure deployment patterns.",
  },
  {
    title: "LLMs and Custom Models",
    description:
      "From prompt engineering to fine-tuned models, we ship AI systems that are reliable, measurable, and scalable.",
  },
  {
    title: "Observability and Data",
    description:
      "We instrument systems with monitoring, logging, and analytics so every decision is grounded in real-world data.",
  },
] as const;

export function TechStackSection() {
  return (
    <section className="border-b border-[#1c2328] bg-ink px-6 py-16 sm:px-10 sm:py-20 lg:px-20 lg:py-24">
      <div className="mx-auto max-w-[1280px]">
        {/* Header */}
        <div className="mb-14">
          <p className="font-mono text-[10px] font-bold tracking-[1.2px] uppercase text-[#999ea2]">
            TECH WE USE
          </p>
          <h2 className="mt-3 text-[clamp(36px,4vw,48px)] font-bold leading-tight tracking-[-1.5px] text-white">
            The stack we deploy into production.
          </h2>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <p className="mt-4 max-w-[820px] text-[16px] leading-[1.65] text-[#c8c1c5] sm:text-[17px]">
              We have first-class support for a wide range of modern cloud and
              AI frameworks. You can build, fine-tune, and deploy using
              cloud-native foundations, custom LLMs, and full-stack
              observability tooling often without any upfront configuration.
            </p>
            <p className="mt-4 max-w-[820px] text-[16px] leading-[1.65] text-[#c8c1c5] sm:text-[17px]">
              Learn how to{" "}
              <a href="#" className="underline text-white bold">
                get started with our stack
              </a>{" "}
              or explore our production ready patterns, spanning
              infrastructure, AI and Data Engineering below.
            </p>
          </div>
        </div>

        {/* 4 Tech Categories */}
        <div className="flex flex-col gap-6">
          {techCategories.map((category) => (
            <div
              key={category.title}
              className="relative flex flex-col items-start gap-8 rounded-[16px] border border-[#1c2328] p-6 backdrop-blur-sm transition-all duration-300 hover:border-[#384149] sm:p-8 lg:flex-row lg:items-center"
            >
              {/* Category Sidebar Info */}
              <div className="w-full shrink-0 border-b border-[rgba(30,41,59,0.8)] pb-6 lg:w-[320px] lg:border-b-0 lg:border-r lg:pb-0 lg:pr-8">
                <h3 className="text-xl font-bold tracking-[0.45px] text-white">
                  {category.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-[#94a3b8]">
                  {category.description}
                </p>
              </div>

              {/* Logos Grid */}
              <div className="grid flex-1 grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6 sm:gap-4 w-full">
                {category.items.map((tech) => (
                  <div
                    key={tech.name}
                    className="group flex flex-col items-center justify-center rounded-[4px] p-4 text-center transition-all duration-200 hover:border-orange/60 hover:bg-[#1a2329]"
                  >
                    <div className="relative mb-2.5 size-10">
                      <Image
                        src={tech.icon}
                        alt={tech.name}
                        fill
                        className="object-contain filter transition group-hover:brightness-110"
                      />
                    </div>
                    <span className="font-mono text-xs tracking-wide text-[#aeb5b8] transition group-hover:text-white">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DeploymentPatternsSection() {
  return (
    <section className="border-b border-[#1c2328] bg-[#0d0e0f] px-6 py-16 sm:px-10 sm:py-20 lg:px-20 lg:py-24">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-10">
          <p className="font-mono text-[10px] font-bold tracking-[1.2px] uppercase text-[#999ea2]">
            DEPLOYMENT PATTERNS
          </p>
          <h2 className="mt-3 text-[clamp(30px,3.5vw,40px)] font-bold leading-tight tracking-[-1px] text-white">
            Deploy a Stack Pattern
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {deploymentPatterns.map((pattern) => (
            <article key={pattern.title} className="group">
              <div
                className="h-[156px] rounded-[4px] border border-[#293137] bg-[#080b0d] transition-colors duration-200 group-hover:border-[#424a50]"
                aria-hidden="true"
              />
              <h3 className="mt-5 text-sm font-medium text-[#f4f4f1]">
                {pattern.title}
              </h3>
              <p className="mt-2 text-xs leading-[1.65] text-[#aeb5b8]">
                {pattern.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
