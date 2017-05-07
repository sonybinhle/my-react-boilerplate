const version = require('../src/versions');

module.exports = {
  loader: 'sass-loader',
  options: {
    importer: function sassImporter(url, prev) {
      const replacedPath = version.getReplacedPath(url, prev);

      return replacedPath ? { file: replacedPath } : null;
    },
  },
};
