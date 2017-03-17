/*jshint -W117*/

var express = require('express'),
    router = express.Router(),
    config = require('config-yml'),
    db = require('monk')(config.db.connectionString);

console.log("Monk state: " + db._state);

router.use(function (req, res, next) {
    req.db = db;
    next();
});

module.exports = router;

// use mongomongo; db.createUser({user: "mongomongo",pwd: "test",roles: [{role: "readWrite",db: "mongomongo"}]})
