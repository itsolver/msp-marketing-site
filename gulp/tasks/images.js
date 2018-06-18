'use strict';
var changed     = require('gulp-changed');
var gulp        = require('gulp');
var responsive  = require('gulp-responsive');
var size        = require('gulp-size');
var imagemin    = require('gulp-imagemin');

// include paths file
var paths       = require('../paths');

// 'gulp images:optimize' -- optimize images, overwriting src.
gulp.task('images:optimize', () => {
  return gulp.src([paths.imageFilesGlob])
    .pipe(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.jpegtran({progressive: true}),
      imagemin.optipng(),
      imagemin.svgo({plugins: [{cleanupIDs: false}]})
    ], {verbose: true}))
    .pipe(gulp.dest(paths.imageFiles))
    .pipe(size({title: 'images'}))
});

// 'gulp images:feature' -- resize images
gulp.task('images:feature', () => {
  return gulp.src([paths.imageFiles + '/feature' + paths.imagePattern, '!' + paths.imageFiles + '/feature/**/*.{gif,svg}'])
    .pipe(changed(paths.imageFilesSite))
    .pipe(responsive({
      // resize all images
      '*.*': [{
        width: 20,
        rename: { suffix: '-lq' },
      }, {
        width: 320,
        rename: { suffix: '-320' },
      }, {
        width: 768,
        rename: { suffix: '-768' },
      }, {
        width: 1024,
        rename: { suffix: '-1024' },
      }, {
        width: 1920,
        rename: { suffix: '' },
      }]
    }, {
      // global configuration for all images
      errorOnEnlargement: false,
      withMetadata: false,
      errorOnUnusedConfig: false
    }))
    .pipe(gulp.dest(paths.imageFilesSite))
});
