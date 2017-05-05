/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const config = require('./config');
const path = require('path');

module.exports = {
  target: 'web',
  entry: ['./src'],
  output: {
    filename: `js/bundle${config.version ? '.' + config.version : ''}.[hash].js`,
    path: path.join(__dirname, '..', config.BUILD),
    publicPath: config.assetPath,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader?cacheDirectory=true'],
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
    new webpack.NormalModuleReplacementPlugin(/.*/, function(resource) {
      if (config.version) {
        if (/Logo$/.test(resource.request)) {
          console.log(resource.request);
          resource.request = resource.request.replace(/Logo$/g, 'Logo/vio.js');
        }
      }
    })
  ],
};
