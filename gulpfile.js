var gulp = require('gulp');
var postcssgulp = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');
var precss = require('precss');

 

gulp.task('css', function () {
   var plugins = [
        precss(),
        autoprefixer({browsers: ['last 1 version']})
    ];
  
  return gulp.src('app/assets/stylesheets/postcss/application.css')
    
    .pipe(sourcemaps.init())
    .pipe(postcssgulp(plugins))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('app/assets/stylesheets'));
});

gulp.task('default', ['css']);