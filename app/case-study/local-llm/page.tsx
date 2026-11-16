import type { Metadata } from "next";

import { JsonLd } from "@/components/json-ld";
import { Contact } from "@/components/contact";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { breadcrumbLd, pageMeta } from "@/lib/seo";
import { LocalLlmCaseStudyPage } from "@/components/local-llm-case-study-page";

export const metadata: Metadata = pageMeta(
  "Local LLM Proof of Concept Case Study",
  "Local LLM Proof of Concept: a document question-and-answer system that runs entirely on local infrastructure, so no documents leave the building. Built by GenAILabs for the client.",
  "/case-study/local-llm",
);

export default function LocalLlmCaseStudyRoute() {
  return (
    <div className="min-w-[320px] overflow-clip bg-ink">
      <JsonLd data={breadcrumbLd([["Work", "/work"], ["Local LLM Proof of Concept Case Study", "/case-study/local-llm"]])} />
      <SiteHeader />
      <LocalLlmCaseStudyPage />
      <Contact />
      <SiteFooter />
    </div>
  );
}
