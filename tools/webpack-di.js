const webpack = require('webpack');
const path = require('path');

function normalizeContext(context) {
  const info = path.parse(context);

  return info.ext ? info.dir : context;
}

function accept(context, excludes) {
  return !excludes.some(regex => regex.test(context));
}

const getInjectedPathFactory = (options) => {
  const injectSource = options.source;
  const injectMap = options.map;
  const excludes = [/node_modules/].concat(options.excludes || []);

  return (url, inContext) => {
    const context = normalizeContext(inContext);

    if (accept(context, excludes) && accept(url, excludes)) {
      const fullPath = path.resolve(context, url);

      if (fullPath) {
        const matchedKey = Object.keys(injectMap).find(key => new RegExp(key).test(fullPath));

        if (matchedKey) {
          const newPath = path.resolve(injectSource, injectMap[matchedKey]);

          if (newPath) {
            return newPath;
          }

          throw new Error(`WebpackDI: new path is not found! ${newPath}`);
        }
      }
    }

    return null;
  };
};

const getNormalModuleReplacementFn = getInjectedPath => (resource) => {
  const injectedPath = getInjectedPath(resource.request, resource.context);

  if (injectedPath) resource.request = injectedPath; // eslint-disable-line no-param-reassign
};

function WepackDI(options) {
  const getInjectedPath = getInjectedPathFactory(options);
  const instance = new webpack.NormalModuleReplacementPlugin(/.*/, getNormalModuleReplacementFn(getInjectedPath));
  instance.getInjectedPath = getInjectedPath;
  instance.sassImporter = (url, prev) => {
    const replacedPath = getInjectedPath(url, prev);

    return replacedPath ? { file: replacedPath } : null;
  };

  return instance;
}

module.exports = WepackDI;
