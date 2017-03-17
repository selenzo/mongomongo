/*jshint -W117*/
var express = require('express'),
    router = express.Router();

router.use(function (req, res, next) {
    console.info("REQUEST!");
    res.set({
        //TODO: set params
        'Content-Type': 'application/json',
        //        'Content-Length': jsonTestData.length,
        //        'Last-Modified': new Date(),
        //        'Expires': getExpiration(),
        //        'ETag': null
    });
    next();
});

router.get('/', function (req, res) {
    res.json({
        'status': 'ok'
    });
});


router.get('/db', function (req, res) {
    req.db.get('test').find({}, {}).then(function (data) {
        console.log(data.length);
        var answer = {
            'status': 'ok',
            'data': data
        }
        res.set({
            'Content-Length': answer.length
        });
        res.json(answer);
    });
});
module.exports = router;
