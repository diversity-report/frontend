'use strict';
const angular = require('angular');
const app = angular.module('drApp', []);

app.controller('mainController', [ '$http','$scope', function($http,$scope){
  $scope.data = {};
  // this.getOneCompany = function(companyId){
    // var url = `${__API_URL__}/api/company/${companyId}`;
  var url = `${__API_URL__}/api/company/581e6b0fe30adb51f67eab67`;
  $http.get(url)
    .success(function(data) {
      $scope.data = data;
      console.log('@@@@@@@@@@@@@@@@@@',data);
    })
      .error(function(data) {
        console.log('Error: ' + data);
      });
}]);
