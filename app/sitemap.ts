import type { MetadataRoute } from "next";

import { getPosts } from "@/lib/insights";

import { siteUrl } from "@/lib/site";

// case-study is a noindex placeholder: keep it out. Insight posts are appended below.
const paths = [
  "",
  "/services",
  "/services/ai-product-engineering",
  "/services/agentic-layer-engineering",
  "/services/forward-deployed-services",
  "/work",
  "/about",
  "/insights",
  "/contact",
  "/privacy-policy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = paths.map((p) => ({ url: `${siteUrl}${p}` }));
  const posts = getPosts().map((p) => ({
    url: `${siteUrl}/insights/${p.slug}`,
    lastModified: p.date,
  }));
  return [...pages, ...posts];
}
