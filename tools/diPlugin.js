const path = require('path');
const WebpackDi = require('webpack-dependency-injector');

const config = require('./config');

const VERSIONS = 'versions';
const MANIFEST = 'manifest';
const SRC_PATH = path.join(__dirname, '../src');

function getVersionMap(version) {
  if (version) {
    const manifestPath = path.join(SRC_PATH, VERSIONS, version, MANIFEST);

    return require(manifestPath); // eslint-disable-line global-require, import/no-dynamic-require
  }

  return null;
}

const versionMap = getVersionMap(config.version) || {};

module.exports = new WebpackDi({
  source: SRC_PATH,
  excludes: [/src\/versions/],
  map: versionMap,
});
