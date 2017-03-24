/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const config = require('./config');
const path = require('path');

module.exports = {
  target: 'web',
  entry: ['./src'],
  output: {
    filename: 'js/bundle.[hash].js',
    path: path.join(__dirname, '..', config.BUILD),
    publicPath: config.assetPath,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: ['file-loader?name=font/[name].[ext]?[hash]'],
      },
      {
        test: /\.(svg|png|jpg)$/,
        use: ['file-loader?name=image/[name].[ext]?[hash]'],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      __PUBLIC_PATH__: JSON.stringify(config.publicPath),
    }),
  ],
};
