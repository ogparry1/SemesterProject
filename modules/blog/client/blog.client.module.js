(function (app) {
  'use strict';

  app.registerModule('blog');
  app.registerModule('blog.routes', ['ui.router']);
  app.registerModule('blog.admin', ['core']);
  app.registerModule('blog.admin.routes', ['ui.router']);
}(ApplicationConfiguration));
