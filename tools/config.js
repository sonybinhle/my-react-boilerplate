const yargs = require('yargs');

const babelConfig = require('./config-babel');

const args = yargs.options({
  'use-webpack': {
    type: 'boolean',
    default: false,
  },
  port: {
    type: 'number',
    default: 3000,
  },
  'static-path': {
    type: 'string',
    default: '/static',
  },
  env: {
    type: 'object',
    default: {
      publicPath: '',
    },
  },
}).argv;

const baseConfig = {
  publicPath: args.env.publicPath,
  assetPath: `${args.env.publicPath}${args.staticPath}/`,
  BUILD: 'build',
  MANIFEST: 'manifest.json',
  WEBPACK_HMR: '/__webpack_hmr',
};

module.exports = Object.assign({}, babelConfig, args, baseConfig);
