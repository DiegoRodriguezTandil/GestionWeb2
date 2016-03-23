'use strict';

var app = require('../..');
var request = require('supertest');

var newThing;

describe('Customer API:', function() {

  describe('GET /api/v1/customers', function() {
    var things;

    beforeEach(function(done) {
      request(app)
        .get('/api/v1/customers')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          things = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      things.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/v1/customers', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/v1/customers')
        .send({
          name: 'New Thing',
          info: 'This is the brand new Customer!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          newThing = res.body;
          done();
        });
    });

    it('should respond with the newly created Customer', function() {
      newThing.name.should.equal('New Customer');
      newThing.info.should.equal('This is the brand new Customer!!!');
    });

  });

  describe('GET /api/v1/customers/:id', function() {
    var thing;

    beforeEach(function(done) {
      request(app)
        .get('/api/v1/customers/' + newThing._id)
        
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          thing = res.body;
          done();
        });
    });

    afterEach(function() {
      thing = {};
    });

    it('should respond with the requested customer', function() {
      thing.name.should.equal('New customer');
      thing.info.should.equal('This is the brand new customer!!!');
    });

  });

  describe('PUT /api/v1/customers/:id', function() {
    var updatedThing

    beforeEach(function(done) {
      request(app)
        .put('/api/v1/customers/' + newThing._id) 
        
        .send({
          name: 'Updated Customer',
          info: 'This is the updated customer!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedThing = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedThing = {};
    });

    it('should respond with the updated customer', function() {
      updatedThing.name.should.equal('Updated Csutomer');
      updatedThing.info.should.equal('This is the updated customer!!!');
    });

  });

  describe('DELETE /api/v1/customers/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/v1/customers/' + newThing._id)
        
        .expect(204)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when customer does not exist', function(done) {
      request(app)
        .delete('/api/v1/customers/' + newThing._id)
        
        .expect(404)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
