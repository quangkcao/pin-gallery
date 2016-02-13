/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
    // Task configuration.
    less: {
      development: {
        options: {
          paths: ["styles"]
        },
        files: {
          "styles/bundle.css": [
            "./vendors/normalize-css/normalize.css",
            "styles/less/screen.less",
            "./vendors/fancybox/source/jquery.fancybox.css",
            "styles/less/vendors.less"
          ]
        }
      },
      // production: {
      //   options: {
      //     paths: ["assets/css"],
      //     plugins: [
      //       new (require('less-plugin-autoprefix'))({browsers: ["last 2 versions"]}),
      //       new (require('less-plugin-clean-css'))(cleanCssOptions)
      //     ],
      //     modifyVars: {
      //       imgPath: '"http://mycdn.com/path/to/images"',
      //       bgColor: 'red'
      //     }
      //   },
      //   files: {
      //     "path/to/result.css": "path/to/source.less"
      //   }
      // }
    },
    babel: {
        options: {
            sourceMap: true,
            presets: ['es2015']
        },
        dist: {
          src: [
            './index.js',
          ],
          dest: 'bundle.js',

        }
    },
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: [
          './vendors/jquery/dist/jquery.js',
          './vendors/fancybox/source/jquery.fancybox.js'
        ],
        dest: 'js/bundle.js',
      }
    },
    uglify: {
      // options: {
      //   beautify: true,
      // },
      dist: {
        src: '<%= concat.dist.dest %>',
        dest: 'js/bundle.min.js',
      }
    },
    // jshint: {
    //   options: {
    //     curly: true,
    //     eqeqeq: true,
    //     immed: true,
    //     latedef: true,
    //     newcap: true,
    //     noarg: true,
    //     sub: true,
    //     undef: true,
    //     unused: true,
    //     boss: true,
    //     eqnull: true,
    //     browser: true,
    //     globals: {}
    //   },
    //   gruntfile: {
    //     src: 'Gruntfile.js'
    //   },
    //   lib_test: {
    //     src: ['lib/**/*.js', 'test/**/*.js']
    //   }
    // },
    // qunit: {
    //   files: ['test/**/*.html']
    // },
    watch: {
      css: {
        files: ['styles/less/*.*'],
        tasks: ['less'],
      },
    }
    //   lib_test: {
    //     files: '<%= jshint.lib_test.src %>',
    //     tasks: ['jshint:lib_test', 'qunit']
    //   }
    // }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  // grunt.loadNpmTasks('grunt-contrib-qunit');
  // grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
// Default task.
  grunt.registerTask('default', ['less', 'concat', 'uglify']);

};
