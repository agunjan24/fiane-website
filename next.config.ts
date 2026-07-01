import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    // Facebook & Instagram serve media from these CDNs. Allowing them lets the
    // Gallery render real event photos pulled from the social feed via next/image.
    remotePatterns: [
      { protocol: "https", hostname: "**.fbcdn.net" },
      { protocol: "https", hostname: "**.cdninstagram.com" },
      { protocol: "https", hostname: "scontent.xx.fbcdn.net" },
    ],
  },
};

export default nextConfig;
