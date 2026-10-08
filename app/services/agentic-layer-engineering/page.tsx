import { AgenticLayerEngineeringPage } from "@/components/agentic-layer-engineering-page";
import { Contact } from "@/components/contact";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function AgenticLayerEngineeringRoute() {
  return (
    <div className="min-w-[320px] overflow-clip bg-ink">
      <SiteHeader />
      <AgenticLayerEngineeringPage />
      <Contact />
      <SiteFooter />
    </div>
  );
}
