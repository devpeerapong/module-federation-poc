import Counter from "./components/Counter";
import CounterRsbuild from "host_rsbuild/Counter";
import CounterWebpack from "host_webpack/Counter";
import CounterVite from "host_vite/Counter";
import CounterNext from "host_next/Counter";

import { Navigation } from "shared";

export default function App() {
  return (
    <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
      <h1 style={{ color: "cadetblue" }}>CRA</h1>
      <Navigation />
      <Counter />
      <CounterRsbuild />
      <CounterWebpack />
      <CounterVite />
      <CounterNext />
    </div>
  );
}
