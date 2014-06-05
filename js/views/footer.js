define([
  'underscore',
  'backbone',
  'templates'
], function (_, Backbone, templates) {
  'use strict';

  return Backbone.View.extend({
    el: '#footer',
    render: function () {
      this.$el.html(_.template(templates.footer, {
        year: new Date().getFullYear()
      }));
    }
  });
});