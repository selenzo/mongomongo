/*jshint -W117*/

var express = require('express'),
    app = express(),
    timeout = require('connect-timeout'),
    config = require('config-yml'),
    bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(timeout(config.app.timeout));
app.use(require('./controllers/db'));
app.use(require('./controllers'));

app.listen(config.app.port, function () {
    console.info("Its alive!");
});
