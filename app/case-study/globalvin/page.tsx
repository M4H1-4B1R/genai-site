import type { Metadata } from "next";

import { JsonLd } from "@/components/json-ld";
import { Contact } from "@/components/contact";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { breadcrumbLd, pageMeta } from "@/lib/seo";
import { GlobalVinCaseStudyPage } from "@/components/globalvin-case-study-page";

export const metadata: Metadata = pageMeta(
  "GlobalVIN Case Study",
  "GlobalVIN: an API-first vehicle history platform with a web dashboard, full reports and white-label sites, covering 150+ countries. Built and run in-house with Next.js and Node.js.",
  "/case-study/globalvin",
);

export default function GlobalVinCaseStudyRoute() {
  return (
    <div className="min-w-[320px] overflow-clip bg-ink">
      <JsonLd data={breadcrumbLd([["Work", "/work"], ["GlobalVIN Case Study", "/case-study/globalvin"]])} />
      <SiteHeader />
      <GlobalVinCaseStudyPage />
      <Contact />
      <SiteFooter />
    </div>
  );
}
