import type { Metadata } from "next";

import { KayaCaseStudyPage } from "@/components/kaya-case-study-page";
import { Contact } from "@/components/contact";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  robots: { index: false },
  title: "Kaya Functional Health Case Study | GenAILabs",
  description:
    "Kaya: an AI functional medicine health coach live on the App Store and Google Play — Flutter app, FastAPI backend, real-time LLM streaming, and structured health journeys.",
};

export default function KayaCaseStudyRoute() {
  return (
    <div className="min-w-[320px] overflow-clip bg-ink">
      <SiteHeader />
      <KayaCaseStudyPage />
      <Contact />
      <SiteFooter />
    </div>
  );
}
