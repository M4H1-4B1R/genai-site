import type { Metadata } from "next";

import { JsonLd } from "@/components/json-ld";
import { Contact } from "@/components/contact";
import { ForwardDeployedServicesPage } from "@/components/forward-deployed-services-page";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { breadcrumbLd, pageMeta, serviceLd } from "@/lib/seo";

export const metadata: Metadata = pageMeta(
  "Forward-Deployed AI Services",
  "Integrate, deploy, and adapt AI inside the workflows, software, and data where your business runs.",
  "/services/forward-deployed-services",
);

export default function ForwardDeployedServicesRoute() {
  return (
    <div className="min-w-[320px] overflow-clip bg-ink">
      <JsonLd data={breadcrumbLd([["Services", "/services"], ["Forward-Deployed AI Services", "/services/forward-deployed-services"]])} />
      <JsonLd data={serviceLd("Forward-Deployed AI Services", "Integrate, deploy, and adapt AI inside the workflows, software, and data where your business runs.", "/services/forward-deployed-services")} />
      <SiteHeader />
      <ForwardDeployedServicesPage />
      <Contact />
      <SiteFooter />
    </div>
  );
}
