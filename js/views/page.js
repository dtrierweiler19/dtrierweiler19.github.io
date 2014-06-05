define([
  'backbone'
], function (Backbone) {
  'use strict';

  return Backbone.View.extend({
    el: '#main',
    render: function () {
      this.$el.load(this.template);
    }
  });
});