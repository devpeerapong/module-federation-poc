# Module Federation 2.0 Interoperability Demo

**Purpose:** Standalone showcase of **Module Federation 2.0** working across multiple modern bundlers/frameworks. Each application can act as both a **host** and a **remote**. The demo emphasizes **runtime interoperability** using **client‑side rendering** only (no SSR).

---

## How This Demo Works (High‑Level)

* **Host & Remote roles:** Every app both **exposes** a simple `Counter` component and **consumes** the same component from other apps.
* **Runtime loading:** Hosts resolve and load remotes **at runtime**, enabling decoupled builds and independent deployment.
* **HMR in development:** In dev mode, changes in a remote are reflected in hosts via each bundler’s HMR.
* **Resilience:** A fallback runtime plugin (based on *offline‑remote* examples) prevents hard failures if a remote is unavailable.
* **Client‑only:** No server‑side rendering is used or demonstrated here.

---

## App Matrix

| App                  | Port | Bundler/Framework | Federation Plugin                   | Dev Server                                      |
| -------------------- | ---: | ----------------- | ----------------------------------- | ----------------------------------------------- |
| **Rsbuild**          | 3001 | Rsbuild           | `@module-federation/rsbuild-plugin` | Rsbuild dev server                              |
| **Webpack**          | 3002 | Webpack           | `@module-federation/enhanced`       | Fastify                                         |
| **Create React App** | 3003 | CRA (Webpack)     | `@module-federation/enhanced`       | CRA dev server (via CRACO)                      |
| **Vite**             | 3004 | Vite              | `@module-federation/vite`           | Vite dev server                                 |
| **Next.js**          | 3005 | Next.js           | `@module-federation/next-mf`        | Next.js 14

---

## Interoperability & Fallback Behavior

* **Runtime interoperability:** Each host loads other apps’ exposed modules over HTTP at runtime, enabling independent versioning and deployment.
* **Fallbacks:** If a remote entry cannot be fetched or initialized, a **fallback** prevents crashes and substitutes a safe placeholder so the host remains usable.

---

## Scope & Limitations

* **No SSR.** All rendering is client‑side.
* Security, caching strategy, and production hardening are **not** covered; this is a learning/demo repository.

---

## Running the Demo

```bash
pnpm install
pnpm dev       # starts all apps in development with HMR

pnpm serve     # builds and starts all apps in production mode 
```

---

## References

* Module Federation docs: [https://module-federation.io/](https://module-federation.io/)
* Offline runtime example: [https://github.com/module-federation/module-federation-examples/tree/master/runtime-plugins/offline-remote](https://github.com/module-federation/module-federation-examples/tree/master/runtime-plugins/offline-remote)
* Vite plugin: [https://www.npmjs.com/package/@module-federation/vite](https://www.npmjs.com/package/@module-federation/vite)
* Webpack enhanced plugin: [https://www.npmjs.com/package/@module-federation/enhanced](https://www.npmjs.com/package/@module-federation/enhanced)
* Rsbuild plugin: [https://www.npmjs.com/package/@module-federation/rsbuild-plugin](https://www.npmjs.com/package/@module-federation/rsbuild-plugin)
* Nextjs-mf plugin: [https://www.npmjs.com/package/@module-federation/nextjs-mf](https://www.npmjs.com/package/@module-federation/nextjs-mf)