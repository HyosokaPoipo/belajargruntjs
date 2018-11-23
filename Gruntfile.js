module.exports = function(grunt) {
    
    // Configuration
    grunt.initConfig({
        // pass in options to plugins
        // refenrece to files etc
    });

    
    // Load plugins
    grunt.loadNpmTasks('');

    
    // Register tasks
    grunt.registerTask('run', function() {
        console.log('running task from grunt');
    });

    grunt.registerTask('testajjah', function() {
        console.log('running test task from grunt');
    });

    grunt.registerTask('allTasks', ['run', 'testajjah'])
}