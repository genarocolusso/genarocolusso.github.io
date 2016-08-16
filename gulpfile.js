var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync');
var concat = require('gulp-concat');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var del = require('del');
var rename = require('gulp-rename');
var runSequence = require('run-sequence');

// Basic Gulp task syntax
gulp.task('hello', function() {
  console.log('Hello Zell!');
})

// Development Tasks
// -----------------

// Start browserSync server
gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: 'app'
    }
  })
})

gulp.task('sass',  function() {
  // runSequence(
  //   'minifycss',
  //   'concatcss',
  //   callback);
})

gulp.task('minifycss', function() {
  return gulp.src(['app/css/*.css'])
  .pipe(rename({
    suffix: '.min'
  }))
  .pipe(cssnano())
  .pipe(gulp.dest('app/css'));
})
gulp.task('concatcss', function() {
  return gulp.src("app/css/*.min.css")
  .pipe(concat('style.min.css'))
  .pipe(gulp.dest('home/css'));
})
// Watchers
gulp.task('watch', function() {
  gulp.watch('app/index.html', browserSync.reload);
  gulp.watch('app/css/*.css', browserSync.reload);
  gulp.watch('app/js/*.js', browserSync.reload);
})

// Optimization Tasks
// ------------------

// Optimizing CSS and JavaScript
gulp.task('useref', function() {

  return gulp.src('app/index.html')
    .pipe(rename("index.html"))
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('home'));
});

// Optimizing Images
gulp.task('images', function() {
  return gulp.src('app/img/**/*.+(png|jpg|jpeg|gif|svg)')
    // Caching images that ran through imagemin
    .pipe(cache(imagemin({
      interlaced: true,
    })))
    .pipe(gulp.dest('home/images'))
});

// Copying fonts
gulp.task('fonts', function() {
  return gulp.src('app/fonts/**/*')
    .pipe(gulp.dest('home/fonts'))

})

gulp.task('devfonts', function() {
	return gulp.src('app/devicons-master/**/*')
    	.pipe(gulp.dest('home/devicons-master'))

})

gulp.task('addprojects', function() {
	return gulp.src('app/projects/**/*')
    	.pipe(gulp.dest('home/projects'))

})

// Cleaning
gulp.task('clean', function() {
  return del.sync('home').then(function(cb) {
    return cache.clearAll(cb);
  });
})

gulp.task('clean:dist', function() {
  return del.sync(['home/**/*', '!home/images', '!home/images/**/*']);
});

// Build Sequences
// ---------------

gulp.task('default', function(callback) {
  runSequence(['sass', 'browserSync', 'watch'],
    callback
  )
})

gulp.task('build', function(callback) {
  runSequence(
    'clean:dist',
    ['sass', 'useref', 'images', 'fonts','devfonts','addprojects'],
    callback
  )
})
