const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },

  //loaders are used to preprocess different kind of files
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },

  plugins: [
    new htmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
  ],
};