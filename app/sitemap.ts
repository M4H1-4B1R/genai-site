import type { MetadataRoute } from "next";

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

// case-study and insights/article are noindex placeholders: keep them out.
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
  return paths.map((p) => ({ url: `${siteUrl}${p}` }));
}
