import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  experimental: {
    // Inlines above-the-fold CSS, defers the rest (Next.js + Critters).
    // Knocks the 88KB render-blocking stylesheet off the critical path.
    optimizeCss: true,
  },
};

export default nextConfig;
