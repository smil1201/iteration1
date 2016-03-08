'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var scheduleViewCtrlStub = {
  index: 'scheduleViewCtrl.index',
  show: 'scheduleViewCtrl.show',
  create: 'scheduleViewCtrl.create',
  update: 'scheduleViewCtrl.update',
  destroy: 'scheduleViewCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var scheduleViewIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './scheduleView.controller': scheduleViewCtrlStub
});

describe('ScheduleView API Router:', function() {

  it('should return an express router instance', function() {
    scheduleViewIndex.should.equal(routerStub);
  });

  describe('GET /api/scheduleViews', function() {

    it('should route to scheduleView.controller.index', function() {
      routerStub.get
        .withArgs('/', 'scheduleViewCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/scheduleViews/:id', function() {

    it('should route to scheduleView.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'scheduleViewCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/scheduleViews', function() {

    it('should route to scheduleView.controller.create', function() {
      routerStub.post
        .withArgs('/', 'scheduleViewCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/scheduleViews/:id', function() {

    it('should route to scheduleView.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'scheduleViewCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/scheduleViews/:id', function() {

    it('should route to scheduleView.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'scheduleViewCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/scheduleViews/:id', function() {

    it('should route to scheduleView.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'scheduleViewCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
