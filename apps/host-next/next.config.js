import { NextFederationPlugin } from "@module-federation/nextjs-mf";
import moduleFederationConfig from "./module-federation.config.js";

/**
 * @type {import("next").NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack: (config, options) => {
    const isServer = options.isServer;
    config.plugins.push(new NextFederationPlugin(moduleFederationConfig({ isServer })));
    return config;
  },
  headers: async () => {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
