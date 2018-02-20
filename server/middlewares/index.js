import path from 'path';
import express from 'express';
import compression from 'compression';
import chalk from 'chalk';
import favicon from 'serve-favicon';

import config from '../../tools/config';

export default function (app) {
  app.use(compression());
  app.use(favicon(path.join(__dirname, '../public/favicon.ico')));

  if (config.useWebpack) {
    app.use(require('./webpackDev').webpackDevMiddleware); // eslint-disable-line
    app.use(require('./webpackDev').webpackHotMiddleware); // eslint-disable-line

    console.log(chalk.green('Use webpack-dev-middleware and webpack-hot-middleware')); // eslint-disable-line
  } else {
    app.use(config.staticPath, express.static(config.BUILD));
  }
}
