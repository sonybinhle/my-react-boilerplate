const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const path = require('path');


const config = require('./config');
const sassLoader = require('./sassLoader');
const webpackBaseConfig = require('./webpack.base.js');

module.exports = webpackMerge(webpackBaseConfig, {
  devtool: 'inline-source-map',
  entry: [`webpack-hot-middleware/client?path=${config.WEBPACK_HMR}&reload=true`],
  resolve: {
    extensions: ['.ts', '.js', '.json'],
    modules: [path.join(__dirname, '../src'), 'node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        include: /src/,
        use: [
          'style-loader',
          'css-loader',
          sassLoader,
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
    publicPath: config.assetPath,
    host: 'localhost',
    port: config.port,
    hot: true,
    historyApiFallback: true,
    serverSideRender: true,
    stats: 'minimal',
  },
});
