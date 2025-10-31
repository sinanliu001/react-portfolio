import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  distDir: "dist",
  basePath: isProd ? '/react-portfolio' : '',
  assetPrefix: isProd ? '/react-portfolio' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
