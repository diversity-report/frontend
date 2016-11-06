'use strict';
require('angular-chart.js');

// const _ = require('lodash');
module.exports = function (app){
  app.controller('mainController', ['$http','$scope', function($http, $scope){
    console.log('hitting in controller');

    $scope.oneCompanyData;
    $scope.newCompany = {};
    $scope.bigData;
    var dataUrl = `${__API_URL__}/api/company`;
    var url = `${__API_URL__}/api/company/581f7b95011ac11dd8b8c19b`;

    $http.get(dataUrl)
    .success(function(data) {
      $scope.bigData = data;
    });
    $scope.searchFilter = function(companyName){
      for(var i=0; i < $scope.bigData.length; i++){
        if($scope.bigData[i].city == companyName){
          console.log($scope.bigData);
          return $scope.bigData;
        }
        else {
          console.log('No data matches with this input');
        }
      }
        // }
      // $scope.oneCompanyData = $scope.bigData.filter((item)=>{
      //   console.log('yayYYYYYYYYYYY',item);
      //   return item.city.includes(`${companyName}`);
      // });
    };
    // }
    $scope.searchById = function(){
      $http.get(url)
      .success(function(data) {
        $scope.information = data;
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
        $scope.info =[];
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });

      $scope.createCompany = (userInput) => {
        console.log(userInput);
        let url = `${__API_URL__}/api/company/newCompany`;
        let matchSchema = {
          companyName: userInput.companyName,
          city: userInput.city,
          state: userInput.state,
          numOfEmployees: userInput.numOfEmployees,
          gender: { female: userInput.female, male: userInput.male, nonbinary: userInput.nonbinary, unreportedGender: userInput.unreportedGender},
          race: {  arabMiddleEastern: userInput.arab,
            latinoHispanic: userInput.latino,
            blackAfricanAmerican: userInput.black,
            asianPacificIslander: userInput.asian,
            nativeAmericanAlaskanNative: userInput.nativeAmerican,
            nativeHawaiianPacificIslander: userInput.hawaiian,
            whiteCaucasian: userInput.white,
            unreportedRace: userInput.unreportedRace
          },
          veteran: userInput.veteran,
          dependants: userInput.dependants
        };
        console.log('postObj', matchSchema);
        $http.post(url, matchSchema).success((data) => {
          console.log('posting', data);
          // $scope.newCompany = data; // clear the form so our user is ready to enter another
          // $scope.data = data;
        })
        .error((data) => {
          console.log('Error: ' + data);
        });
      };
    };
  }]);//end of controller
};//end of module.exports
