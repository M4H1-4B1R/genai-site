import type { Metadata } from "next";

import { JsonLd } from "@/components/json-ld";
import { Contact } from "@/components/contact";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { breadcrumbLd, pageMeta } from "@/lib/seo";
import { RennzoneCaseStudyPage } from "@/components/rennzone-case-study-page";

export const metadata: Metadata = pageMeta(
  "Rennzone Case Study",
  "Rennzone: the global Porsche marketplace. A fully custom Sharetribe Extend build with payments, Porsche car listings and a blog, delivered end to end and live for over a year.",
  "/case-study/rennzone",
);

export default function RennzoneCaseStudyRoute() {
  return (
    <div className="min-w-[320px] overflow-clip bg-ink">
      <JsonLd data={breadcrumbLd([["Work", "/work"], ["Rennzone Case Study", "/case-study/rennzone"]])} />
      <SiteHeader />
      <RennzoneCaseStudyPage />
      <Contact />
      <SiteFooter />
    </div>
  );
}
