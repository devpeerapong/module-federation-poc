# Rsbuild

This Rsbuild app is configured to work with **Module Federation 2.0** using the `@module-federation/rsbuild-plugin`. It functions as both a **host** and a **remote** in the interoperability demo.

## Configuration Notes

* **`output.assetPrefix` is explicitly set** to ensure remotes are resolved correctly at runtime.
