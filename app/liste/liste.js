'use strict';

angular.module('myApp.liste', ['ngRoute', 'ui.bootstrap'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/liste', {
    templateUrl: 'liste/liste.html',
    controller: 'ListeCtrl'
  });
}])

.controller('ListeCtrl', [function($scope) {
}]);