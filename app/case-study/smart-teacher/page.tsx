import type { Metadata } from "next";

import { Contact } from "@/components/contact";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SmartTeacherCaseStudyPage } from "@/components/smart-teacher-case-study-page";

export const metadata: Metadata = {
  robots: { index: false },
  title: "Smart Teacher Case Study | GenAILabs",
  description:
    "Smart Teacher: an Arabic AI tutor that explains homework from a photo. Flutter app on iOS and Android with Gemini 2.5 Flash, an AI teacher chat, lessons and a quiz mode. Live on the App Store and Google Play.",
};

export default function SmartTeacherCaseStudyRoute() {
  return (
    <div className="min-w-[320px] overflow-clip bg-ink">
      <SiteHeader />
      <SmartTeacherCaseStudyPage />
      <Contact />
      <SiteFooter />
    </div>
  );
}
