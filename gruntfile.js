module.exports = function(grunt) {  
  //grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
; 
  //var compass = require('compass-importer');
  

  grunt.initConfig({

     postcss: {
      options: {
        map: true, // inline sourcemaps

         
        processors: [
          require('pixrem')(), // add fallbacks for rem units
          require('autoprefixer')({browsers: 'last 2 versions'}), // add vendor prefixes
          //require('cssnano')() // minify the result
        ]
      },

      dist: {
        src: 'app/assets/stylesheets/*.css',
        dest: 'app/assets/stylesheets/application.css'
      }
    },
          
    // uglify: {
    //   my_target: {
    //     files: {
    //      // 'app/assets/javascripts/script.js': ['app/assets/javascripts/js/*.js']
    //     } //files
    //   } //my_target
    // }, //uglify
     
    sass: {
      // options: {
      //     importer: compass
      // },
      dev: {
        

        files: {
          'app/assets/stylesheets/style.css': 'app/assets/stylesheets/application.css.scss',
        },
        
        
      }
    },

    watch: {

      options: { 
        livereload: true 
      },
      scripts: {
        files: ['app/assets/javascripts/js/*.js'],
        //tasks: ['uglify']
      }, //script
      sass: {
        files: [
        '**/*.scss' 
        
        ],

     
        tasks: ['sass:dev'],
        options: { 
          livereload: true,
        }
              
      }, //sass

      html: {
        files: ['**/*.html.erb']
      },
      css: {
        files: ['app/assets/stylesheets/style.css'],
        tasks: ['postcss:dist'],
        options: { 
          livereload: true,
        }
      }

    } //watch
  }) //initConfig
  grunt.loadNpmTasks('grunt-postcss')
  grunt.registerTask('default', ['watch','sass', 'postcss']);
  
} //exports