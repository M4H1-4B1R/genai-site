import type { Metadata } from "next";

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
