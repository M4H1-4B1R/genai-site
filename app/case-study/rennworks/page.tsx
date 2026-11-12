import type { Metadata } from "next";

import { JsonLd } from "@/components/json-ld";
import { Contact } from "@/components/contact";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { breadcrumbLd, pageMeta } from "@/lib/seo";
import { RennworksCaseStudyPage } from "@/components/rennworks-case-study-page";

export const metadata: Metadata = pageMeta(
  "Rennworks Case Study",
  "Rennworks: Porsche and McLaren care done right. A fully custom WordPress site with service documentation and a WhatsApp widget, delivered end to end and live for almost a year.",
  "/case-study/rennworks",
);

export default function RennworksCaseStudyRoute() {
  return (
    <div className="min-w-[320px] overflow-clip bg-ink">
      <JsonLd data={breadcrumbLd([["Work", "/work"], ["Rennworks Case Study", "/case-study/rennworks"]])} />
      <SiteHeader />
      <RennworksCaseStudyPage />
      <Contact />
      <SiteFooter />
    </div>
  );
}
