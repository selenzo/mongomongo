var router = require('router')(),
    finalhandler = require('finalhandler');

module.exports.Route = function (req, res) {

    router(req, res, finalhandler(req, res))
}

router.get('/', function (req, res) {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end('Hello World!')
})
