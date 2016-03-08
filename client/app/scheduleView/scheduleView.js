'use strict';

angular.module('angularSeedApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('scheduleView', {
        url: '/scheduleView',
        templateUrl: 'app/scheduleView/scheduleView.html',
        controller: 'ScheduleViewCtrl'
      });
  });
