'use strict';

angularMoonApp.controller('SearchController', ['$scope', '$rootScope', function ($scope, $rootScope) {
  $scope.init = function() {
  $rootScope.$on('$routeChangeStart', function(next, current) {
    $scope.searchTerm = '';
  });

  }

  $scope.init();
}]);