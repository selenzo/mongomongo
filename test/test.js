/* jshint -W117*/
var assert = require('assert'),
    request = require('supertest'),
    http = require('http');
//TODO: More tests
describe('MongoMongo tests', function () {
    this.timeout(0);
    describe('WebServer Started', function () {
        it('Should return 200', function (done) {
            request('http://localhost:3000')
                .get('/')
                .expect(200, done);
        });
        it('Should return 404', function (done) {
            request('http://localhost:3000/wtf')
                .get('/')
                .expect(404, done);
        });
    });
    describe('WebServer Api', function () {
        it('Status ok', function (done) {
            request('http://localhost:3000/api')
                .get('/')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200, {
                    status: 'ok'
                }, done);
        });
    });
});
