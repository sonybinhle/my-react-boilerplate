const babelConfig = require('../webpack/config').BABEL_MODULE;

require('babel-register')(babelConfig);
require('./server');
