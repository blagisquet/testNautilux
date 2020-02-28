'use strict';

angular.module('test.form', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/form', {
    templateUrl: 'components/form/form.html',
    controller: 'formCtrl'
  });
}])

.controller('formCtrl', [function($scope) {
  $scopte.master = {title: "", description: "", localisation: "", name: "", date: ""};
  $scope.reset = function() {
    $scope.intervention = angular.copy($scope.master);
  };
  $scope.reset();
}])

.controller('formCtrl', ['$scope', '$https', function($scope, $https) {
  $scope.master = {title: "", description: "", localisation: "", name: "", date: ""};
  $scope.reset = function() {
    $scope.intervention = angular.copy($scope.master);
  };
  $scope.reset();

  // GET ALL RECORD
  $http({
    method: 'post',
    url: 'API/read.py',
  }).then(function successCallback(response) {
    $scope.intervention = response.data;
  });

  //ADD NEW RECORD
  $scope.add = function() {
    $http({
      method: 'post',
      url: 'API/create.py',
      data: {title:$scope.title,description:$scope.description,localisation:$scope.localisation,name:$scope.name,date:$scope.date}
    }).then(function successCallback(response) {
      if(response.data.length > 0) {
        $scope.users.push(response.data[0]);
      } else{
        console.log('Record not inserted');
      }
    });
  }

  //REMOVE RECORD
  $scope.remove = function(index, id) {
    $http({
      method: 'post',
      url: 'delete.py',
      data: {id:id}
    }).then(function successCallback(response) {
      if(response.data === 1) {
        $scope.users.splice(index, 1);
      } else {
        console.log('Record not deleted');
      }
    });
  }
}]);