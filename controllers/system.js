/*jshint -W117*/

var express = require('express'),
    router = express.Router(),
    database = require('monk'),
    db = require('monk'),
    config = require('config-yml'),
    DbStatus = "Disconnected";

router.get('/sys', function (req, res) {
    res.write("123");
    res.end('system information');
});

setInterval(DbTestConnection, 5000);

Connect();
module.exports = router;

function DbTestConnection() {
    if (DbStatus != "Connected") {
        try {
            var temp = require('monk')(config.db.connectionString)
                .then((result) => {
                    console.info("Monk up");
                    result.close()
                })
                .catch((err) => {
                    console.info("Monk Down");
                    Connect();
                })
        } catch (error) {
            console.log(error);
        }
    }
}

function Connect() {
    database = require('monk')(config.db.connectionString).then((result) => {
            console.info("Monk connected");
            state = "Connected";
            db = result;
            router.use(function (req, res, next) {
                req.db = result; //db;
                next();
            });
        })
        .catch((err) => {
            state = "Disconnected";
            router.use(function (req, res, next) {
                next();
            });
        });
};
// use mongomongo; db.createUser({user: "mongomongo",pwd: "test",roles: [{role: "readWrite",db: "mongomongo"}]})
