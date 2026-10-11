import { Contact } from "@/components/contact";
import { ForwardDeployedServicesPage } from "@/components/forward-deployed-services-page";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function ForwardDeployedServicesRoute() {
  return (
    <div className="min-w-[320px] overflow-clip bg-ink">
      <SiteHeader />
      <ForwardDeployedServicesPage />
      <Contact />
      <SiteFooter />
    </div>
  );
}
