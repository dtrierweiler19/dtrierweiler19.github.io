define([
  'backbone',
  'showdown'
], function (Backbone, Showdown) {
  'use strict';

  return Backbone.View.extend({
    el: '#main',
    render: function (page) {
      var self = this;

      $.get('/data/' + page + '.md', function (data) {
        self.$el.html(new Showdown.converter().makeHtml(data));
      });
    }
  });
});