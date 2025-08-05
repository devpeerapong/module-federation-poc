const { createModuleFederationConfig } = require("@module-federation/enhanced");
const { createRemotes } = require("shared");

module.exports = createModuleFederationConfig({
  name: "host_webpack",
  exposes: {
    "./Counter": "./src/client/components/Counter.tsx",
  },
  remotes: createRemotes("host_webpack"),
  shared: {
    react: { singleton: true },
    "react-dom": { singleton: true },
  },
  shareStrategy: "loaded-first",
  runtimePlugins: [require.resolve("shared/runtime-plugin/fallback")],
});
