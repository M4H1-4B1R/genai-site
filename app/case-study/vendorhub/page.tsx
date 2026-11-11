import type { Metadata } from "next";

import { Contact } from "@/components/contact";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { VendorHubCaseStudyPage } from "@/components/vendorhub-case-study-page";

export const metadata: Metadata = {
  robots: { index: false },
  title: "Vendor Hub Case Study | GenAILabs",
  description:
    "Vendor Hub: a mobile app where UAE event organisers and vendors connect, find work and manage events. Designed and built from scratch by GenAILabs, from the client's idea to pre-launch.",
};

export default function VendorHubCaseStudyRoute() {
  return (
    <div className="min-w-[320px] overflow-clip bg-ink">
      <SiteHeader />
      <VendorHubCaseStudyPage />
      <Contact />
      <SiteFooter />
    </div>
  );
}
