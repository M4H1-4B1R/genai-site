import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 75 is the default for site images; 90 is for text-heavy blog posters.
  images: { qualities: [75, 90] },
};

export default nextConfig;
