import type { Metadata } from "next";

import { AskDahabCaseStudyPage } from "@/components/askdahab-case-study-page";
import { JsonLd } from "@/components/json-ld";
import { Contact } from "@/components/contact";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { breadcrumbLd, pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta(
  "Ask Dahab Case Study",
  "Ask Dahab: a multilingual travel and booking platform for Dahab, Egypt — 6 languages, ~915 pages, 18 bookable experiences, admin panel, job portal, multilingual search, and Ask Sinai mobile app. Live in production.",
  "/case-study/askdahab",
);

export default function AskDahabCaseStudyRoute() {
  return (
    <div className="min-w-[320px] overflow-clip bg-ink">
      <JsonLd data={breadcrumbLd([["Work", "/work"], ["Ask Dahab Case Study", "/case-study/askdahab"]])} />
      <SiteHeader />
      <AskDahabCaseStudyPage />
      <Contact />
      <SiteFooter />
    </div>
  );
}
