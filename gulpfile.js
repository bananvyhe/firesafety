var gulp = require('gulp');
var postcssgulp = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');
var precss = require('precss');
var hamster = require('postcss-hamster');
var livereload = require('gulp-livereload');
var assets  = require('postcss-assets');

gulp.task('css', function () {
   var plugins = [
        precss({
                "lookup": false
        }),
        hamster(),
        autoprefixer({browsers: ["> 0.5%"]}),
        assets({
          loadPaths: ['app/assets/images/']
        })

        
    ];
  return gulp.src('app/assets/stylesheets/postcss/application.css')
    
    .pipe(sourcemaps.init())
    .pipe(postcssgulp(plugins))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('app/assets/stylesheets'))
    .pipe(livereload());
     
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('app/assets/stylesheets/postcss/application.css', ['css']);
});

gulp.task('default', ['watch']);

