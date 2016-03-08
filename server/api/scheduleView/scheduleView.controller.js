/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/scheduleViews              ->  index
 * POST    /api/scheduleViews              ->  create
 * GET     /api/scheduleViews/:id          ->  show
 * PUT     /api/scheduleViews/:id          ->  update
 * DELETE  /api/scheduleViews/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import ScheduleView from './scheduleView.model';

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function saveUpdates(updates) {
  return function(entity) {
    var updated = _.merge(entity, updates);
    return updated.saveAsync()
      .spread(updated => {
        return updated;
      });
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.removeAsync()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

// Gets a list of ScheduleViews
export function index(req, res) {
  ScheduleView.findAsync()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single ScheduleView from the DB
export function show(req, res) {
  ScheduleView.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new ScheduleView in the DB
export function create(req, res) {
  ScheduleView.createAsync(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Updates an existing ScheduleView in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  ScheduleView.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a ScheduleView from the DB
export function destroy(req, res) {
  ScheduleView.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
