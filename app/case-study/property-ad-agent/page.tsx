import type { Metadata } from "next";

import { JsonLd } from "@/components/json-ld";
import { Contact } from "@/components/contact";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { breadcrumbLd, pageMeta } from "@/lib/seo";
import { PropertyAdAgentCaseStudyPage } from "@/components/property-ad-agent-case-study-page";

export const metadata: Metadata = pageMeta(
  "Property Ad Agent Case Study",
  "Property Ad Agent: an OpenAI agent that writes unique, rule-checked ads for property listings and saves them to Airtable. Built by GenAILabs for the client.",
  "/case-study/property-ad-agent",
);

export default function PropertyAdAgentCaseStudyRoute() {
  return (
    <div className="min-w-[320px] overflow-clip bg-ink">
      <JsonLd data={breadcrumbLd([["Work", "/work"], ["Property Ad Agent Case Study", "/case-study/property-ad-agent"]])} />
      <SiteHeader />
      <PropertyAdAgentCaseStudyPage />
      <Contact />
      <SiteFooter />
    </div>
  );
}
