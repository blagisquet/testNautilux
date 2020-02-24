'use strict';

angular.module('myApp.form', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/form', {
    templateUrl: 'form/form.html',
    controller: 'FormCtrl'
  });
}])

.controller('FormCtrl', [function() {

}]);

angular.controller('ModalDemoCtrl')