/* eslint-disable import/no-extraneous-dependencies */
import webpack from 'webpack';
import devMiddleware from 'webpack-dev-middleware';
import hotMiddleware from 'webpack-hot-middleware';

import webpackDevConfig from '../../tools/webpack.dev';
import config from '../../tools/config';

const compiler = webpack(webpackDevConfig);

export const webpackDevMiddleware = devMiddleware(compiler, webpackDevConfig.devServer);

export const webpackHotMiddleware = hotMiddleware(compiler, {
  path: config.WEBPACK_HMR,
  reload: true,
});
