import type { Metadata } from "next";

import { Contact } from "@/components/contact";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SpruceUpCaseStudyPage } from "@/components/spruceup-case-study-page";

export const metadata: Metadata = {
  robots: { index: false },
  title: "SpruceUp Case Study | GenAILabs",
  description:
    "SpruceUp: find reliable cleaners in Ireland. A custom Sharetribe Extend marketplace with automatic commission payments and document-based identity verification, delivered end to end.",
};

export default function SpruceUpCaseStudyRoute() {
  return (
    <div className="min-w-[320px] overflow-clip bg-ink">
      <SiteHeader />
      <SpruceUpCaseStudyPage />
      <Contact />
      <SiteFooter />
    </div>
  );
}
