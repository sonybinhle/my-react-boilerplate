const diPlugin = require('./diPlugin');

module.exports = {
  loader: 'sass-loader',
  options: {
    importer: diPlugin.sassImporter,
  },
};
