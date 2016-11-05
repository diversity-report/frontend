'use strict';
require('!!file?name=[name].[ext]!./html/index.html');


const angular = require('angular');
const app = angular.module('drApp', []);

require('./controller/main_ctrl.js');

app.config(['$routeProvider', ($routeProvider) => {
  // $routeProvider
  // .when('/', {
  //
  // });
}]);
