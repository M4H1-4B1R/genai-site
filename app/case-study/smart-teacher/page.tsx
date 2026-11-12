import type { Metadata } from "next";

import { JsonLd } from "@/components/json-ld";
import { Contact } from "@/components/contact";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { breadcrumbLd, pageMeta } from "@/lib/seo";
import { SmartTeacherCaseStudyPage } from "@/components/smart-teacher-case-study-page";

export const metadata: Metadata = pageMeta(
  "Smart Teacher Case Study",
  "Smart Teacher: an Arabic AI tutor that explains homework from a photo. Flutter app on iOS and Android with Gemini 2.5 Flash, an AI teacher chat, lessons and a quiz mode. Live on the App Store and Google Play.",
  "/case-study/smart-teacher",
);

export default function SmartTeacherCaseStudyRoute() {
  return (
    <div className="min-w-[320px] overflow-clip bg-ink">
      <JsonLd data={breadcrumbLd([["Work", "/work"], ["Smart Teacher Case Study", "/case-study/smart-teacher"]])} />
      <SiteHeader />
      <SmartTeacherCaseStudyPage />
      <Contact />
      <SiteFooter />
    </div>
  );
}
