import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  reactStrictMode: true,
  webpack(config) {
    config.cache = false;
    return config;
  },
};

export default createMDX({})(nextConfig);
