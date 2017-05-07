const yargs = require('yargs');
const babelConfig = require('./config-babel');

const VERSION = process.env.VERSION;

function getManifest(version) {
  return `manifest${version ? `.${version}` : ''}.json`;
}

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
  version: VERSION,
  publicPath: args.env.publicPath,
  assetPath: `${args.env.publicPath}${args.staticPath}/`,
  BUILD: 'build',
  MANIFEST: getManifest(VERSION),
  WEBPACK_HMR: '/__webpack_hmr',
  getManifest,
};

module.exports = Object.assign({}, babelConfig, args, baseConfig);
