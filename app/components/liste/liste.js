'use strict';

angular.module('test.liste', ['ngRoute', 'ui.bootstrap'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/liste', {
      templateUrl: 'components/liste/liste.html',
      controller: 'ListeCtrl'
    });
  }])

  .module('app', [
    '720kb.datepicker'
  ])

  .controller('ListeCtrl', ['$scope', 'http', function ($scope, $http) {
    $scope.now = new Date();
    $scope.now.toISOString();

    // GET ALL RECORDS
    $http({
      method: 'post',
      url: 'API/read.py',
    }).then(function successCallback(response) {
      $scope.intervention = response.data;
    });

    //REMOVE RECORD
    $scope.remove = function (index, id) {
      $http({
        method: 'post',
        url: 'delete.py',
        data: { id: id }
      }).then(function successCallback(response) {
        if (response.data === 1) {
          $scope.users.splice(index, 1);
        } else {
          console.log('Record not deleted');
        }
      });
    }
  }]);
