# Create React App (CRA)

This CRA app is configured to work with **Module Federation 2.0** using Webpack and CRACO. It functions as both a **host** and a **remote** in the interoperability demo.

## Configuration Notes

* **CRACO** is used to override Webpack config without ejecting.
* **`publicPath` set to `auto`** to enable correct remote resolution at runtime.
* **`@mf-types` ignored in watch mode** to prevent infinite rebuild loops.
* **Fallback runtime plugin** is referenced using a **relative path** from `node_modules` due to `require.resolve` limitations in CRA.
