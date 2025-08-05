import { createModuleFederationConfig } from "@module-federation/rsbuild-plugin";
import { createRemotes } from "shared";

export default createModuleFederationConfig({
  name: "host_rsbuild",
  exposes: {
    "./Counter": "./src/components/Counter.tsx",
  },
  remotes: createRemotes("host_rsbuild"),
  shared: {
    react: { singleton: true },
    "react-dom": { singleton: true },
  },
  shareStrategy: "loaded-first",
  runtimePlugins: [require.resolve("shared/runtime-plugin/fallback")],
});
