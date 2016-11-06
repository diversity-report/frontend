'use strict';
require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

const angular = require('angular');
const ngRoute = require('angular-route');
const app = angular.module('drApp', [ngRoute]);

require('./controller/main_ctrl.js')(app);

app.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/', {
    template: require('./html/index.html')
  })
  .when('/contribute', {
    template: require('./templates/contribute.html')
  });
}]);
