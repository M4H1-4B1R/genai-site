import type { Metadata } from "next";

import { JsonLd } from "@/components/json-ld";
import { Contact } from "@/components/contact";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { breadcrumbLd, pageMeta } from "@/lib/seo";
import { MashtalCaseStudyPage } from "@/components/mashtal-case-study-page";

export const metadata: Metadata = pageMeta(
  "Mashtal AI Case Study",
  "Mashtal AI: an Arabic AI plant doctor that diagnoses from a photo. Flutter app with Gemini 2.5 Flash returning a structured Arabic diagnosis, treatment plan and care schedule. Launching on Google Play.",
  "/case-study/mashtal",
);

export default function MashtalCaseStudyRoute() {
  return (
    <div className="min-w-[320px] overflow-clip bg-ink">
      <JsonLd data={breadcrumbLd([["Work", "/work"], ["Mashtal AI Case Study", "/case-study/mashtal"]])} />
      <SiteHeader />
      <MashtalCaseStudyPage />
      <Contact />
      <SiteFooter />
    </div>
  );
}
