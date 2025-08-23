import type { NextConfig } from "next";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fedskillstest.ct.digital",
      },
    ],
  },
};

export default nextConfig;
