const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    rootindex: "./src/indexes/index.ts",
  },
  output: {
    filename: (pathData) => {
      return pathData.chunk.name !== "error_pagina"
        ? "[name].js"
        : "error/[name].js";
    },
    path: path.resolve(__dirname, "dist/"),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: [/node_modules/, /lib/],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/templates/index.ejs",
      filename: "./index.html",
      chunks: ["rootindex"],
    }),
  ],
  devServer: {
    // contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 10000,
    // proxy: {
    //   "/api": "http://python:10081",
    // },
  },
};
