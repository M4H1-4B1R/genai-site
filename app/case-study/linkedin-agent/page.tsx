import type { Metadata } from "next";

import { JsonLd } from "@/components/json-ld";
import { Contact } from "@/components/contact";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { breadcrumbLd, pageMeta } from "@/lib/seo";
import { LinkedinAgentCaseStudyPage } from "@/components/linkedin-agent-case-study-page";

export const metadata: Metadata = pageMeta(
  "LinkedIn Connection Agent Case Study",
  "LinkedIn Connection Agent: an n8n workflow that turns a Google Sheet of prospects into rate-limited LinkedIn connection requests. Built by GenAILabs for the client.",
  "/case-study/linkedin-agent",
);

export default function LinkedinAgentCaseStudyRoute() {
  return (
    <div className="min-w-[320px] overflow-clip bg-ink">
      <JsonLd data={breadcrumbLd([["Work", "/work"], ["LinkedIn Connection Agent Case Study", "/case-study/linkedin-agent"]])} />
      <SiteHeader />
      <LinkedinAgentCaseStudyPage />
      <Contact />
      <SiteFooter />
    </div>
  );
}
