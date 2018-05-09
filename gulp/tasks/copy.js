'use strict';
var gulp  = require('gulp');
var newer = require('gulp-newer');

// include paths file
var paths = require('../paths');

// 'gulp copy:assets' -- copies assets to /dist/
//   to avoid Jekyll overwriting the whole directory
gulp.task('copy:assets', () => {
  return gulp.src([paths.assetFilesTemp + '/**/*', paths.imageFiles + '/*.ico'])
    .pipe(gulp.dest(paths.assetFilesSite))
});

// 'gulp copy:images' -- copies unoptimized images to /dist/
gulp.task('copy:images', () => {
  return gulp.src([paths.imageFilesGlob, '!src/assets/assets/images/{feature,feature/**}']) // do not process feature images
    .pipe(newer(paths.imageFilesSite))
    .pipe(gulp.dest(paths.imageFilesSite))
});

// 'gulp copy:scripts' -- copies scripts to /dist/
gulp.task('copy:scripts', () => {
  return gulp.src(paths.jsFilesGlob)
    .pipe(newer(paths.jsFilesSite))
    .pipe(gulp.dest(paths.jsFilesSite))
});

// 'gulp copy:manifest' -- copies image json to /dist/
gulp.task('copy:manifest', () => {
  return gulp.src(paths.imageFiles + '/*.json')
    .pipe(newer(paths.imageFilesSite))
    .pipe(gulp.dest(paths.imageFilesSite))
});

// 'gulp copy:audio' -- copies audio to /dist/
gulp.task('copy:audio', () => {
  return gulp.src(paths.audioFilesGlob)
    .pipe(newer(paths.audioFilesSite))
    .pipe(gulp.dest(paths.audioFilesSite))
});

// 'gulp copy:site' -- copies processed Jekyll site to /dist/
gulp.task('copy:site', () => {
  return gulp.src([paths.tempDir + paths.siteFolderName + '/**/*', paths.tempDir + paths.siteFolderName + '/**/.*'])
    .pipe(gulp.dest(paths.siteFolderName))
});

// 'gulp copy:applecert' -- copies .well-known/apple-developer-merchantid-domain-association to /dist/
gulp.task('copy:applecert', () => {
  return gulp.src([paths.sourceDir + '.well-known/apple-developer-merchantid-domain-association'])
    .pipe(gulp.dest(paths.siteFolderName + '/.well-known/'))
});
