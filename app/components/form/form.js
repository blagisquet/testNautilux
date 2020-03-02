'use strict';

angular.module('test.form', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/form', {
    templateUrl: 'components/form/form.html',
    controller: 'formCtrl'
  });
}])

.controller('formCtrl', ['$scope', '$http', function ($scope, $http) {
  $scope.master = { title: "", description: "", localisation: "", name: "", date: "" };
  $scope.reset = function () {
    $scope.intervention = angular.copy($scope.master);
  };
  $scope.reset();
}]);