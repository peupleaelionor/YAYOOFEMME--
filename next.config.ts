import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**.cloudinary.com' },
      { protocol: 'https', hostname: '**.unsplash.com' },
      { protocol: 'https', hostname: '**.sephora.com' },
      { protocol: 'https', hostname: '**.amazon.fr' },
      { protocol: 'https', hostname: '**.amazon.com' },
      { protocol: 'https', hostname: 'images.ctfassets.net' },
    ],
  },
};

export default nextConfig;
