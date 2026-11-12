import type { Metadata } from "next";

import { JsonLd } from "@/components/json-ld";
import { Contact } from "@/components/contact";
import { ProductEngineeringPage } from "@/components/product-engineering-page";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { breadcrumbLd, pageMeta, serviceLd } from "@/lib/seo";

export const metadata: Metadata = pageMeta(
  "AI Product Engineering",
  "Design and build AI-powered products, features, and applications for real users, from new concepts to launched products.",
  "/services/ai-product-engineering",
);

export default function ProductEngineeringRoute() {
  return (
    <div className="min-w-[320px] overflow-clip bg-ink">
      <JsonLd data={breadcrumbLd([["Services", "/services"], ["AI Product Engineering", "/services/ai-product-engineering"]])} />
      <JsonLd data={serviceLd("AI Product Engineering", "Design and build AI-powered products, features, and applications for real users, from new concepts to launched products.", "/services/ai-product-engineering")} />
      <SiteHeader />
      <ProductEngineeringPage />
      <Contact />
      <SiteFooter />
    </div>
  );
}
