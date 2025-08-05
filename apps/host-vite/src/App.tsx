import Counter from "./components/Counter";
import CounterRsbuild from "host_rsbuild/Counter";
import CounterCra from "host_cra/Counter";
import CounterWebpack from "host_webpack/Counter";
import CounterNext from "host_next/Counter";

import { Navigation } from "shared";

export default function App() {
  return (
    <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
      <h1 style={{ color: "orange" }}>Vite</h1>
      <Navigation />
      <Counter />
      <CounterRsbuild />
      <CounterCra />
      <CounterWebpack />
      <CounterNext />
    </div>
  );
}
