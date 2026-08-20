import type { NextConfig } from "next";
import { HEADERS_SEGURIDAD } from "@/lib/security/headers";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [new URL("https://images.unsplash.com/**")],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: HEADERS_SEGURIDAD,
      },
    ];
  },
};

export default nextConfig;
