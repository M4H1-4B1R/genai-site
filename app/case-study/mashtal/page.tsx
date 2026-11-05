import type { Metadata } from "next";

import { Contact } from "@/components/contact";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { MashtalCaseStudyPage } from "@/components/mashtal-case-study-page";

export const metadata: Metadata = {
  robots: { index: false },
  title: "Mashtal AI Case Study | GenAILabs",
  description:
    "Mashtal AI: an Arabic AI plant doctor that diagnoses from a photo. Flutter app with Gemini 2.5 Flash returning a structured Arabic diagnosis, treatment plan and care schedule. Launching on Google Play.",
};

export default function MashtalCaseStudyRoute() {
  return (
    <div className="min-w-[320px] overflow-clip bg-ink">
      <SiteHeader />
      <MashtalCaseStudyPage />
      <Contact />
      <SiteFooter />
    </div>
  );
}
