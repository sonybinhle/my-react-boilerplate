const babelConfig = require('../tools/config').BABEL_MODULE;

require('babel-register')(babelConfig);
require('./server');
