'use strict';

const request = require('supertest');
const app = require('./list');

describe('List endpoint', function() {

  it('responds with 200 status code', function(done) {
    request(app)
      .get('/api/list?from=2&to=3')
      .expect(200)
      .end(done);
  });

  it('responds with text/plain content-type', function(done) {
    request(app)
      .get('/api/list?from=2&to=3')
      .expect('Content-Type', /text\/plain/)
      .end(done);
  });

  it('prints fizzbuzz numbers', function(done) {
    request(app)
      .get('/api/list?from=9&to=10')
      .expect('9 - Fizz\n10 - Buzz')
      .end(done);
  });

});


