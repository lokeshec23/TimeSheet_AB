import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.licdn.com",
        pathname: "/dms/image/**", // Allows all images from LinkedIn's media CDN
      },
    ],
  },
};

export default nextConfig;
