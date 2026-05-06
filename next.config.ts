import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/captain-morgans-manifest",
  images: { unoptimized: true },
};

export default nextConfig;
