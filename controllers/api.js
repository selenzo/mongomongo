/*jshint -W117*/
var express = require('express'),
    router = express.Router();

router.use(function (req, res, next) {
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
        'status': 'success'
    });
});

router.get('/db', function (req, res) {
    console.log('GET!');
    req.db.get(req.body.collection || "test").find(req.body.filter || {}, {}).then(function (result) {
        var answer = {
            'status': 'success',
            'data': result
        }
        res.set({
            'Content-Length': answer.length
        });
        res.json(answer);
    });
});

router.put('/db', function (req, res) {
    console.log("PUT!");
    req.db.get(req.body.collection || "test").insert(req.body.data).then(function (result) {
        var answer = {
            'status': result.ok === 1 ? 'error' : 'success'
        }
        res.set({
            'Content-Length': answer.length
        });
        res.json(answer);
    })
});

router.delete('/db', function (req, res) {
    console.log("DELETE!");
    req.db.get(req.body.collection || 'test').findOneAndDelete(req.body.filter).then(function (result) {
        var answer = {
            'status': result.ok === 1 ? 'error' : 'success'
        }
        res.set({
            'Content-Length': answer.length
        });
        res.json(answer);
    })
});

module.exports = router;
