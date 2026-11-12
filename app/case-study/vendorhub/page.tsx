import type { Metadata } from "next";

import { JsonLd } from "@/components/json-ld";
import { Contact } from "@/components/contact";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { breadcrumbLd, pageMeta } from "@/lib/seo";
import { VendorHubCaseStudyPage } from "@/components/vendorhub-case-study-page";

export const metadata: Metadata = pageMeta(
  "Vendor Hub Case Study",
  "Vendor Hub: a mobile app where UAE event organisers and vendors connect, find work and manage events. Designed and built from scratch by GenAILabs, from the client's idea to pre-launch.",
  "/case-study/vendorhub",
);

export default function VendorHubCaseStudyRoute() {
  return (
    <div className="min-w-[320px] overflow-clip bg-ink">
      <JsonLd data={breadcrumbLd([["Work", "/work"], ["Vendor Hub Case Study", "/case-study/vendorhub"]])} />
      <SiteHeader />
      <VendorHubCaseStudyPage />
      <Contact />
      <SiteFooter />
    </div>
  );
}
