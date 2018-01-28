'use strict';
var changed     = require('gulp-changed');
var filter      = require('gulp-filter');
var glob        = require('glob');
var gulp        = require('gulp');
var gulpif      = require('gulp-if');
var newer       = require('gulp-newer');
var notify      = require('gulp-notify');
var rename      = require('gulp-rename');
var responsive  = require('gulp-responsive');
var size        = require('gulp-size');
var util        = require('gulp-util');

// include paths file
var paths       = require('../paths');

// 'gulp images:optimize' -- optimize images
gulp.task('images:optimize', () => {
  return gulp.src([paths.imageFilesGlob]) 
    .pipe(newer(paths.imageFilesSite))
    .pipe(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.jpegtran({progressive: true}),
      imagemin.optipng(),
      imagemin.svgo({plugins: [{cleanupIDs: false}]})
    ], {verbose: true}))
    .pipe(gulp.dest(paths.imageFilesSite))
    .pipe(size({title: 'images'}))
});