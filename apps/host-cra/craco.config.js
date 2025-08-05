const moduleFederationConfig = require("./module-federation.config");
const { ModuleFederationPlugin } = require("@module-federation/enhanced/webpack");

module.exports = {
  devServer: {
    port: 3003,
  },
  webpack: {
    plugins: {
      add: [new ModuleFederationPlugin(moduleFederationConfig)],
    },
    configure: (webpackConfig) => {
      webpackConfig.output.publicPath = "auto";
      webpackConfig.watchOptions = webpackConfig.watchOptions || {};

      if (!webpackConfig.watchOptions.ignored) {
        webpackConfig.watchOptions.ignored = [];
      } else if (!Array.isArray(webpackConfig.watchOptions.ignored)) {
        webpackConfig.watchOptions.ignored = [
          webpackConfig.watchOptions.ignored,
        ];
      }

      webpackConfig.watchOptions.ignored.push("**/@mf-types/**");

      return webpackConfig;
    },
  },
};
