define([
  'backbone',
  'controllers/page'
], function (Backbone, page) {
  'use strict';

  return Backbone.Router.extend({
    routes: {
      ':page': 'page',
      '/*': 'page'
    },
    page: page
  });
});