const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const ManifestPlugin = require('webpack-manifest-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = require('./config');
const webpackBaseConfig = require('./webpack.base.js');

const extractSass = new ExtractTextPlugin({
  filename: 'css/[name].[contenthash].css',
});

module.exports = webpackMerge(webpackBaseConfig, {
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.scss$/,
        include: /src/,
        loader: extractSass.extract({
          use: [
            'css-loader',
            'sass-loader',
          ],
          fallback: 'style-loader',
        }),
      },
    ],
  },
  plugins: [
    extractSass,
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        unused: true,
        dead_code: true,
        warnings: false,
      },
      comments: false,
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new ManifestPlugin({
      fileName: config.MANIFEST,
      publicPath: config.assetPath,
    }),
  ],
});
