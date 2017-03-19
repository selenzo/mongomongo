/*jshint -W117*/

var express = require('express'),
    app = express(),
    timeout = require('connect-timeout'),
    config = require('config-yml'),
    bodyParser = require('body-parser'),
    cookieSession = require('cookie-session'),
    cookieParser = require('cookie-parser');

app.use(express.static(__dirname + '/public'));

app.use(cookieParser());
app.use(cookieSession({
    name: 'session',
    keys: ['mongomongo'],
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));

app.use(bodyParser.json());

app.use(timeout(config.app.timeout));

app.use(require('./controllers/db'));

app.use(require('./controllers/auth'));

app.use(require('./controllers'));

app.listen(config.app.port, function () {
    console.info("Its alive!");
});
