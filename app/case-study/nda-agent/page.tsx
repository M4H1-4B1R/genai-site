import type { Metadata } from "next";

import { JsonLd } from "@/components/json-ld";
import { Contact } from "@/components/contact";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { breadcrumbLd, pageMeta } from "@/lib/seo";
import { NdaAgentCaseStudyPage } from "@/components/nda-agent-case-study-page";

export const metadata: Metadata = pageMeta(
  "NDA Analysis Agent Case Study",
  "NDA Analysis Agent: a CrewAI agent that reviews non-disclosure agreements against five weighted criteria and recommends whether to approve, change or deny. Built by GenAILabs for the client.",
  "/case-study/nda-agent",
);

export default function NdaAgentCaseStudyRoute() {
  return (
    <div className="min-w-[320px] overflow-clip bg-ink">
      <JsonLd data={breadcrumbLd([["Work", "/work"], ["NDA Analysis Agent Case Study", "/case-study/nda-agent"]])} />
      <SiteHeader />
      <NdaAgentCaseStudyPage />
      <Contact />
      <SiteFooter />
    </div>
  );
}
