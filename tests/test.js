/* jshint -W117*/
var assert = require('assert'),
    http = require('http');

describe('MongoMongo tests', function () {
    this.timeout(0);

    describe('WebServer Started', function () {
        it('Should return 200', function (done) {
            http.get('http://localhost:8080', function (res) {
                assert.equal(200, res.statusCode);
                done();
            });
        });
        it('Should return 404', function (done) {
            http.get('http://localhost:8080/wtf', function (res) {
                assert.equal(404, res.statusCode);
                done();
            });
        });
    });

});
