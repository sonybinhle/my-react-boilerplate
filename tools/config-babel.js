const path = require('path');
const jsonfile = require('jsonfile');

const BABEL = jsonfile.readFileSync(path.join(__dirname, '../.babelrc'));

const BABEL_MODULE = Object.assign({}, BABEL, {
  presets: [
    'latest',
    'react',
    'stage-2',
  ],
});

module.exports = {
  BABEL_MODULE,
};
