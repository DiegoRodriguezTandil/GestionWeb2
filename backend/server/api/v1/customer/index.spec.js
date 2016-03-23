'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var customerCtrlStub = {
  index: 'customerCtrl.index',
  show: 'customerCtrl.show',
  create: 'customerCtrl.create',
  update: 'customerCtrl.update',
  destroy: 'customerCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var customerIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './customer.controller': customerCtrlStub
});

describe('Customer API Router:', function() {

  it('should return an express router instance', function() {
    customerIndex.should.equal(routerStub);
  });

  describe('GET /api/v1/customers', function() {

    it('should route to customers.controller.index', function() {
      routerStub.get
        .withArgs('/', 'customerCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/v1/customers/:id', function() {

    it('should route to customer.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'customerCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/v1/customers', function() {

    it('should route to customer.controller.create', function() {
      routerStub.post
        .withArgs('/', 'customerCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/v1/customers/:id', function() {

    it('should route to customer.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'customerCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/v1/customer/:id', function() {

    it('should route to customer.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'customerCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/v1/customers/:id', function() {

    it('should route to customer.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'customerCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
