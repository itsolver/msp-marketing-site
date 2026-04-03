'use strict';
import changed from 'gulp-changed';
import gulp from 'gulp';
import responsive from 'gulp-responsive';
import size from 'gulp-size';
import imagemin from 'gulp-imagemin';
import gifsicle from 'imagemin-gifsicle';
import jpegtran from 'imagemin-jpegtran';
import optipng from 'imagemin-optipng';
import svgo from 'imagemin-svgo';

// Use dynamic import for paths
const getPaths = async () => {
  const { default: paths } = await import('../paths.mjs');
  return paths;
};

// 'gulp images:optimize' -- optimize images, overwriting src.
gulp.task('images:optimize', async () => {
  const paths = await getPaths();
  return gulp.src([paths.imageFilesGlob])
    .pipe(imagemin([
      gifsicle({ interlaced: true }),
      jpegtran({ progressive: true }),
      optipng(),
      svgo({ plugins: [{ cleanupIDs: false }] })
    ], { verbose: true }))
    .pipe(gulp.dest(paths.imageFiles))
    .pipe(size({ title: 'images' }));
});

// 'gulp images:feature' -- resize images
gulp.task('images:feature', async () => {
  const paths = await getPaths();
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
    .pipe(gulp.dest(paths.imageFilesSite));
});
