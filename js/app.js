define([
  'underscore',
  'jquery',
  'backbone',
  'router',
  'templates'
], function (_, $, Backbone, Router, templates) {
  'use strict';

  function App() {
    this.router = new Router();
  }

  App.prototype.initialize = function () {
    this.loadTemplates().then(function () {
      Backbone.history.start();
    });
  };

  App.prototype.loadTemplates = function () {
    var d = new $.Deferred(),
      theme = '';

    var getTemplate = function (name) {
      return $.ajax('/themes/' + theme + '/' + name + '.html');
    };

    $.getJSON('/data/config.json', function (config) {
      theme = config.theme;

      getTemplate('header')
        .then(function (header) {
          templates.header = header;
          return getTemplate('sidebar');
        }).then(function (sidebar) {
          templates.sidebar = sidebar;
          return getTemplate('footer');
        }).then(function (footer) {
          templates.footer = footer;
          d.resolve();
        });
    });

    return d.promise();
  };

  return App;
});