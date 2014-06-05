define([
  'underscore',
  'backbone',
  'collections/nav-items',
  'templates'
], function (_, Backbone, NavItemsCollection, templates) {
  'use strict';

  return Backbone.View.extend({
    el: '#header',
    render: function () {
      this.$el.html(_.template(templates.header, {
        navItems: this.collection.toJSON()
      }));
    }
  });
});