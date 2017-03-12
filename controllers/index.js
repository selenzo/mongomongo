/*jshint -W117*/
var express = require('express'),
    router = express.Router();

router.use('/api', require('./api'));

router.get('/', function (req, res) {
    res.send('Home page');
});

router.get('/about', function (req, res) {
    res.send('Learn about us');
});

module.exports = router;
