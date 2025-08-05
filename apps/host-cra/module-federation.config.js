const { createModuleFederationConfig } = require("@module-federation/enhanced");
const { createRemotes } = require("shared");

module.exports = createModuleFederationConfig({
  name: "host_cra",
  manifest: true,
  filename: "remoteEntry.js",
  exposes: {
    "./Counter": "./src/components/Counter",
  },
  remotes: createRemotes("host_cra"),
  shared: {
    react: { singleton: true },
    "react-dom": { singleton: true },
  },
  shareStrategy: "loaded-first",
  runtimePlugins: ["./node_modules/shared/dist/runtime-plugin/fallback"]
});