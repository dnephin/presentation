

module.exports = (grunt) ->

    grunt.initConfig
        watch:
            main:
                files: ['index.html']
                options:
                    spawn: false
                    livereload: 8887
        web_server:
            options:
                cors: true
                port: 8888
                nevercache: true
            foo: 'bar'

    grunt.loadNpmTasks 'grunt-web-server'
    grunt.loadNpmTasks 'grunt-contrib-watch'

    grunt.registerTask 'default', ['watch']
