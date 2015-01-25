module.exports = function(grunt) {

    // Bootstrap grunt
    grunt.initConfig({

        // Read package file
        pkg: grunt.file.readJSON('package.json'),

        // Create sass task and define parameters. Converts sass to compressed standard CSS.
        sass: {
            dist: {
                options: {
                    lineNumbers: true //Turn this off once live.
                },
                files: {
                    'style.css': 'assets/sass/style.scss',
                }
            }
        },

        // Create uglify task and define parameters. Uglify consolidates and minifies JS.
        uglify: {
            build: {
                files: {
                    'assets/js/scripts.min.js': ['assets/js/*.js', '!assets/js/scripts.min.js']
                },
                options: {
                    compress: false,
                    mangle: false,
                    beautify: {
                      width: 80,
                      beautify: true
                    }
                    // mangle: {
                    //     toplevel: true,
                    //     screw_ie8: true
                    //
                    // },
                    // compress: {
                    //     screw_ie8: true,
                    //     sequences: true,
                    //     properties: true,
                    //     dead_code: true,
                    //     drop_debugger: true,
                    //     comparisons: true,
                    //     conditionals: true,
                    //     evaluate: true,
                    //     booleans: true,
                    //     loops: true,
                    //     unused: true,
                    //     hoist_funs: true,
                    //     if_return: true,
                    //     join_vars: true,
                    //     cascade: true,
                    //     negate_iife: true,
                    //     drop_console: true
                    // }
                }
            }
        },

        // Setup HTML Hint task to let us know if HTML will not validate
        htmlhint: {
            html1: {
                options: {
                    'tag-pair': true,
                    'doctype-first': true,
                    'src-not-empty': true,
                    'id-unique': true,
                    'attr-lowercase': true,
                    'tagname-lowercase': true
                },
                src: ['./*.html']
            }
        },

        // Setup watcher to do stuff all the time (this is just another task)
        // This will automatically execute the uglify and sass tasks when the specified files change
        watch: {
            css: {
                files: 'assets/sass/*.scss',
                tasks: ['sass']
            },
            js: {
                files: ['assets/js/*.js', '!assets/js/scripts.min.js'],
                tasks: ['uglify']
            },
            html: {
                files: './*.html',
                tasks: ['htmlhint']
            },
            options: {
                livereload: true
            }
        }

    });

    // Load task libs
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-htmlhint');

    // Begin watcher when 'grunt' is executed in bash/cmd prompt
    // the 'watch' task will minify js, convert sass to css etc
    grunt.registerTask('default', ['watch']);

    // Setup another task to only run stuff once, without monitoring
    grunt.registerTask('pass', ['sass', 'uglify', 'htmlhint']);

}
