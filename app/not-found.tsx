import type { Metadata } from "next";

import { NotFoundPage } from "@/components/not-found-page";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Page not found | GenAILabs",
};

export default function NotFound() {
  return (
    <div className="min-w-[320px] overflow-clip bg-ink">
      <SiteHeader />
      <NotFoundPage />
      <SiteFooter />
    </div>
  );
}
