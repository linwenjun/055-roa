var gulp = require('gulp');
var reactify = require('reactify');
var browserify = require('gulp-browserify');
var connect = require('gulp-connect');

gulp.task('scripts', function() {
    gulp.src('src/scripts/main.js')
        .pipe(browserify({
          transform: [reactify],
          insertGlobals : true,
          debug : !gulp.env.production
        }))
        .pipe(gulp.dest('./build/js'))
});

gulp.task('connect', function() {
  connect.server();
});
