'use strict';

(function() {

  class ScheduleViewCtrl {

    constructor($http, $scope) {
      self = this;
      this.$http = $http;
      this.times = [];
      this.jobTitle = '';
      this.jobs = ['FoodService', 'ScoreRoom', 'Entertainment'];
    }

  // END CONSTRUCTOR

    generateTimes() {
      var times = this.times;
      var t = 0;
      for(var i=9; i<= 17; i++) {
        for(var j=0; j<6; j++) {
          if(j==0){
            times[t++]= (i + ':' + j*10 + "0");
          } else {
            times[t++]= (i + ':' + j*10);
          }
        }
      }
      return(times);
    }

    //needs to be tied to the button in the html
    addJob() {
      var jobTitle = this.jobTitle;
      var jobs = this.jobs;
      jobs.push(jobTitle);
      console.log(jobTitle);

    }

  }


angular.module('angularSeedApp')
  .controller('ScheduleViewCtrl', ScheduleViewCtrl);

})();




