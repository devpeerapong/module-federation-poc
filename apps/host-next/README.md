# Next.js 

This Webpack app uses the `@module-federation/nextjs-mf` plugin and acts as both a **host** and a **remote** in the interoperability demo.

## Configuration Notes

* Uses **`isServer` checks** to separate client and server bundles.
* Relies on `nextjs-mf`, which is currently in **maintenance mode** – track updates [here](https://github.com/module-federation/core/issues/3153).
* Only works with **Next.js 14** using the **Pages Router** (App Router is not supported).
* Federation is client-only, so all remote components must be dynamically imported with ssr: false.
* Based on Vercel Labs' reference: [microfrontends-nextjs-pages-federation](https://github.com/vercel-labs/microfrontends-nextjs-pages-federation).
