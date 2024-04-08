const path = require("path");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  babel: {
    presets: ["@babel/preset-env"],
    // plugins: [],
    loaderOptions: (babelLoaderOptions, { env, paths }) => {
      console.log("BABEL");
      console.log(babelLoaderOptions);
      return babelLoaderOptions;
    },
  },
  webpack: {
    alias: {
      "~": path.resolve(__dirname, "src"),
      "@components": path.resolve(__dirname, "src/components"),
    },
    plugins: [
      // other plugins
      new CompressionPlugin({
        test: /\.js(\?.*)?$/i,
        algorithm: "gzip",
      }),
      new BundleAnalyzerPlugin({ generateStatsFile: true }),
    ],
  },
};
