import type { Metadata } from "next";

import { JsonLd } from "@/components/json-ld";
import { Contact } from "@/components/contact";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { breadcrumbLd, pageMeta } from "@/lib/seo";
import { Sino360CaseStudyPage } from "@/components/sino360-case-study-page";

export const metadata: Metadata = pageMeta(
  "Sino 360 Case Study",
  "Sino 360: a Flutter app that decodes Chinese-market VINs into specs, accident and title history, and mileage verification, in five languages. Live on Google Play.",
  "/case-study/sino360",
);

export default function Sino360CaseStudyRoute() {
  return (
    <div className="min-w-[320px] overflow-clip bg-ink">
      <JsonLd data={breadcrumbLd([["Work", "/work"], ["Sino 360 Case Study", "/case-study/sino360"]])} />
      <SiteHeader />
      <Sino360CaseStudyPage />
      <Contact />
      <SiteFooter />
    </div>
  );
}
