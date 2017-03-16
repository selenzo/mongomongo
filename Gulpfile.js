/* jshint -W117*/
var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    exec = require('child_process').exec;

gulp.task('start-mongodb', runCommand('mongod --dbpath ./data --journal --storageEngine=mmapv1'));
//FIXME: hardcore db terminate
gulp.task('stop-mongodb', runCommand('mongo admin --eval "db.shutdownServer();"'));

gulp.task('start-server', function () {
    nodemon({
        script: 'server.js',
        ext: 'js',
        ignore: ['node_modules/', 'data/'],
        tasks: []
    });
});

function runCommand(command) {
    return function (cb) {
        exec(command, function (err, stdout, stderr) {
            console.log(stdout);
            console.log(stderr);
            cb(err);
        });
    };
}
