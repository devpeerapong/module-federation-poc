import { GetServerSideProps } from "next";
import Counter from "../components/Counter";
import dynamic from "next/dynamic";
import { Navigation } from "shared";

const CounterRsbuild = dynamic(() => import("host_rsbuild/Counter"), {
  ssr: false,
});
const CounterWebpack = dynamic(() => import("host_webpack/Counter"), {
  ssr: false,
});
const CounterCra = dynamic(() => import("host_cra/Counter"), {
  ssr: false,
});
const CounterVite = dynamic(() => import("host_vite/Counter"), {
  ssr: false,
});

export default function Home() {
  return (
    <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
      <h1 style={{color: "brown"}}>Next</h1>
      <Navigation />
      <Counter />
      <CounterRsbuild />
      <CounterWebpack />
      <CounterCra />
      <CounterVite />
    </div>
  );
}

export const getServerSideProps = (async () => {
  return { props: {} };
}) satisfies GetServerSideProps;
