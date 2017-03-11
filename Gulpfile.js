/* jshint -W117*/
var gulp = require('gulp'),
    nodemon = require('gulp-nodemon');


gulp.task('start', function () {
    var stream = nodemon({
            script: 'server.js',
            ext: 'js',
            ignore: ['node_modules/'],
            tasks: []
        });
});
