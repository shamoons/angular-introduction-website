'use strict';

angularMoonApp.controller('SearchController', ['$scope', '$location', function ($scope, $location) {
  $scope.init = function() {

  }

  $scope.$on('$routeChangeStart', function(next, current) {
    $scope.searchTerm = '';
  });

  $scope.init();
}]);