import gulp from 'gulp';
import submitSitemap from 'submit-sitemap';

// Use dynamic import for paths
const getPaths = async () => {
  const { default: paths } = await import('../paths.mjs');
  return paths;
};

// 'gulp submit:sitemap` -- submit sitemap XML file to Google and Bing
gulp.task('submit:sitemap', async (cb) => {
  const paths = await getPaths();
  const SitemapUrl = paths.prodUrl + '/sitemap.xml';

  submitSitemap.submitSitemap(SitemapUrl, (err) => {
    if (err) {
      console.warn(err);
    }
    cb();
  });
});
