'use strict';
const angular = require('angular');
const app = angular.module('drApp', []);

app.controller('mainController', [ function(){
  this.test = 'hello world';
  

}]);
