/*jshint -W117*/
var express = require('express'),
    router = express.Router();

router.use('/api', require('./api'));

router.get('/test', function (req, res) {
    req.session.asd = (req.session.asd || 0) + 1 ;

    console.log((req.session.asd || 0) + 1 );

    console.log('Cookies: ', req.cookie);

    console.log(req.session);
    console.log("123");
//    req.session = null;

    res.send('test page ' + req.session.asd);
});

router.get('/about', function (req, res) {

    res.send('Learn about us');
});

module.exports = router;
