'use strict';

var Router = require('ampersand-router');

var HomePage = require('./pages/home');

module.exports = Router.extend({
  routes: {
    '': 'home'
  },

  // Page Handlers
  home: function () {
    this.trigger('newPage', new HomePage({}));
  }
});
