import type { MetadataRoute } from "next";

import { getPosts } from "@/lib/insights";

import { siteUrl } from "@/lib/site";

// /case-study (template) and /case-study/dispatch-training are noindex: keep them out.
// Insight posts are appended below.
const paths = [
  "",
  "/services",
  "/services/ai-product-engineering",
  "/services/agentic-layer-engineering",
  "/services/forward-deployed-services",
  "/work",
  "/case-study/askdahab",
  "/case-study/huntora",
  "/case-study/kaya",
  "/case-study/mashtal",
  "/case-study/mingcheji",
  "/case-study/nexagents",
  "/case-study/rennworks",
  "/case-study/rennzone",
  "/case-study/sino360",
  "/case-study/smart-teacher",
  "/case-study/spruceup",
  "/case-study/vendorhub",
  "/about",
  "/insights",
  "/contact",
  "/privacy-policy",
  "/terms-of-use",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = paths.map((p) => ({ url: `${siteUrl}${p}` }));
  const posts = getPosts().map((p) => ({
    url: `${siteUrl}/insights/${p.slug}`,
    lastModified: p.date,
  }));
  return [...pages, ...posts];
}
