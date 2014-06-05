define([
  'backbone',
  'templates'
], function (Backbone, templates) {
  'use strict';

  return Backbone.View.extend({
    el: '#sidebar',
    render: function () {
      this.$el.html(templates.sidebar);
    }
  });
});