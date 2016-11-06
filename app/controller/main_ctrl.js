'use strict';

require('angular-chart.js');

module.exports = (app) => {
  app.controller('mainController', ['$http','$scope', function($http,$scope){
    $scope.information = {};
    $scope.newCompany = {};
  // this.getOneCompany = function(companyId){
    // var url = `${__API_URL__}/api/company/${companyId}`;
    var url = `${__API_URL__}/api/company/581f41b86b9cf347580994b1`;
    $http.get(url)
    .success(function(data) {
      $scope.information = data;
      // $scope.labels =
      console.log('Company Data Object: ',data);
      let genderLabels = ['Not Reported', 'Non-Binary', 'Male', 'Female'];
      let raceLabels = ['Arab/Middle Eastern', 'Asian/Pacific Islander', 'Black/African American', 'Latino/Hispanic', 'Native American/Alaskan Native', 'Native Hawaiian/Pacific Islander', 'White/Caucasian', 'Not Reported'];
      let dependantsLabels = ['Dependants', 'No Dependants'];
      let veteransLabels = ['Veteran', 'Not Veteran'];
      let nonVeteran = $scope.information.numOfEmployees - $scope.information.veteran;
      let veteranData = [$scope.information.veteran, nonVeteran];
      let noDependants = $scope.information.numOfEmployees - $scope.information.dependants;
      let dependantsData = [$scope.information.dependants, noDependants];
      let genderData = [$scope.information.gender.unreported, $scope.information.gender.nonbinary, $scope.information.gender.male, $scope.information.gender.female];
      let raceData = [$scope.information.race.arabMiddleEastern, $scope.information.race.asianPacificIslander, $scope.information.race.blackAfricanAmerican, $scope.information.race.latinoHispanic, $scope.information.race.nativeAmericanAlaskanNative, $scope.information.race.nativeHawaiianPacificIslander, $scope.information.race.whiteCaucasian, $scope.information.race.unreported];
      console.log('Gender Labels: ' + genderLabels + ', Gender Data: ' + genderData);
      console.log('Race Labels: ' + raceLabels + ', Race Data: ' + raceData);
      console.log('Veteran Labels: ' + veteransLabels + ', Veteran Data: ' + veteranData);
      console.log('Dependant Labels: ' + dependantsLabels + ', Dependant Data: ' + dependantsData);
      // $scope.genderData = [5,2,3,7];
      $scope.genderData = genderData;
      $scope.genderLabels = genderLabels;
      // $scope.raceData = [5,2,3,7,4,6,1,9];
      $scope.raceData = raceData;
      $scope.raceLabels = raceLabels;
      // $scope.veteransData = [5,2];
      $scope.veteranData = veteranData;
      $scope.veteransLabels = veteransLabels;
      // $scope.dependantsData = [5,2];
      $scope.dependantsData = dependantsData;
      $scope.dependantsLabels = dependantsLabels;
    })
      .error(function(data) {
        console.log('Error: ' + data);
      });

  // };
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

    $scope.createCompany = function(data){//delete
      console.log('data', data );
    };

  }]);
};
