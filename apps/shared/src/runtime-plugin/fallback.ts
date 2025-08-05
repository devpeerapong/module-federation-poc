import type { ModuleFederationRuntimePlugin } from "@module-federation/enhanced/runtime";

const fallbackPlugin = (
  options: { vite?: boolean } = {}
): ModuleFederationRuntimePlugin => {
  const { vite = false } = options;

  const getErrorMessage = (id: string, error: unknown) =>
    `remote ${id} is offline due to error: ${
      error instanceof Error ? error.message : String(error)
    }`;

  const getModule = (pg: () => string, from: string) => {
    if (from === "build") {
      return () => ({
        __esModule: true,
        default: pg,
      });
    } else if (vite) {
      return pg;
    } else {
      return {
        default: pg,
      };
    }
  };

  return {
    name: "fallback-plugin",
    async errorLoadRemote({ id, error, from }) {
      console.error(id, "offline");
      const pg = function () {
        console.error(id, "offline", error);
        return getErrorMessage(id, error);
      };

      return getModule(pg, from);
    },
  };
};

export default fallbackPlugin;
