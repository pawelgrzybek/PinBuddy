const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    'background/background': './src/background/',
    'options/options': './src/options/',
    'popup/popup': './src/popup/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ],
  },
  resolve: {
    alias: {
      theme: path.resolve(__dirname, 'src/theme/'),
    }
  },
  plugins: [
    new CleanWebpackPlugin([
      'dist',
    ]),
    new HtmlWebpackPlugin({
      filename: 'popup/popup.html',
      chunks: ['popup/popup'],
      template: './src/popup/index.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'options/options.html',
      chunks: ['options/options'],
      template: './src/options/index.html',
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
