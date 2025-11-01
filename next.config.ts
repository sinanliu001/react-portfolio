// import type { NextConfig } from "next";

// // const isProd = process.env.NODE_ENV === "production";
// // todo: change basePath when deploying to production
/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  /* config options here */
  basePath: "",
  output: "export",
  reactStrictMode: true,
};

// export default nextConfig;
module.exports = nextConfig;
