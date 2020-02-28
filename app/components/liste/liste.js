'use strict';

angular.module('test.liste', ['ngRoute', 'ui.bootstrap'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/liste', {
    templateUrl: 'components/liste/liste.html',
    controller: 'ListeCtrl'
  });
}])

.controller('ListeCtrl', [function($scope) {
}])
