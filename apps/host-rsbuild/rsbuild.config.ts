import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginModuleFederation } from "@module-federation/rsbuild-plugin";
import moduleFederationConfig from "./module-federation.config";

export default defineConfig({
  plugins: [pluginReact(), pluginModuleFederation(moduleFederationConfig)],
  server: {
    port: 3001,
  },
  output: {
    assetPrefix: "auto",
  },
  html: {
    tags: [
      {
        tag: "link",
        attrs: {
          rel: "stylesheet",
          id: "__next_css__DO_NOT_USE__",
        },
      },
    ],
  },
});
