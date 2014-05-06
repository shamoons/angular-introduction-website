'use strict';

var angularMoonApp = angular.module('angularMoon', [
	'ngRoute'
]).config(['$routeProvider, $locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider
    .when('/', {
      templateUrl: 'templates/home.html',
      controller: 'HomeController'
    })
    .when('/search', {
      templateUrl: 'templates/search.html'
    })
    .otherwise({
      redirectTo: '/'
    });

    $locationProvider.html5Mode(true);
}]);