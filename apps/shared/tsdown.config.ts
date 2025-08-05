import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["./src/main.tsx", "./src/runtime-plugin/fallback.ts"],
  platform: "neutral",
  format: ["esm", "cjs"],
  dts: true,
  external: ["@module-federation/enhanced/runtime", /react/],
});
