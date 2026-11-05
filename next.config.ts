import type { NextConfig } from "next";

import { redirects } from "./lib/redirects";

const nextConfig: NextConfig = {
  // 75 is the default for site images; 90 is for text-heavy blog posters.
  images: { qualities: [75, 90] },
  redirects: async () => redirects,
  headers: async () => [
    {
      source: "/:path*",
      headers: [
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      ],
    },
    // Keep preview/staging hosts out of the index; production host is untouched.
    {
      source: "/:path*",
      has: [{ type: "host", value: ".*\\.vercel\\.app" }],
      headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
    },
  ],
};

export default nextConfig;
