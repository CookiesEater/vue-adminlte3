const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: 'style-loader?sourceMap=true&singleton=true!css-loader?sourceMap=true!resolve-url-loader',
      },
      {
        test: /\.(scss|sass)$/,
        loader: 'style-loader?sourceMap=true&singleton=true!css-loader?sourceMap=true!resolve-url-loader!sass-loader?sourceMap=true',
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true,
    contentBase: path.join(__dirname, 'docs'),
  },
  devtool: '#eval-source-map',
});
