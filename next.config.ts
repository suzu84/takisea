import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.microcms-assets.io",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/achievement/:path*/",
        destination: "/achievement/:path*/index.html",
      },
      {
        source: "/achievement/:path*",
        destination: "/achievement/:path*/index.html",
      },
    ];
  },
};

export default nextConfig;
