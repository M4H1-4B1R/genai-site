import type { Metadata } from "next";

import { Contact } from "@/components/contact";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Sino360CaseStudyPage } from "@/components/sino360-case-study-page";

export const metadata: Metadata = {
  robots: { index: false },
  title: "Sino 360 Case Study | GenAILabs",
  description:
    "Sino 360: a Flutter app that decodes Chinese-market VINs into specs, accident and title history, and mileage verification, in five languages. Live on Google Play.",
};

export default function Sino360CaseStudyRoute() {
  return (
    <div className="min-w-[320px] overflow-clip bg-ink">
      <SiteHeader />
      <Sino360CaseStudyPage />
      <Contact />
      <SiteFooter />
    </div>
  );
}
