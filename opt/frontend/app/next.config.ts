import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "192.168.10.3",
    "172.23.54.196",
    "localhost"
  ],
};

export default nextConfig;
