/* jshint -W117*/
var assert = require('assert'),
    request = require('supertest'),
    http = require('http'),
    config = require('config-yml'),
    datetime = require('node-datetime');

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
    //FIXME: ot work
    //    describe('Mongodb Started', function (done) {
    //        it('Should connect', function () {
    //            var db = require('monk')(config.db.connectionString + '123', () => {
    //                console.log(db._state);
    //                assert.equals(db._state, 'open');
    ////                done();
    ////                db.close();
    //            });
    //
    //        });
    //    });
    describe('WebServer Api', function () {
        it('Status ok', function (done) {
            request('http://localhost:3000/api')
                .get('/')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200, {
                    status: 'success'
                }, done);
        });
        var time = new Date(datetime.create().now());
        it('Db Put', function (done) {
            var data = {
                collection: "test",
                data: {
                    mocha: 'true',
                    timestamp: time
                }
            };
            request('http://localhost:3000/api/db')
                .put('/')
                .set('Accept', 'application/json')
                .send(data)
                .expect('Content-Type', /json/)
                .expect(200, done);
        });
        it('Db FindOne', function (done) {
            var data = {
                collection: "test",
                filter: {
                    timestamp: time
                }
            };
            request('http://localhost:3000/api/db')
                .get('/')
                .set('Accept', 'application/json')
                .send(data)
                .expect('Content-Type', /json/)
                .expect(200)
                .end(function (err, res) {
                    if (err) return done(err);
                    assert.equal(res.body.data[0].mocha, 'true');
                    done();
                });
        });
        it('Db FindAndDelete', function (done) {
            var data = {
                collection: "test",
                filter: {
                    timestamp: time
                }
            };
            request('http://localhost:3000/api/db')
                .delete('/')
                .set('Accept', 'application/json')
                .send(data)
                .expect('Content-Type', /json/)
                .expect(200)
                .end(function (err, res) {
                    if (err) return done(err);
                    assert.equal(res.body.status, 'success');
                    done();
                });
        });
        it('Db Get', function (done) {
            request('http://localhost:3000/api/db')
                .get('/')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200)
                .end(function (err, res) {
                    if (err) return done(err);
                    done();
                });
        });

    });
});
