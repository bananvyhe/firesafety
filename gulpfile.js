var gulp = require('gulp');
var postcssgulp = require('gulp-postcss');
var livereload = require('gulp-livereload');
var autoprefixer = require("autoprefixer");
var  precss = require("precss");
var hamster = require("postcss-hamster");
var sourcemaps = require('gulp-sourcemaps');

gulp.task('default', function () {
  var processors = [precss({
    "lookup": false
  }), hamster, autoprefixer({
    browsers: ["> 0.5%"]
  })];
   
            
       

  livereload.listen();
    return gulp.src('app/assets/stylesheets/style.css')
        .pipe(sourcemaps.init())
        .pipe(postcssgulp(processors))
    // .pipe(cssnano())
        .pipe(sourcemaps.write("."))
        .pipe(postcssgulp())
        .pipe(gulp.dest('app/assets/stylesheets/application.css'));
});
