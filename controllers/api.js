/*jshint -W117*/

var express = require('express'),
    router = express.Router();

router.get('/', function (req, res) {
    res.set({
        'Content-Type': 'application/json',
//        'Content-Length': jsonTestData.length,
//        'Last-Modified': new Date(),
//        'Expires': getExpiration(),
//        'ETag': null
    });

    res.json({
        'status': 'ok'
    });
});

module.exports = router;
