import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**", // Bu domainden gelen tüm görsel yollarına izin ver
      },
      {
        protocol: "https",
        hostname: "odimax.com.tr",
        port: "",
        pathname: "/**", 
      },
    ],
  },
};

export default nextConfig;