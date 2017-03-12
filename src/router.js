/*jshint -W117*/

module.exports.Route = function (req, res) {
    router(req, res, finalhandler(req, res));
};

var router = require('router')(),
    finalhandler = require('finalhandler');

var web = router.route('/web/');

web.get(function (req, res) {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end('Web')
});

router.get('/', function (req, res) {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end('Hello World!');
});

router.get('/:id', function (req, res, next) {
    console.log(1231);
    res.end();
});
