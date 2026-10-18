import type { Metadata } from "next";

import { CaseStudyPage } from "@/components/case-study-page";
import { Contact } from "@/components/contact";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  robots: { index: false },
  title: "Case Study | GenAILabs",
  description:
    "Verified production case study: the challenge, our contributions, system design, and audited outcomes.",
};

export default function CaseStudyRoute() {
  return (
    <div className="min-w-[320px] overflow-clip bg-ink">
      <SiteHeader />
      <CaseStudyPage />
      <Contact />
      <SiteFooter />
    </div>
  );
}
