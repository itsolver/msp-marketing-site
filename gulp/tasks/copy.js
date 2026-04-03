'use strict';
import gulp from 'gulp';
import newer from 'gulp-newer';

// Use dynamic import for paths
const getPaths = async () => {
  const { default: paths } = await import('../paths.mjs');
  return paths;
};

// 'gulp copy:assets' -- copies assets to /dist/
//   to avoid Jekyll overwriting the whole directory
gulp.task('copy:assets', async () => {
  const paths = await getPaths();
  return gulp.src([paths.assetFilesTemp + '/**/*', paths.imageFiles + '/*.ico'])
    .pipe(gulp.dest(paths.assetFilesSite))
});

// 'gulp copy:images' -- copies unoptimized images to /dist/
gulp.task('copy:images', async () => {
  const paths = await getPaths();
  return gulp.src([paths.imageFilesGlob, '!src/assets/assets/images/{feature,feature/**}']) // do not process feature images
    .pipe(newer(paths.imageFilesSite))
    .pipe(gulp.dest(paths.imageFilesSite))
});

// 'gulp copy:scripts' -- copies scripts to /dist/
gulp.task('copy:scripts', async () => {
  const paths = await getPaths();
  return gulp.src(paths.jsFilesGlob)
    .pipe(newer(paths.jsFilesSite))
    .pipe(gulp.dest(paths.jsFilesSite))
});

// 'gulp copy:manifest' -- copies image json to /dist/
gulp.task('copy:manifest', async () => {
  const paths = await getPaths();
  return gulp.src(paths.imageFiles + '/*.json')
    .pipe(newer(paths.imageFilesSite))
    .pipe(gulp.dest(paths.imageFilesSite))
});

// 'gulp copy:audio' -- copies audio to /dist/
gulp.task('copy:audio', async () => {
  const paths = await getPaths();
  return gulp.src(paths.audioFilesGlob)
    .pipe(newer(paths.audioFilesSite))
    .pipe(gulp.dest(paths.audioFilesSite))
});

// 'gulp copy:docs' -- copies documents to /dist/
gulp.task('copy:docs', async () => {
  const paths = await getPaths();
  return gulp.src(paths.docsFilesGlob)
    .pipe(newer(paths.docsFilesSite))
    .pipe(gulp.dest(paths.docsFilesSite))
});

// 'gulp copy:site' -- copies processed Jekyll site to /dist/
gulp.task('copy:site', async () => {
  const paths = await getPaths();
  return gulp.src([paths.tempDir + paths.siteFolderName + '/**/*', paths.tempDir + paths.siteFolderName + '/**/.*'])
    .pipe(gulp.dest(paths.siteFolderName))
});

// 'gulp copy:applecert' -- copies .well-known/apple-developer-merchantid-domain-association to /dist/
gulp.task('copy:applecert', async () => {
  const paths = await getPaths();
  return gulp.src([paths.sourceDir + '.well-known/apple-developer-merchantid-domain-association'])
    .pipe(gulp.dest(paths.siteFolderName + '/.well-known/'))
});
