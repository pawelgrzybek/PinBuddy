const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    background: './src/background.js',
    options: './src/options.js',
    popup: './src/popup.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        }
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin([
      'dist',
    ]),
    new HtmlWebpackPlugin({
      title: 'Pinboard X — Popup',
      filename: 'popup.html',
      chunks: ['popup'],
    }),
    new HtmlWebpackPlugin({
      title: 'Pinboard X — Options',
      filename: 'options.html',
      chunks: ['options'],
    }),
    new CopyWebpackPlugin([
      {
        from: './src/manifest.json',
      },
      {
        from: './src/icons/.',
        to: './icons',
      },
      {
        from: './src/_locales/',
        to: './_locales',
      },
    ])
  ],
  devtool: 'cheap-module-source-map',
};
