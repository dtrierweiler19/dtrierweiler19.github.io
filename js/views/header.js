define([
  'underscore',
  'backbone',
  'templates',
  'settings'
], function (_, Backbone, templates, settings) {
  'use strict';

  return Backbone.View.extend({
    el: '#header',
    render: function () {
      this.$el.html(_.template(templates.header, {
        siteTitle: settings['site-title'],
        navItems: this.collection.toJSON()
      }));
    }
  });
});