import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Images are served locally from the `public/` folder. If you later
    // host images externally, add their hostnames to `remotePatterns`.
    remotePatterns: [],
  },
  experimental: {
    turbopackUseSystemTlsCerts: true,
  },
};

export default nextConfig;
