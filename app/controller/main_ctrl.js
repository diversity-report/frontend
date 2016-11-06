'use strict';

module.exports = (app) => {
  app.controller('mainController', ['$http','$scope', function($http,$scope){
    $scope.data = {};
    $scope.newCompany = {};
    $scope.test = 'Hello';
    // this.getOneCompany = function(companyId){
    //   var url = `${__API_URL__}/api/company/${companyId}`;
    // var url = `${__API_URL__}/api/company/581e6b0fe30adb51f67eab67`;
    // $http.get(url)
    //   .success(function(data) {
    //     $scope.data = data;
    //     console.log('@@@@@@@@@@@@@@@@@@',data);
    //     console.log('!!!!!!!!!!!!!!!!!',$scope.data.gender);
    //   })
    //     .error(function(data) {
    //       console.log('Error: ' + data);
    //     });
    // }
    // $scope.createCompany = function() {
    //   var url = `${__API_URL__}/api/newCompany/`;
    //   $http.post(url)
    //     .success(function(data) {
    //       $scope.newCompany = data; // clear the form so our user is ready to enter another
    //       $scope.data = data;
    //       console.log('%%%%%%%%%%',data);
    //     })
    //     .error(function(data) {
    //       console.log('Error: ' + data);
    //     });
    // };
  }]);
};
