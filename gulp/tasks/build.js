import yargs from 'yargs';
import gulp from 'gulp';
import shell from 'shelljs';
import size from 'gulp-size';

export default function (gulp) {
  // Use dynamic import for paths
  const getPaths = async () => {
    const { default: paths } = await import('../paths.mjs');
    return paths;
  };

  // 'gulp site:tmp' -- copies Jekyll site to a temporary directory to be processed
  gulp.task('site:tmp', async () => {
    const paths = await getPaths();
    return gulp.src([`${paths.sourceFolderName}/**/*`, `!${paths.sourceDir}${paths.assetsFolderName}/**/*`, `!${paths.sourceDir}${paths.assetsFolderName}`], { dot: true })
      .pipe(gulp.dest(`${paths.tempDir}${paths.sourceFolderName}`))
      .pipe(size({ title: 'Jekyll' }));
  });

  // 'gulp site' -- builds site with development settings
  // 'gulp site --prod' -- builds site with production settings
  gulp.task('site', (done) => {
    if (!argv.prod) {
      shell.exec('bundle exec jekyll build --limit_posts 1 --config _config.yml,_config.dev.yml'); // To speed up site build for local testing, add --limit_posts 1
      done();
    } else if (argv.prod) {
      shell.exec('bundle exec jekyll build');
      done();
    }
  });

  // 'gulp site:check' -- builds site with production settings then tests with html-proofer
  gulp.task('site:check', (done) => {
    shell.exec('gulp build --prod');
    shell.exec('bundle exec rake test');
    done();
  });
}
