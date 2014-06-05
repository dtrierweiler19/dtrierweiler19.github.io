define([
  'backbone',
  'models/nav-item'
], function (Backbone, NavItemModel) {
  'use strict';

  return Backbone.Collection.extend({
    url: '/data/config.json',
    parse: function (response) {
      return response['nav-items'];
    },
    model: NavItemModel
  });
});