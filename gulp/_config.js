'use strict';

module.exports = {};
module.exports.plugins = require('gulp-load-plugins')();

module.exports.paths = {
  'tmp': './.tmp',
  'dist': './dist',
  'app': './app'
};

module.exports.handleError = function (e) {
  module.exports.plugins.util.log(e.message);
  this.emit('end');
};
