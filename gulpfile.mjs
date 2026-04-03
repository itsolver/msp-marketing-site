import gulp from 'gulp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Function to dynamically import task files
async function importTasks(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file.endsWith('.mjs')) {
      const modulePath = join(dir, file);
      const taskModule = await import(modulePath);
      if (taskModule.default) {
        taskModule.default(gulp); // Ensure this is called
      }
    }
  }
}

// Import all task files
await importTasks(join(__dirname, 'gulp', 'tasks'));

// Define your gulp tasks here
gulp.task('build:site', gulp.series(
  'site:tmp', // Ensure this task is defined before this line
  'site',
  'copy:site'
));

gulp.task('assets', gulp.series(
  gulp.series('styles'),
  gulp.series('copy:assets', 'copy:scripts', 'copy:images', 'copy:docs', 'copy:manifest', 'copy:audio', 'copy:applecert')
));

gulp.task('clean', gulp.parallel('clean:temp', 'clean:dist'));

gulp.task('critical', gulp.series('styles:critical:home', 'styles:critical:archive', 'styles:critical:post'));

gulp.task('build', gulp.series('clean', 'assets', 'build:site', 'critical', 'html', 'xml'));

gulp.task('rebuild', gulp.series('clean', 'clean:images'));

gulp.task('check', gulp.series('site:check'));

// Add a default task if it doesn't exist
gulp.task('default', gulp.series('build'));

gulp.task('submit', gulp.series('submit:sitemap'));

export default gulp;
