var gulp = require('gulp');
var postcssgulp = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');
var precss = require('precss');
var hamster = require('postcss-hamster');

 

gulp.task('css', function () {
   var plugins = [
        precss({
                "lookup": false
        }),
        hamster(),
        autoprefixer({browsers: ["> 0.5%"]})
        
    ];
  
  return gulp.src('app/assets/stylesheets/postcss/application.css')
    
    .pipe(sourcemaps.init())
    .pipe(postcssgulp(plugins))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('app/assets/stylesheets'));
});

gulp.task('default', ['css']);