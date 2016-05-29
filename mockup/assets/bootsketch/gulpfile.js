var gulp = require('gulp'),
    gutil = require('gulp-util'),
    notify = require('gulp-notify'),
    jshint = require('gulp-jshint'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    browserSync = require('browser-sync'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    shell = require('gulp-shell'),
    stylish = require('jshint-stylish'),
    clean = require('gulp-clean');


gulp.task('vendors', function() {

  gulp.src([
      'assets/jquery/jquery.js',
      'assets/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/affix.js',
      'assets/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/alert.js',
      'assets/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/button.js',
      'assets/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/carousel.js',
      'assets/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/collapse.js',
      'assets/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/dropdown.js',
      'assets/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/modal.js',
      'assets/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/tooltip.js',
      'assets/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/popover.js',
      'assets/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/scrollspy.js',
      'assets/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/tab.js',
      'assets/bootstrap-sass-official/vendor/assets/javascripts/bootstrap/transition.js'
    ])
    .pipe(concat('vendors.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('build/js'));
});


gulp.task('styles', function() {
  return gulp.src('assets/sass/bootsketch.scss')
    .pipe(sass())
      .on('error', gutil.beep)
      .on('error', notify.onError("Error: <%= error.message %>"))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
    .pipe(minifycss())
    .pipe(gulp.dest('build/css'));
});


gulp.task('styleguide', shell.task([
  'hologram'
]));

gulp.task('browser-sync', function() {
    browserSync.init(['styleguide/*.html'], {
      proxy: 'localhost',
      open: false,
      debounce: 400
    });
});

gulp.task('default', ['vendors', 'watch', 'browser-sync']);

gulp.task('watch', function() {
  gulp.watch('assets/sass/**/*.scss', ['styles', 'styleguide']);
});
