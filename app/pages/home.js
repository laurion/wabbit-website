'use strict';

/* global app */
var Backbone = require('../shims/backbone');
var View = Backbone.View;
var templates = require('../lib/templates');

module.exports = View.extend({
  pageTitle: 'Wabbit Messenger',
  template: templates.pages.home,
  render: function () {
    this.$el.html(this.template());
    return this;
  },

  customDocumentClasses: function () {
    return ['home-page'];
  },
});
