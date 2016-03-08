'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
    'title': 'Home',
    'state': 'main'
  }, {
    'title': 'Schedules',
    'state': 'scheduleView'
  }];

  isCollapsed = true;
  //end-non-standard

  constructor() {
    }
}

angular.module('angularSeedApp')
  .controller('NavbarController', NavbarController);
