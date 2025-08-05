# Webpack 

This Webpack app uses the `@module-federation/enhanced` plugin and acts as both a **host** and a **remote** in the interoperability demo.

## Configuration Notes

* Configuration is similar to the CRA setup, but without the need for CRACO.
* **`publicPath` is set to `auto`** to support dynamic remote loading.
* **`@mf-types` is ignored** in watch mode to avoid rebuild loops.
* **`require.resolve` is supported**, allowing direct paths to runtime plugins or shared modules.
