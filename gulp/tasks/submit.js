'use strict';
var fs    = require('fs');
var gulp  = require('gulp');
const shell = require('gulp-shell');

// include paths file
var paths = require('../paths');

// 'gulp submit:sitemap` -- submit sitemap XML file to Google and Bing
gulp.task('submit:sitemap', (cb) => {
  var SitemapUrl = paths.prodUrl + '/sitemap.xml';

  require('submit-sitemap').submitSitemap(SitemapUrl, function(err) {
    if (err)
      console.warn(err);
      cb();
  });
});
