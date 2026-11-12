import type { Metadata } from "next";

import { MingchejiCaseStudyPage } from "@/components/mingcheji-case-study-page";
import { JsonLd } from "@/components/json-ld";
import { Contact } from "@/components/contact";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { breadcrumbLd, pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta(
  "Mingcheji Case Study",
  "Mingcheji: a global car-history and parts platform for buyers outside China — six languages, USD pricing, piloted on a preview site.",
  "/case-study/mingcheji",
);

export default function MingchejiCaseStudyRoute() {
  return (
    <div className="min-w-[320px] overflow-clip bg-ink">
      <JsonLd data={breadcrumbLd([["Work", "/work"], ["Mingcheji Case Study", "/case-study/mingcheji"]])} />
      <SiteHeader />
      <MingchejiCaseStudyPage />
      <Contact />
      <SiteFooter />
    </div>
  );
}
