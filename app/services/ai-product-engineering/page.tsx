import type { Metadata } from "next";

import { Contact } from "@/components/contact";
import { ProductEngineeringPage } from "@/components/product-engineering-page";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "AI Product Engineering | GenAILabs",
  description:
    "Design and build AI-powered products, features, and applications for real users, from new concepts to launched products.",
};

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
