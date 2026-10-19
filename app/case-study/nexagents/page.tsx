import type { Metadata } from "next";

import { NexagentsCaseStudyPage } from "@/components/nexagents-case-study-page";
import { Contact } from "@/components/contact";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  robots: { index: false },
  title: "NexAgents Case Study | GenAILabs",
  description:
    "NexAgents: production AI agent platform for teams — per-person model access, agent builder, data stores with spending caps, metered token costs (−74% input tokens). Live in production since 3 Oct 2026.",
};

export default function NexagentsCaseStudyRoute() {
  return (
    <div className="min-w-[320px] overflow-clip bg-ink">
      <SiteHeader />
      <NexagentsCaseStudyPage />
      <Contact />
      <SiteFooter />
    </div>
  );
}
