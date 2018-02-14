"use strict"; 

// imports
const gulp = require ('gulp')
const htmlbeautify = require('gulp-html-beautify');
const less = require('gulp-less');
const autoprefixer = require('gulp-autoprefixer');
const bs = require('browser-sync').create();

// paths
const htmlSources = './*.html'
const cssSources = './css/*.less'

  
 gulp.task('less', function () {
   return gulp.src('./css/*.less')
     .pipe(less()
     .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    })))
     
     .pipe(gulp.dest('./css'));
 });


 gulp.task('browser-sync', function() {
    bs.init({
        server: {
            baseDir: "./"
        }
    });
});




gulp.task('htmlbeautify', function() {
gulp.src(htmlSources)
    .pipe(htmlbeautify({indentSize: 2}))
    .pipe(gulp.dest('./'))
});

gulp.task ('default' , ['htmlbeautify', 'less']); 


gulp.task('watch', function(){
    gulp.watch(cssSources, ['less']).on('change', bs.reload);
    gulp.watch(htmlSources, ['htmlbeautify']).on('change', bs.reload);
   })
    
   gulp.task('default', ['browser-sync', 'watch']);
 