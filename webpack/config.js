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
      version: '',
    },
  },
}).argv;

const baseConfig = {
  version: args.env.version,
  publicPath: args.env.publicPath,
  assetPath: `${args.env.publicPath}${args.staticPath}/`,
  BUILD: 'build',
  MANIFEST: `manifest${args.env.version ? '.' + args.env.version : ''}.json`,
  WEBPACK_HMR: '/__webpack_hmr',
  getManifest: function(version) { return `manifest${version ? '.' + version : ''}.json`;},
};

module.exports = Object.assign({}, babelConfig, args, baseConfig);
