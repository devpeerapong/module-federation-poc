import Counter from "./components/Counter";
import CounterCra from "host_cra/Counter";
import CounterWebpack from "host_webpack/Counter";
import CounterVite from "host_vite/Counter";
import CounterNext from "host_next/Counter";

import { Navigation } from "shared";

export default function App() {
  return (
    <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
      <h1 style={{ color: "red" }}>Rsbulid</h1>
      <Navigation />
      <Counter />
      <CounterCra />
      <CounterWebpack />
      <CounterVite />
      <CounterNext />
    </div>
  );
}
