var gulp = require('gulp');
var streamify = require('gulp-streamify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
// var buffer = require('vinyl-buffer');
var path = require('path');
var less = require('gulp-less');
var minifyCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
// var ngAnnotate = require('gulp-ng-annotate');
// var concat = require('gulp-concat')
//var babel = require('babelify');

gulp.task('browserify', function () {
    // Grabs the app.js file
    return browserify('./src/script/app.js', { debug: true })
        .bundle()
        .pipe(source('main.min.js'))
        .pipe(gulp.dest('public'));
});
gulp.task('minify-js', function() {
  return browserify('./src/script/app.js', { debug: true })
        .bundle()
        .pipe(source('main.min.js'))
        .pipe(streamify(uglify({ mangle: false }))) 
        .pipe(gulp.dest('public'));
});
gulp.task('watch', function () {
    gulp.watch('./src/script/**/*.js', ['browserify'])
});

gulp.task('css', function () {
    return gulp.src('./src/style/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'src/style', 'includes') ]
    }))
    // .pipe(source('custom.css'))
    .pipe(gulp.dest('./public/style'));
});

gulp.task('default', ['minify-js','css']);