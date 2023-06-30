const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

// Compile SCSS to CSS
function compileSass() {
  return gulp
    .src('src/scss/*.scss', 'node_modules/normalize.css/normalize.css')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream());
}

// Watch files and reload the browser
function watchFiles() {
  gulp.watch('src/scss/**/*.scss', compileSass);
  gulp.watch('dist/*.html').on('change', browserSync.reload);
}

// Start the development server
function serve() {
  browserSync.init({
    server: {
      baseDir: 'dist',
    },
  });

  watchFiles();
}

// Define the default task
gulp.task('default', gulp.series(compileSass, serve));
