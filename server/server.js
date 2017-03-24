import express from 'express';
import chalk from 'chalk';

import config from '../webpack/config';
import applyMiddlewares from './middlewares';
import apis from './apis';
import controllers from './controllers';

const app = express();

applyMiddlewares(app);

app.use(apis);
app.use(controllers);

app.listen(config.port, (err) => {
  if (err) {
    console.error(chalk.red(err.message)); // eslint-disable-line
  } else {
    console.log(`\nOpen ${chalk.magenta(`http://localhost:${config.port}`)} \n`); // eslint-disable-line
  }
});
