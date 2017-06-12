module.exports = function(grunt) {  
  //grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
   
  //var compass = require('compass-importer');
  grunt.registerTask('default', ['watch','sass']);

  grunt.initConfig({
          
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
          'app/assets/stylesheets/application.css': 'app/assets/stylesheets/application.css.scss',
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
        },
              
      }, //sass

      html: {
        files: ['**/*.html.erb']
      }
    } //watch
  }) //initConfig
  
} //exports