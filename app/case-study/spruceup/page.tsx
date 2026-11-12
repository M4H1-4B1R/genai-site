import type { Metadata } from "next";

import { JsonLd } from "@/components/json-ld";
import { Contact } from "@/components/contact";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { breadcrumbLd, pageMeta } from "@/lib/seo";
import { SpruceUpCaseStudyPage } from "@/components/spruceup-case-study-page";

export const metadata: Metadata = pageMeta(
  "SpruceUp Case Study",
  "SpruceUp: find reliable cleaners in Ireland. A custom Sharetribe Extend marketplace with automatic commission payments and document-based identity verification, delivered end to end.",
  "/case-study/spruceup",
);

export default function SpruceUpCaseStudyRoute() {
  return (
    <div className="min-w-[320px] overflow-clip bg-ink">
      <JsonLd data={breadcrumbLd([["Work", "/work"], ["SpruceUp Case Study", "/case-study/spruceup"]])} />
      <SiteHeader />
      <SpruceUpCaseStudyPage />
      <Contact />
      <SiteFooter />
    </div>
  );
}
