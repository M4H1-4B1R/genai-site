import Link from "next/link";

import { FinalCtaSection } from "@/components/shared/final-cta-section";
import { TrendingBanner } from "@/components/shared/trending-banner";
import type { Post, PostSummary } from "@/lib/insights";

const body = "text-[17px] leading-7 text-[#9fa4ab]";
const h2 = "text-[clamp(26px,3vw,32px)] font-bold leading-[1.19] text-[#f2f2f0]";

function ArticleTag({ label, className = "px-3" }: { label: string; className?: string }) {
  return (
    <span
      className={`w-fit rounded-[4px] border border-[#293137] bg-[#0f1417] py-1 font-mono text-[10px] font-bold uppercase tracking-[1px] text-[#ff9800] ${className}`}
    >
      {label}
    </span>
  );
}

export function ArticlePage({
  post,
  related,
}: {
  post: Post;
  related: PostSummary[];
}) {
  return (
    <main className="w-full">
      {/* 1. HEADER */}
      <section className="flex flex-col items-center border-b border-[#1c2328] bg-[#080b0d] px-6 pb-12 pt-16 sm:px-10 lg:px-[120px] lg:pb-16 lg:pt-20">
        <div className="flex w-full max-w-[768px] flex-col items-start gap-6">
          <ArticleTag label={post.topic} />
          <h1 className="text-[clamp(36px,6vw,58px)] font-medium leading-[1.1] tracking-[-1.2px] text-[#f2f2f0]">
            {post.title}
          </h1>
          <p className={body}>{post.summary}</p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[11px] text-[#747d81]">
            <span>GenAI Labs</span>
            <span className="h-3 w-px bg-[#293137]" aria-hidden="true" />
            <span>{post.dateLabel}</span>
            <span className="h-3 w-px bg-[#293137]" aria-hidden="true" />
            <span>{post.readTime}</span>
          </div>
        </div>
      </section>

      {/* 2. ARTICLE BODY */}
      <section className="flex justify-center bg-[#080b0d] px-6 py-12 sm:px-10 lg:px-[120px] lg:py-16">
        <article className="flex w-full max-w-[768px] flex-col gap-6">
          {post.blocks.map((block, i) => {
            if (block.type === "h2") {
              return (
                <h2 key={i} className={`${h2} mt-6`}>
                  {block.text}
                </h2>
              );
            }
            if (block.type === "ul") {
              return (
                <ul key={i} className={`${body} list-disc space-y-3 pl-6 marker:text-[#ff9800]`}>
                  {block.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={i} className={body}>
                {block.text}
              </p>
            );
          })}

          <div className="mt-6 flex flex-col gap-5 border-y border-[#1c2328] py-8">
            <div className="flex items-center gap-4">
              <span className="flex size-14 shrink-0 items-center justify-center rounded-[28px] border border-[#293137] bg-[#0f1417] font-mono text-[11px] text-[#747d81]">
                GL
              </span>
              <div className="flex flex-col gap-1">
                <p className="text-[15px] font-bold text-[#f2f2f0]">GenAI Labs</p>
                <p className="text-[13px] text-[#747d81]">
                  AI product and agentic systems engineering
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
                Keep reading.
              </h2>
            </div>
            <Link
              href="/insights"
              className="text-[13px] font-bold text-[#ff9800] hover:underline"
            >
              All insights →
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {related.map((item) => (
              <article
                key={item.slug}
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
                    {item.dateLabel} · {item.readTime}
                  </span>
                  <Link
                    href={`/insights/${item.slug}`}
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
