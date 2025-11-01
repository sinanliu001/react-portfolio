import type { NextConfig } from "next";

// const isProd = process.env.NODE_ENV === "production";
// todo: change basePath when deploying to production

const nextConfig: NextConfig = {
  /* config options here */
  basePath: "/react-portfolio",
  output: "export",
  reactStrictMode: true,
};

export default nextConfig;
