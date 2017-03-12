/*jshint -W117*/

var http = require('http'),
    router = require('./src/router');

http.createServer(router.Route).listen(8080, httpServerStart);

function httpServerStart() {
    console.info("Server startded");
}
