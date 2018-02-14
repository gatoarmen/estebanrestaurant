"use strict"; 

// imports
const gulp = require ('gulp')
const htmlbeautify = require('gulp-html-beautify');
const less = require('gulp-less');
const path = require('path');

// paths
const htmlSources = './*.html'
const cssSources = './css/*.less'

  
 gulp.task('less', function () {
   return gulp.src('./css/*.less')
     .pipe(less())
     .pipe(gulp.dest('./css'));
 });




gulp.task('htmlbeautify', function() {
gulp.src(htmlSources)
    .pipe(htmlbeautify({indentSize: 2}))
    .pipe(gulp.dest('./'))
});

gulp.task ('default' , ['htmlbeautify', 'less']); 