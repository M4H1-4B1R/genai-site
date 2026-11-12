import type { Metadata } from "next";

import { KayaCaseStudyPage } from "@/components/kaya-case-study-page";
import { JsonLd } from "@/components/json-ld";
import { Contact } from "@/components/contact";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { breadcrumbLd, pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta(
  "Kaya Functional Health Case Study",
  "Kaya: an AI functional medicine health coach live on the App Store and Google Play — Flutter app, FastAPI backend, real-time LLM streaming, and structured health journeys.",
  "/case-study/kaya",
);

export default function KayaCaseStudyRoute() {
  return (
    <div className="min-w-[320px] overflow-clip bg-ink">
      <JsonLd data={breadcrumbLd([["Work", "/work"], ["Kaya Functional Health Case Study", "/case-study/kaya"]])} />
      <SiteHeader />
      <KayaCaseStudyPage />
      <Contact />
      <SiteFooter />
    </div>
  );
}
