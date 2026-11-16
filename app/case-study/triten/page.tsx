import type { Metadata } from "next";

import { JsonLd } from "@/components/json-ld";
import { Contact } from "@/components/contact";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { breadcrumbLd, pageMeta } from "@/lib/seo";
import { TritenCaseStudyPage } from "@/components/triten-case-study-page";

export const metadata: Metadata = pageMeta(
  "Triten Brand Skill Case Study",
  "Triten Brand Skill: a custom Claude skill that applies Triten Real Estate Partners' fonts, colours, logo rules and tone of voice to decks, documents and dashboards. Built by GenAILabs for the client.",
  "/case-study/triten",
);

export default function TritenCaseStudyRoute() {
  return (
    <div className="min-w-[320px] overflow-clip bg-ink">
      <JsonLd data={breadcrumbLd([["Work", "/work"], ["Triten Brand Skill Case Study", "/case-study/triten"]])} />
      <SiteHeader />
      <TritenCaseStudyPage />
      <Contact />
      <SiteFooter />
    </div>
  );
}
