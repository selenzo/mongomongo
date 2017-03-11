/*jshint -W117*/

var http = require('http');

http.createServer(httpRequest).listen(8080, httpServerStart);

function httpServerStart() {
    console.info("Server startded");
}

function httpRequest(req, res) {
    console.info("Request!");

    res.end();
}
