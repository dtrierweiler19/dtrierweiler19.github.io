define([
  'backbone',
  'collections/nav-items',
  'views/header',
  'views/sidebar',
  'views/page',
  'views/footer'
], function (Backbone, NavItemsCollection, HeaderView, SidebarView, PageView, FooterView) {
  'use strict';

  return function (page) {
    var page = page || 'index',
      headerView = new HeaderView(),
      sidebarView = new SidebarView(),
      pageView = new PageView(),
      footerView = new FooterView();

    headerView.collection = new NavItemsCollection();
    headerView.collection.fetch()
      .success(function () {
        headerView.render();
      });

    sidebarView.render();

    pageView.template = '/data/' + page + '.html';
    pageView.render();

    footerView.render();
  }
});