import type { Metadata } from "next";

import { JsonLd } from "@/components/json-ld";
import { Contact } from "@/components/contact";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { breadcrumbLd, pageMeta } from "@/lib/seo";
import { AskSinaiCaseStudyPage } from "@/components/asksinai-case-study-page";

export const metadata: Metadata = pageMeta(
  "Ask Sinai Case Study",
  "Ask Sinai: a bilingual iOS and Android app for rides by road or water, local discovery and tourism services in Dahab, with tools for drivers, businesses and operations. Built by GenAILabs with Flutter and Firebase.",
  "/case-study/asksinai",
);

export default function AskSinaiCaseStudyRoute() {
  return (
    <div className="min-w-[320px] overflow-clip bg-ink">
      <JsonLd data={breadcrumbLd([["Work", "/work"], ["Ask Sinai Case Study", "/case-study/asksinai"]])} />
      <SiteHeader />
      <AskSinaiCaseStudyPage />
      <Contact />
      <SiteFooter />
    </div>
  );
}
