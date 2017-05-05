const config = require('./config');

module.exports = {
  loader: 'sass-loader',
  options: {
    importer: function sassImporter(url, prev, done) {

      if (config.version) {
        if (url.indexOf('colors') >= 0) {
          url = url.replace('colors', 'colors.vio');
          return {file: url};
        }
      }

      return null;
    },
  },
};
