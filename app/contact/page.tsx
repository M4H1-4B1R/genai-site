import type { Metadata } from "next";

import { Contact } from "@/components/contact";
import { ContactChannels } from "@/components/contact-channels";
import { ContactLocation } from "@/components/contact-location";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Contact | GenAILabs",
  description:
    "Talk to our team. Tell us about your project, or reach the Amman studio directly by phone or email.",
};

export default function ContactRoute() {
  return (
    <div className="min-w-[320px] overflow-clip bg-ink">
      <SiteHeader />
      <Contact />
      <ContactChannels />
      <ContactLocation />
      <SiteFooter />
    </div>
  );
}
