import { Contact } from "@/components/contact";
import { ProductEngineeringPage } from "@/components/product-engineering-page";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

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
