import del from 'del';
import gulp from 'gulp';

// include paths file
import paths from '../paths.js';

// 'gulp clean:assets' -- removes temporary and built CSS/JS assets
gulp.task('clean:assets', () => {
  return del([
    `${paths.tempFolderName}/**/*`,
    `!${paths.assetFilesTemp}`,
    `${paths.assetFilesSite}/**/*`,
    `!${paths.imageFilesSite}`,
    `!${paths.imageFilesSite}/**/*`
  ]);
});

// 'gulp clean:images' -- removes only image assets
gulp.task('clean:images', () => {
  return del([paths.imageFilesSite]);
});

// 'gulp clean:dist' -- removes built site
gulp.task('clean:dist', () => {
  return del([paths.siteFolderName]);
});

// 'gulp clean:site' -- removes temporary source
gulp.task('clean:site', () => {
  return del([`${paths.tempDir}${paths.sourceFolderName}`]);
});

// 'gulp clean:temp' -- removes temporary directory
gulp.task('clean:temp', () => {
  return del([paths.tempDir]);
});

export { };
