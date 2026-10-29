import type { MetadataRoute } from "next";

import { getPosts } from "@/lib/insights";

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

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
  const posts = getPosts().map((p) => `/insights/${p.slug}`);
  return [...paths, ...posts].map((p) => ({ url: `${siteUrl}${p}` }));
}
