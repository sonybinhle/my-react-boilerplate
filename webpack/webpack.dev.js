/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

const config = require('./config');
const webpackBaseConfig = require('./webpack.base.js');

module.exports = webpackMerge(webpackBaseConfig, {
  devtool: 'inline-source-map',
  entry: [`webpack-hot-middleware/client?path=${config.WEBPACK_HMR}&reload=true`],
  module: {
    rules: [
      {
        test: /\.scss$/,
        include: /src/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  devServer: {
    host: 'localhost',
    port: config.port,
    hot: true,
    noInfo: false,
    stats: 'minimal',
    historyApiFallback: true,
  },
});
