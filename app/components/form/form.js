'use strict';

angular.module('test.form', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/form', {
      templateUrl: 'components/form/form.html',
      controller: 'formCtrl'
    });
  }])

  .module('app', [
    '720kb.datepicker'
  ])

  .controller('formCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.master = { title: "", description: "", localisation: "", name: "", date: "" };
    $scope.reset = function () {
      $scope.intervention = angular.copy($scope.master);
    };
    $scope.reset();

    //ADD NEW RECORD
    $scope.formSubmit = function () {
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
}]);