'use strict';
var angularMoonApp = angular.module('angularMoon', [
	'ngRoute'
]).config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
}]);