import type { Metadata } from "next";

import { JsonLd } from "@/components/json-ld";
import { Contact } from "@/components/contact";
import { HuntoraCaseStudyPage } from "@/components/huntora-case-study-page";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { breadcrumbLd, pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta(
  "Huntora Case Study",
  "Huntora: lead discovery, email outreach and blog automation in one workspace, with human review before publishing. Built with Next.js, MongoDB, MCP and Groq.",
  "/case-study/huntora",
);

export default function HuntoraCaseStudyRoute() {
  return (
    <div className="min-w-[320px] overflow-clip bg-ink">
      <JsonLd data={breadcrumbLd([["Work", "/work"], ["Huntora Case Study", "/case-study/huntora"]])} />
      <SiteHeader />
      <HuntoraCaseStudyPage />
      <Contact />
      <SiteFooter />
    </div>
  );
}
