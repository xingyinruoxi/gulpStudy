var gulp = require('gulp');
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
gulp.task('test', function () {
    console.log('Hello,test');
});
gulp.task('one', function () {
    console.log('one is done');
});