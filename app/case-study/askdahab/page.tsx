import type { Metadata } from "next";

import { AskDahabCaseStudyPage } from "@/components/askdahab-case-study-page";
import { Contact } from "@/components/contact";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  robots: { index: false },
  title: "Ask Dahab Case Study | GenAILabs",
  description:
    "Ask Dahab: a multilingual travel and booking platform for Dahab, Egypt — 6 languages, ~915 pages, 18 bookable experiences, admin panel, job portal, multilingual search, and Ask Sinai mobile app. Live in production.",
};

export default function AskDahabCaseStudyRoute() {
  return (
    <div className="min-w-[320px] overflow-clip bg-ink">
      <SiteHeader />
      <AskDahabCaseStudyPage />
      <Contact />
      <SiteFooter />
    </div>
  );
}
