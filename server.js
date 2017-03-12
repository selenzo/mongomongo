/*jshint -W117*/
var express = require('express'),
    app = express();

app.use(express.static(__dirname + '/public'));
app.use(require('./controllers'));

//TODO: change port
app.listen(3000, function () {
    console.info("Its alive!");
});