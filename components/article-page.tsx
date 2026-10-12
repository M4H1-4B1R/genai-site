import Link from "next/link";

import { FinalCtaSection } from "@/components/shared/final-cta-section";
import { TrendingBanner } from "@/components/shared/trending-banner";

const bodyCopy =
  "[Article body copy. Keep the reading column narrow and comfortable. The template supports H2/H3 hierarchy, links, lists, figures, captions, callouts, and technical content without turning the article into a sales page.]";

const related = [1, 2, 3].map((id) => ({
  id,
  topic: "[TOPIC]",
  title: "[Article Title]",
  summary: "[Short summary. Imagery is optional; typography can carry the card.]",
  meta: "[Date] · [Read time]",
}));

const eyebrow =
  "font-mono text-[10px] font-bold tracking-[1.2px] text-[#999ea2]";
const body = "text-[17px] leading-7 text-[#9fa4ab]";
const h2 = "text-[clamp(26px,3vw,32px)] font-bold leading-[1.19] text-[#f2f2f0]";
const visualBox =
  "flex items-center justify-center overflow-clip rounded-[8px] border border-[#293137] bg-[#0f1417]";

function ArticleTag({ label, className = "px-3" }: { label: string; className?: string }) {
  return (
    <span
      className={`w-fit rounded-[4px] border border-[#293137] bg-[#0f1417] py-1 font-mono text-[10px] font-bold uppercase tracking-[1px] text-[#ff9800] ${className}`}
    >
      {label}
    </span>
  );
}

function Section({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="flex flex-col gap-5">
      <p className={eyebrow}>{kicker}</p>
      <h2 className={h2}>{title}</h2>
      <p className={body}>{bodyCopy}</p>
      <p className={body}>{bodyCopy}</p>
    </div>
  );
}

export function ArticlePage() {
  return (
    <main className="w-full">
      {/* 1. HEADER + HERO VISUAL */}
      <section className="flex flex-col items-center gap-8 border-b border-[#1c2328] bg-[#080b0d] px-6 pb-12 pt-16 sm:px-10 lg:px-[120px] lg:pb-16 lg:pt-20">
        <div className="flex w-full max-w-[768px] flex-col items-start gap-6">
          <ArticleTag label="Agentic AI" />
          <h1 className="text-[clamp(36px,6vw,58px)] font-medium leading-[1.1] tracking-[-1.2px] text-[#f2f2f0]">
            [Article Title]
          </h1>
          <p className={body}>
            [Short article deck explaining why the piece matters and what the
            reader will learn.]
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[11px] text-[#747d81]">
            <span>[Author]</span>
            <span className="h-3 w-px bg-[#293137]" aria-hidden="true" />
            <span>[Published date]</span>
            <span className="h-3 w-px bg-[#293137]" aria-hidden="true" />
            <span>[Read time]</span>
          </div>
        </div>
        <div
          className={`${visualBox} h-[220px] w-full max-w-[1200px] flex-col gap-3 shadow-[0_18px_40px_-12px_rgba(0,0,0,0.25)] sm:h-[320px] lg:h-[400px]`}
        >
          <p className="font-mono text-[10px] font-bold uppercase tracking-[1px] text-[#ff9800]">
            Article hero visual
          </p>
          <p className="px-4 text-center text-sm text-[#747d81]">
            Replace with article cover image or diagram
          </p>
        </div>
      </section>

      {/* 2. ARTICLE BODY */}
      <section className="flex justify-center bg-[#080b0d] px-6 py-12 sm:px-10 lg:px-[120px] lg:py-16">
        <article className="flex w-full max-w-[768px] flex-col gap-12">
          <div className="flex flex-col gap-5">
            <p className={eyebrow}>INTRODUCTION</p>
            <h2 className={h2}>Introduction</h2>
            <p className={body}>{bodyCopy}</p>
            <p className={body}>{bodyCopy}</p>
            <p className={body}>{bodyCopy}</p>
          </div>

          <figure className="flex flex-col gap-3">
            <div
              className={`${visualBox} h-[240px] shadow-[0_4px_6px_-4px_rgba(0,0,0,0.1)] sm:h-[420px]`}
            >
              <span className="px-4 text-center font-mono text-[10px] font-bold uppercase tracking-[1px] text-[#747d81]">
                Wide diagram / screenshot / data visual
              </span>
            </div>
            <figcaption className="text-[13px] text-[#747d81]">
              Figure caption — explain what the reader should notice.
            </figcaption>
          </figure>

          <Section kicker="CONTEXT" title="H2 — Major Section" />

          <aside className="flex flex-col gap-3 rounded-[4px] border-l-2 border-[#ff9800] bg-[#0f1417] p-6 shadow-[0_0_12px_rgba(255,152,0,0.13)] sm:p-8">
            <div className="flex items-center gap-2.5">
              <span className="size-1.5 rounded-full bg-[#ff9800]" aria-hidden="true" />
              <p className="font-mono text-[10px] font-bold uppercase tracking-[1px] text-[#ff9800]">
                Key idea
              </p>
            </div>
            <p className="text-xl font-medium text-[#f2f2f0]">
              [Important concept worth pulling out.]
            </p>
          </aside>

          <Section kicker="ANALYSIS" title="H2 — Another Section" />

          <div className="flex flex-col gap-5">
            <h3 className="text-2xl font-bold leading-[30px] text-[#f2f2f0]">
              H3 — Technical Example
            </h3>
            <div className="overflow-clip rounded-[8px] border border-[#293137] bg-[#080b0d] shadow-[0_18px_40px_-12px_rgba(0,0,0,0.25)]">
              <div className="flex h-11 items-center justify-between gap-3 border-b border-[#1c2328] bg-[#14161a] px-4">
                <div className="flex gap-[7px]" aria-hidden="true">
                  <span className="size-2 rounded-full bg-[#ff6b5e]" />
                  <span className="size-2 rounded-full bg-[#f4c575]" />
                  <span className="size-2 rounded-full bg-[#52c28b]" />
                </div>
                <span className="font-mono text-[10px] text-[#747d81] max-[480px]:hidden">
                  CODE / CONFIGURATION
                </span>
                <span className="rounded-full border border-[#293137] px-2.5 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.5px] text-[#9fa4ab]">
                  TypeScript
                </span>
              </div>
              <pre className="overflow-x-auto p-6 font-mono text-[13px] leading-[1.6] text-[#9fa4ab]">
                [technical example]
              </pre>
            </div>
          </div>

          <div className="flex flex-col gap-5 border-y border-[#1c2328] py-8">
            <h3 className="text-2xl font-bold leading-[30px] text-[#f2f2f0]">
              Author or publication context.
            </h3>
            <div className="flex items-center gap-4">
              <span className="flex size-14 shrink-0 items-center justify-center rounded-[28px] border border-[#293137] bg-[#0f1417] font-mono text-[9px] text-[#747d81]">
                AV
              </span>
              <div className="flex flex-col gap-1">
                <p className="text-[15px] font-bold text-[#f2f2f0]">
                  [Author / GenAI Labs]
                </p>
                <p className="text-[13px] text-[#747d81]">
                  [Role / relevant expertise]
                </p>
              </div>
            </div>
          </div>
        </article>
      </section>

      {/* 3. TRENDING BANNER */}
      <TrendingBanner />

      {/* 4. RELATED INSIGHTS */}
      <section className="flex flex-col gap-8 border-y border-[#1c2328] bg-[#0d0e0f] px-6 py-12 sm:px-10 lg:px-[120px] lg:py-16">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-8">
          <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
            <div className="flex flex-col gap-2">
              <p className="font-mono text-[11px] font-bold tracking-[1.2px] text-[#999ea2]">
                RELATED INSIGHTS
              </p>
              <h2 className="text-2xl font-bold leading-[30px] text-[#f2f2f0]">
                Explore parallel implementations.
              </h2>
            </div>
            <p className="text-[13px] text-[#9fa4ab]">
              Explore parallel high-throughput production implementations.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {related.map((item) => (
              <article
                key={item.id}
                className="group flex min-h-[260px] flex-col gap-5 rounded-[8px] border border-[#293137] bg-[#0f1417] p-6 shadow-[0_4px_6px_-4px_rgba(0,0,0,0.1)] transition-colors duration-200 hover:border-[#424a50]"
              >
                <ArticleTag label={item.topic} className="px-2.5" />
                <div className="flex flex-col gap-3">
                  <h3 className="text-[18px] font-bold leading-6 text-[#f2f2f0]">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-[22px] text-[#9fa4ab]">
                    {item.summary}
                  </p>
                </div>
                <div className="mt-auto flex items-center justify-between gap-4 max-[640px]:flex-col max-[640px]:items-start max-[640px]:gap-2">
                  <span className="font-mono text-[10px] text-[#747d81]">
                    {item.meta}
                  </span>
                  <Link
                    href="/insights/article"
                    className="text-[13px] font-bold text-[#ff9800] transition-transform duration-200 group-hover:translate-x-0.5"
                  >
                    Read Article →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FINAL CTA */}
      <FinalCtaSection />
    </main>
  );
}
