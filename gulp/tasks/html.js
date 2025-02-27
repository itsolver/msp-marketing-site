'use strict';
import gulp from 'gulp';
import { log, colors } from 'gulp-util';
import { stream as critical } from 'critical';
import yargs from 'yargs';
import htmlmin from 'gulp-htmlmin';
import prettyData from 'gulp-pretty-data';
import size from 'gulp-size';
import gulpIf from 'gulp-if';

// Use dynamic import for paths
const getPaths = async () => {
  const { default: paths } = await import('../paths.mjs');
  return paths;
};

// Update task definitions
gulp.task('html', async () => {
  const paths = await getPaths();
  const argv = yargs.argv;

  return gulp.src(paths.siteFolderName + paths.htmlPattern)
    .pipe(gulpIf(argv.prod, htmlmin({
      removeComments: true,
      collapseWhitespace: true,
      collapseBooleanAttributes: false,
      removeAttributeQuotes: true,
      removeEmptyAttributes: true,
      removeEmptyElements: false,
      removeRedundantAttributes: true,
      minifyJS: true,
      minifyCSS: true
    })))
    .pipe(gulpIf(argv.prod, size({ title: 'optimized HTML' })))
    .pipe(gulpIf(argv.prod, gulp.dest(paths.siteFolderName)));
});

gulp.task('xml', async () => {
  const paths = await getPaths();
  const argv = yargs.argv;

  return gulp.src(paths.siteFolderName + paths.xmlPattern)
    .pipe(gulpIf(argv.prod, prettyData({
      type: 'minify',
      preserveComments: false
    })))
    .pipe(gulpIf(argv.prod, size({ title: 'optimized XML' })))
    .pipe(gulpIf(argv.prod, gulp.dest(paths.siteFolderName)));
});

// Page dimensions for critical CSS
var pageDimensions = [{
  width: 320,
  height: 480
}, {
  width: 768,
  height: 1024
}, {
  width: 1024,
  height: 1024
}, {
  width: 1440,
  height: 1280
}];

// Update critical CSS tasks
gulp.task('styles:critical:home', async (done) => {
  const paths = await getPaths();
  const argv = yargs.argv;

  if (!argv.prod) {
    log('Skipping critical css in local dev.');
    done();
  } else {
    return gulp.src(paths.siteDir + 'index.html')
      .pipe(critical({
        base: paths.siteDir,
        inline: true,
        dimensions: pageDimensions,
        css: paths.sassFilesSite + '/main.css',
        dest: 'index.html',
        minify: true,
        extract: false,
        timeout: 30000,
        ignore: ['@font-face'] // defer loading of webfonts
      }))
      .on('error', function (err) { log(colors.red(err.message)); })
  }
});

gulp.task('styles:critical:archive', async (done) => {
  const paths = await getPaths();
  const argv = yargs.argv;

  if (!argv.prod) {
    log('Skipping critical css in local dev.');
    done();
  } else {
    return gulp.src(paths.siteDir + '/archived/index.html')
      .pipe(critical({
        base: paths.siteDir,
        inline: true,
        dimensions: pageDimensions,
        css: paths.sassFilesSite + '/main.css',
        dest: 'archived/index.html',
        minify: true,
        extract: false,
        timeout: 30000,
        ignore: ['@font-face'] // defer loading of webfonts
      }))
      .on('error', function (err) { log(colors.red(err.message)); })
  }
});

gulp.task('styles:critical:post', async (done) => {
  const paths = await getPaths();
  const argv = yargs.argv;

  if (!argv.prod) {
    log('Skipping critical css in local dev.');
    done();
  } else {
    return gulp.src(paths.siteDir + '/blog/index.html')
      .pipe(critical({
        base: paths.siteDir,
        inline: true,
        dimensions: pageDimensions,
        css: paths.sassFilesSite + '/main.css',
        dest: 'blog/index.html',
        minify: true,
        extract: false,
        timeout: 30000,
        ignore: ['@font-face'] // defer loading of webfonts
      }))
      .on('error', function (err) { log(colors.red(err.message)); })
  }
});
