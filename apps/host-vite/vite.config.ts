import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { federation } from "@module-federation/vite";
import moduleFederationConfig from "./module-federation.config";

// https://vite.dev/config/
export default defineConfig({
  base: "",
  server: {
    port: 3004,
  },
  plugins: [react(), federation(moduleFederationConfig)],
});
