import type { Metadata } from "next";

import { JsonLd } from "@/components/json-ld";
import { Contact } from "@/components/contact";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { breadcrumbLd, pageMeta } from "@/lib/seo";
import { SproutCaseStudyPage } from "@/components/sprout-case-study-page";

export const metadata: Metadata = pageMeta(
  "Sprout Coaching App Case Study",
  "Sprout Coaching App: an AI coach that follows its coaching method, one question at a time, released on iOS and Android. Built by GenAILabs for the client.",
  "/case-study/sprout",
);

export default function SproutCaseStudyRoute() {
  return (
    <div className="min-w-[320px] overflow-clip bg-ink">
      <JsonLd data={breadcrumbLd([["Work", "/work"], ["Sprout Coaching App Case Study", "/case-study/sprout"]])} />
      <SiteHeader />
      <SproutCaseStudyPage />
      <Contact />
      <SiteFooter />
    </div>
  );
}
