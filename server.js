/*jshint -W117*/

var express = require('express'),
    app = express(),
    timeout = require('connect-timeout'),
    config = require('config-yml');

app.use(express.static(__dirname + '/public'));
app.use(timeout('5s'));
app.use(require('./controllers/db'));
app.use(require('./controllers'));

app.listen(config.app.port, function () {
    console.info("Its alive!");
});
