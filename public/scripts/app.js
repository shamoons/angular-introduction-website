'use strict';

var angularMoonApp = angular.module('angularMoon', [
	'ngRoute'
]).config(['$routeProvider', '$locationProvider', '$httpProvider', function($routeProvider, $locationProvider, $httpProvider) {
	$routeProvider
    .when('/', {
      templateUrl: 'templates/home.html',
    })
    .when('/source', {
      templateUrl: 'templates/source.html'
    })
    .when('/source/:path*', {
      templateUrl: 'templates/source.html'
    })
    .when('/tests', {
      templateUrl: 'templates/tests.html'
    })
    .otherwise({
      redirectTo: '/'
    });

    $locationProvider.html5Mode(true);

}]);