import type { federation } from "@module-federation/vite";
import { createRemotes } from "shared";

export default {
  name: "host_vite",
  manifest: true,
  filename: "remoteEntry.js",
  exposes: {
    "./Counter": "./src/components/Counter.tsx",
  },
  remotes: createRemotes("host_vite"),
  shared: {
    react: { singleton: true },
    "react-dom": { singleton: true },
  },
  shareStrategy: "loaded-first",
  runtimePlugins: ["./fallback"],
} satisfies Parameters<typeof federation>[0];
