const path = require("path");
const MiniExtractCssPlugin = require("mini-css-extract-plugin");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.dev-base");
const webpack = require("webpack");

module.exports = merge(baseConfig, {
  name: "client",
  target: "web",
  mode: "development",
  entry: {
    client: [
      "react-hot-loader/patch",
      "webpack-hot-middleware/client?reload=true&name=client&timeout=2000",
      "./src/client",
    ],
  },
  output: {
    filename: "[name]-bundle.js",
    path: path.resolve(__dirname, "../public"),
    publicPath: "/",
  },
  resolve: {
    alias: {
      "react-dom": "@hot-loader/react-dom",
    },
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          {
            loader: MiniExtractCssPlugin.loader,
            options: { hmr: process.env.NODE_ENV === "development" },
          },
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              config: {
                path: "./config/postcss.config.js",
              },
            },
          },
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new MiniExtractCssPlugin({
      filename: "style.css",
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
});
