import gulp from 'gulp';
import sass from 'gulp-sass';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import sourcemaps from 'gulp-sourcemaps';
import clean from 'gulp-clean';
import * as sassPackage from 'sass';

// Configure sass compiler
const sassCompiler = sass(sassPackage);

// Task: Clean dist folder
function cleanDist() {
  return gulp.src('dist', { allowEmpty: true, read: false })
    .pipe(clean());
}

// Task: Compile SCSS to CSS with PostCSS (autoprefixer)
function styles() {
  return gulp.src('src/styles/index.scss')
    .pipe(sourcemaps.init())
    .pipe(sassCompiler().on('error', sassCompiler.logError))
    .pipe(postcss([
      autoprefixer({
        // Browser support configuration from postcss.config.js
        overrideBrowserslist: [
          '> 0.5%',
          'last 2 versions',
          'Firefox ESR',
          'not dead'
        ]
      })
    ]))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('dist'));
}

// Task: Watch for changes
function watch() {
  gulp.watch('src/styles/**/*.scss', styles);
  gulp.watch('postcss.config.js', styles);
}

// Default task - clean and build styles
export default gulp.series(cleanDist, styles);

// Export tasks explicitly
export { styles, cleanDist, watch };