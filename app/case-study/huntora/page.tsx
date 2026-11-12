import type { Metadata } from "next";

import { Contact } from "@/components/contact";
import { HuntoraCaseStudyPage } from "@/components/huntora-case-study-page";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  robots: { index: false },
  title: "Huntora Case Study | GenAILabs",
  description:
    "Huntora: lead discovery, email outreach and blog automation in one workspace, with human review before publishing. Built with Next.js, MongoDB, MCP and Groq.",
};

export default function HuntoraCaseStudyRoute() {
  return (
    <div className="min-w-[320px] overflow-clip bg-ink">
      <SiteHeader />
      <HuntoraCaseStudyPage />
      <Contact />
      <SiteFooter />
    </div>
  );
}
