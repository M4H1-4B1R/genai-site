import type { Metadata } from "next";

import { JsonLd } from "@/components/json-ld";
import { Contact } from "@/components/contact";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { breadcrumbLd, pageMeta } from "@/lib/seo";
import { ChinaVehicleHistoryCaseStudyPage } from "@/components/chinavehiclehistory-case-study-page";

export const metadata: Metadata = pageMeta(
  "China Vehicle History Case Study",
  "China Vehicle History: history reports for cars made in China, with VIN decoding, accident, title, mileage and service records. Built and run in-house with Next.js and Node.js.",
  "/case-study/chinavehiclehistory",
);

export default function ChinaVehicleHistoryCaseStudyRoute() {
  return (
    <div className="min-w-[320px] overflow-clip bg-ink">
      <JsonLd data={breadcrumbLd([["Work", "/work"], ["China Vehicle History Case Study", "/case-study/chinavehiclehistory"]])} />
      <SiteHeader />
      <ChinaVehicleHistoryCaseStudyPage />
      <Contact />
      <SiteFooter />
    </div>
  );
}
