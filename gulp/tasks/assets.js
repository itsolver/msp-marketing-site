import yargs from 'yargs';
import autoprefixer from 'autoprefixer';
import browserSync from 'browser-sync';
import cssnano from 'gulp-cssnano';
import gulp from 'gulp';
import postcss from 'gulp-postcss';
import rev from 'gulp-rev';
import sass from 'gulp-sass';
import size from 'gulp-size';
import sourcemaps from 'gulp-sourcemaps';
import gulpIf from 'gulp-if';
import shell from 'gulp-shell';

// include paths file
import paths from '../paths.mjs';

const { argv } = yargs;

// Get latest lozad.min.js
gulp.task('lozadjs', shell.task([
  `cd ${paths.jsFiles} && wget https://cdn.jsdelivr.net/npm/lozad/dist/lozad.min.js -O lozad.min.js`
]));

// 'gulp styles' task
gulp.task('styles', () => {
  return gulp.src([`${paths.sassFiles}/main.scss`])
    .pipe(gulpIf(!argv.prod, sourcemaps.init()))
    .pipe(sass({ precision: 10 }).on('error', sass.logError))
    .pipe(postcss([autoprefixer({ grid: true })]))
    .pipe(gulpIf(argv.prod, gulpIf('*.css', cssnano({ autoprefixer: false }))))
    .pipe(size({ showFiles: true }))
    .pipe(gulpIf(!argv.prod, sourcemaps.write('.')))
    .pipe(gulpIf(argv.prod, gulp.dest(paths.sassFilesTemp)))
    .pipe(gulpIf(argv.prod, rev()))
    .pipe(gulpIf(argv.prod, size({ showFiles: true })))
    .pipe(gulp.dest(paths.sassFilesTemp))
    .pipe(rev.manifest('css-manifest.json'))
    .pipe(gulpIf(argv.prod, gulp.dest(`${paths.tempDir}${paths.sourceDir}${paths.dataFolderName}`)))
    .pipe(gulpIf(argv.prod, size({ showFiles: true })))
    .pipe(gulpIf(!argv.prod, browserSync.stream()));
});

// function to properly reload your browser
function reload(done) {
  browserSync.reload();
  done();
}

// 'gulp serve' task
gulp.task('serve', (done) => {
  browserSync.init({
    port: 4000,
    ui: {
      port: 4001
    },
    server: [paths.tempFolderName, paths.siteFolderName]
  });
  done();

  // watch various files for changes and do the needful
  gulp.watch([paths.xmlFilesGlob, paths.txtFilesGlob], gulp.series('site', reload));
  gulp.watch(paths.jsFilesGlob, gulp.series('copy:scripts', reload));
  gulp.watch(paths.docsFilesGlob, gulp.series('copy:docs', reload));
  gulp.watch(paths.sassFilesGlob, gulp.series('styles', 'build:site', reload));
  gulp.watch(paths.imageFilesGlob, gulp.series('copy:images', reload));
  gulp.watch([paths.mdFilesGlob, paths.htmlFilesGlob, paths.ymlFilesGlob], gulp.series('build:site', reload));
});

export { reload };
