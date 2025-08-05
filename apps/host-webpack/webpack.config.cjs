const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {
  ModuleFederationPlugin,
} = require("@module-federation/enhanced/webpack");
const moduleFederationConfig = require("./module-federation.config");

module.exports = {
  entry: "./src/client/index.tsx",
  watchOptions: {
    ignored: "**/@mf-types/**",
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "js/[name].js",
    clean: true,
    publicPath: "auto",
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json", ".css"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-typescript",
              ["@babel/preset-react", { runtime: "automatic" }],
            ],
          },
        },
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: {
                auto: true,
                localIdentName: "[path][name]__[local]",
                namedExport: true,
              },
            },
          },
          "postcss-loader",
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
    }),
    new ModuleFederationPlugin(moduleFederationConfig),
  ],
};
