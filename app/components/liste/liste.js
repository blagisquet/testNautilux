'use strict';

angular.module('test.liste', ['ngRoute', 'ui.bootstrap'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/liste', {
    templateUrl: 'components/liste/liste.html',
    controller: 'ListeCtrl'
  });
}])

.controller('ListeCtrl', ['$scope', 'http', function($scope, $http) {
  $scope.now = new Date();
  $scope.now.toISOString();

    // GET ALL RECORD
    $http({
      method: 'post',
      url: 'API/read.py',
    }).then(function successCallback(response) {
      $scope.intervention = response.data;
    });

    //ADD NEW RECORD
    $scope.add = function () {
      $http({
        method: 'post',
        url: 'API/create.py',
        data: { title: $scope.title, description: $scope.description, localisation: $scope.localisation, name: $scope.name, date: $scope.date }
      }).then(function successCallback(response) {
        if (response.data.length > 0) {
          $scope.users.push(response.data[0]);
        } else {
          console.log('Record not inserted');
        }
      });
    }
}])
