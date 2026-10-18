import type { Metadata } from "next";

import { ArticlePage } from "@/components/article-page";
import { Contact } from "@/components/contact";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  robots: { index: false },
  title: "Article | GenAILabs",
  description:
    "Practical thinking on AI products, agentic systems, implementation, and real-world use.",
};

export default function ArticleRoute() {
  return (
    <div className="min-w-[320px] overflow-clip bg-ink">
      <SiteHeader />
      <ArticlePage />
      <Contact />
      <SiteFooter />
    </div>
  );
}
