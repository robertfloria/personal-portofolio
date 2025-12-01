import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    // Images are served locally from the `public/` folder. If you later
    // host images externally, add their hostnames to `remotePatterns`.
    remotePatterns: [],
    // Enable modern image formats for better performance
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    turbopackUseSystemTlsCerts: true,
  },
  // Enable React strict mode for better development experience
  reactStrictMode: true,
  // Compress responses for better performance
  compress: true,
  // Headers for security and caching
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
      {
        // Cache static assets
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Cache fonts
        source: '/fonts/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
