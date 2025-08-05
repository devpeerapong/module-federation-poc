import Counter from "./components/Counter";
import CounterRsbuild from "host_rsbuild/Counter";
import CounterCra from "host_cra/Counter";
import CounterVite from "host_vite/Counter";
import CounterNext from "host_next/Counter";

import { Navigation } from "shared";

const App = () => {
  return (
    <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
      <h1 style={{ color: "green" }}>Webpack</h1>

      <Navigation />
      <Counter />
      <CounterRsbuild />
      <CounterCra />
      <CounterVite />
      <CounterNext />
    </div>
  );
};

export default App;
