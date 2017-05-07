const config = require('../../webpack/config');
const path = require('path');

const VERSIONS = 'versions';
const MANIFEST = 'manifest';
const SRC_PATH = path.join(__dirname, '..');

function getVersionMap(version) {
  if (version) {
    const manifestPath = path.join(SRC_PATH, VERSIONS, config.version, MANIFEST);
    const manifest = require(manifestPath); // eslint-disable-line;
    const manifestMap = manifest.map;

    return Object.keys(manifestMap).reduce((acc, key) => {
      acc.push({
        reg: new RegExp(key),
        path: manifestMap[key],
      });

      return acc;
    }, []);
  }

  return null;
}

function getPath(str) {
  return path.join(SRC_PATH, str);
}

const versionMap = getVersionMap(config.version);

function normalizeContext(context) {
  const info = path.parse(context);

  return info.ext ? info.dir : context;
}

function accept(context) {
  return versionMap && !/node_modules/.test(context) && !/src\/versions/.test(context);
}

function getReplacedPath(url, context) {
  if (accept(context)) {
    const normalContext = normalizeContext(context);
    const fullPath = path.resolve(normalContext, url);

    if (fullPath) {
      const mapObj = versionMap.find(obj => obj.reg.test(fullPath));

      return mapObj && getPath(mapObj.path);
    }
  }

  return null;
}

module.exports = {
  getReplacedPath,
};
