import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // This allows builds even if ESLint finds warnings
  },
  reactStrictMode: true, // optional, recommended
};

export default nextConfig;
