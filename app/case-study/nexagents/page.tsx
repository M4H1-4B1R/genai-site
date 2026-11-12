import type { Metadata } from "next";

import { NexagentsCaseStudyPage } from "@/components/nexagents-case-study-page";
import { JsonLd } from "@/components/json-ld";
import { Contact } from "@/components/contact";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { breadcrumbLd, pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta(
  "NexAgents Case Study",
  "NexAgents: production AI agent platform for teams — per-person model access, agent builder, data stores with spending caps, metered token costs (−74% input tokens). Live in production since 3 Oct 2026.",
  "/case-study/nexagents",
);

export default function NexagentsCaseStudyRoute() {
  return (
    <div className="min-w-[320px] overflow-clip bg-ink">
      <JsonLd data={breadcrumbLd([["Work", "/work"], ["NexAgents Case Study", "/case-study/nexagents"]])} />
      <SiteHeader />
      <NexagentsCaseStudyPage />
      <Contact />
      <SiteFooter />
    </div>
  );
}
