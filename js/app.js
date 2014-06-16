define([
  'underscore',
  'jquery',
  'backbone',
  'router',
  'templates',
  'settings',
  'bootstrap'
], function (_, $, Backbone, Router, templates, settings) {
  'use strict';

  function App() {
    this.router = new Router();
  }

  App.prototype.initialize = function () {
    this.loadData().then(function () { Backbone.history.start(); });
  };

  App.prototype.loadData = function () {
    var d = new $.Deferred();

    var getTemplate = function (name) {
      var _d = new $.Deferred();
      $.ajax('/themes/' + settings.theme + '/' + name + '.html')
        .then(function (template) {
          templates[name] = template;
          _d.resolve();
        });
      return _d.promise();
    };

    $.getJSON('/data/settings.json').then(function (data) {
      _.each(data, function (value, key) {
        settings[key] = value;
      });

      $.when(getTemplate('header'), getTemplate('sidebar'), getTemplate('footer'))
        .done(d.resolve);
    });

    return d.promise();
  };

  return App;
});