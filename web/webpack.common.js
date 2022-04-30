const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/indexes/index.ts",
  },
  output: {
    filename: (pathData) => `${pathData.chunk.name}.js`,
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
      chunks: ["index"],
    }),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};
