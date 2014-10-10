'use strict';

var $ = require('./shims/jquery');
var _ = require('lodash');
var MainView = require('./views/main');
var Router = require('./router');
var loadcss = require('./lib/loadcss');


module.exports = {
  launch: _.once(function () {
    var self = window.app = this;

    this.router = new Router();

    //Wait for the DOM to be rendered.
    $(document).ready(function () {
      loadcss('/css/main.css');
      loadcss('http://fonts.googleapis.com/css?family=Unica+One|Roboto:400,300,100|Roboto+Slab:400,300');

      //Initialize the main view.
      var mainView = self.view = new MainView({
        el: document.body
      });

      //Render the main view.
      mainView.render();

      //Listen for 'newPage' event from the router
      self.router.on('newPage', mainView.setPage, mainView);

      //Verify if the enviromnet is localhost or not and use pushState URL accordingly
      var isLocal = false;
      if (window.location.host.indexOf('localhost') !== -1) {
        // Use non-pushState URLs for localhost dev for BrowserSync.
        isLocal = true;
      }
      var usePushState = !isLocal;

      self.router.history.start({
        root: '/',
        pushState: usePushState
      });
    });
  }),

  navigate: function (page) {
    var url = (page.charAt(0) === '/') ? page.slice(1) : page;
    this.router.history.navigate(url, { trigger: true});
  }
};

module.exports.launch();
