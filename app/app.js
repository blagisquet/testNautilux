'use strict';

// Declare app level module which depends on views, and core components
angular.module('test', [
  'ngRoute',
  'test.liste',
  'test.form',
  'ui.bootstrap'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/liste'});
}]);
