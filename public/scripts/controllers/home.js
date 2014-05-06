'use strict';

angular.module('mean').controller('HomeController', ['$scope', 'Global', function ($scope, Global) {
    $scope.global = Global;
}]);