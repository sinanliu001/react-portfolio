import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  distDir: "dist",
  basePath: isProd ? 'https://sinanliu001.github.io' : '',
  assetPrefix: isProd ? 'https://sinanliu001.github.io' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
