import type { Metadata } from "next";

import { siteUrl } from "@/lib/site";

// Pages set their own openGraph/twitter: Next merges metadata shallowly, so otherwise
// they would inherit the homepage's og:title/og:url from app/layout.tsx.
export function pageMeta(title: string, description: string, path: string): Metadata {
  const full = `${title} | GenAILabs`;
  return {
    title: full,
    description,
    alternates: { canonical: path },
    openGraph: { title: full, description, url: path, siteName: "GenAILabs", type: "website", locale: "en_US" },
    twitter: { card: "summary_large_image", title: full, description },
  };
}

const absolute = (path: string) => `${siteUrl}${path}`;

export function breadcrumbLd(trail: [name: string, path: string][]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [["Home", ""] as [string, string], ...trail].map(([name, path], i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
      item: absolute(path),
    })),
  };
}

export function serviceLd(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: absolute(path),
    serviceType: name,
    provider: { "@id": `${siteUrl}/#organization` },
  };
}
