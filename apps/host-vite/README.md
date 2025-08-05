# Vite

This Vite app is configured with the `@module-federation/vite` plugin and serves as both a **host** and a **remote** in the interoperability demo.

## Configuration Notes

* **`base` is explicitly set to `""`** to ensure the plugin sets `publicPath` to `auto`.
* The **Vite plugin does not unwrap `default` exports**, so shared modules must be returned directly.
* **`vite: true` option is passed** to the shared fallback runtime plugin for compatibility.
