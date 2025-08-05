import { createRemotes } from "shared";

/**
 * @param {{ isServer: boolean }} options
 */
export default (options) => {
  /**
   * @type {ConstructorParameters<typeof import("@module-federation/nextjs-mf").NextFederationPlugin>[0]}
   */
  return {
    name: "host_next",
    filename: `static/${options.isServer ? "ssr" : "chunks"}/remoteEntry.js`,
    exposes: {
      "./Counter": "./src/components/Counter",
    },
    remotes: createRemotes("host_next"),
  };
};
