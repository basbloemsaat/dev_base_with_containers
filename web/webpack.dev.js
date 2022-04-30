const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    compress: true,
    port: 10000,
    open: false,
    // proxy: {
    //   "/api": "http://python:10001",
    // },
  },
});
