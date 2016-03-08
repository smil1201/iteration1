'use strict';

var app = require('../..');
import request from 'supertest';

var newScheduleView;

describe('ScheduleView API:', function() {

  describe('GET /api/scheduleViews', function() {
    var scheduleViews;

    beforeEach(function(done) {
      request(app)
        .get('/api/scheduleViews')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          scheduleViews = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      scheduleViews.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/scheduleViews', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/scheduleViews')
        .send({
          name: 'New ScheduleView',
          info: 'This is the brand new scheduleView!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newScheduleView = res.body;
          done();
        });
    });

    it('should respond with the newly created scheduleView', function() {
      newScheduleView.name.should.equal('New ScheduleView');
      newScheduleView.info.should.equal('This is the brand new scheduleView!!!');
    });

  });

  describe('GET /api/scheduleViews/:id', function() {
    var scheduleView;

    beforeEach(function(done) {
      request(app)
        .get('/api/scheduleViews/' + newScheduleView._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          scheduleView = res.body;
          done();
        });
    });

    afterEach(function() {
      scheduleView = {};
    });

    it('should respond with the requested scheduleView', function() {
      scheduleView.name.should.equal('New ScheduleView');
      scheduleView.info.should.equal('This is the brand new scheduleView!!!');
    });

  });

  describe('PUT /api/scheduleViews/:id', function() {
    var updatedScheduleView;

    beforeEach(function(done) {
      request(app)
        .put('/api/scheduleViews/' + newScheduleView._id)
        .send({
          name: 'Updated ScheduleView',
          info: 'This is the updated scheduleView!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedScheduleView = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedScheduleView = {};
    });

    it('should respond with the updated scheduleView', function() {
      updatedScheduleView.name.should.equal('Updated ScheduleView');
      updatedScheduleView.info.should.equal('This is the updated scheduleView!!!');
    });

  });

  describe('DELETE /api/scheduleViews/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/scheduleViews/' + newScheduleView._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when scheduleView does not exist', function(done) {
      request(app)
        .delete('/api/scheduleViews/' + newScheduleView._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
