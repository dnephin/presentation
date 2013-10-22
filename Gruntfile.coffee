

module.exports = (grunt) ->

    grunt.initConfig
        watch:
            main:
                files: ['index.html']
                options:
                    spawn: false
                    livereload: 8887


    grunt.loadNpmTasks 'grunt-contrib-watch'

    grunt.registerTask 'default', ['watch']
