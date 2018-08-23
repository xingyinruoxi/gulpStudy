var gulp = require('gulp')
    // jshint = require('gulp-jshint')
;
var jshint=require('gulp-jshint');
/*    plugins = require('gulp-load-plugins')()
plugins.rename = require('gulp-rename');*/
gulp.task('default', function () {
    console.log('Hello,world');
});
gulp.task('dev', ['one'], function () {
    gulp.src('src/js/*.js', {base: 'src'})
        .pipe(gulp.dest('dist'));
    gulp.src('./src/style/*.css')
        .pipe(gulp.dest('dist/css'));
    console.log('Hello,dev');
});
gulp.task('jsLint', function () {
    gulp.src('src/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter())
});
gulp.task('test', function () {
    console.log('Hello,test');
});
gulp.task('one', function () {
    console.log('one is done');
});