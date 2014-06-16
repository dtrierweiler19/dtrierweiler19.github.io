require.config({
  paths: {
    'bootstrap': '../bower_components/bootstrap/dist/js/bootstrap',
    'backbone': '../bower_components/backbone/backbone',
    'jquery': '../bower_components/jquery/dist/jquery',
    'showdown': '../bower_components/showdown/compressed/showdown',
    'text': '../bower_components/requirejs-text/text',
    'underscore': '../bower_components/underscore/underscore'
  },
  shim: {
    'bootstrap': {
      deps: ['jquery']
    },
    'backbone': {
      deps: ['jquery', 'underscore'],
      exports: 'Backbone'
    }
  }
});

require([
  'app'
], function (App) {
  var app = new App();

  app.initialize();
});