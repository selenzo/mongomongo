/*jshint -W117*/
var express = require('express'),
    router = express.Router(),
    monk = require('monk');

router.use(function (req, res, next) {
//    req.session = null;
    if (!req.session.id) {
        req.session.id = monk.id();
    }
    console.log(req.session);
    next();
});

module.exports = router;
