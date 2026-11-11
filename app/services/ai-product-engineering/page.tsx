import type { Metadata } from "next";

import { Contact } from "@/components/contact";
import { ProductEngineeringPage } from "@/components/product-engineering-page";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta(
  "AI Product Engineering",
  "Design and build AI-powered products, features, and applications for real users, from new concepts to launched products.",
  "/services/ai-product-engineering",
);

export default function ProductEngineeringRoute() {
  return (
    <div className="min-w-[320px] overflow-clip bg-ink">
      <SiteHeader />
      <ProductEngineeringPage />
      <Contact />
      <SiteFooter />
    </div>
  );
}
