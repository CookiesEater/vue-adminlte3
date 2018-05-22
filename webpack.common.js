const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
require('babel-polyfill');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  entry: ['babel-polyfill', resolve('example/src/main.js')],
  output: {
    path: resolve('docs/dist/'),
    publicPath: 'dist/',
    filename: 'js/build.js',
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|vue)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader',
        options: {
          outputPath: 'images/',
          name: '[name].[ext]?[hash]',
        },
      },
      {
        test: /\.(otf|eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          outputPath: 'fonts/',
          name: '[name].[ext]?[hash]',
        },
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      'AdminLTE': resolve('src'),
      '@': resolve('example/src'),
    },
  },
  performance: {
    hints: false,
  },
};
