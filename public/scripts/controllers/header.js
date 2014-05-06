'use strict';

angularMoonApp.controller('HeaderController', ['$scope', '$location', function ($scope, $location) {
  $scope.currentItem = 'home';
  switch($location.path()) {
    case '/':
      $scope.currentItem = 'home'
      break;
    case '/source':
      $scope.currentItem = 'source'
      break;
  }
}]);