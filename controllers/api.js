/*jshint -W117*/

var express = require('express'),
    router = express.Router();

router.get('/', function (req, res) {
    res.json({
        'status': 'ok'
    });
});

module.exports = router;
