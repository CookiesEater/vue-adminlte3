const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge.smart(common, {
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: `${MiniCssExtractPlugin.loader}!css-loader?sourceMap=true&minimize=true!postcss-loader?sourceMap=true!resolve-url-loader`,
      },
      {
        test: /\.(scss|sass)$/,
        loader: `${MiniCssExtractPlugin.loader}!css-loader?sourceMap=true&minimize=true!postcss-loader?sourceMap=true!resolve-url-loader!sass-loader?sourceMap=true`,
      },
    ],
  },
  devtool: '#source-map',
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/build.css',
    }),
    new BundleAnalyzerPlugin(),
  ],
});
