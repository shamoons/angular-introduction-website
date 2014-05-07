'use strict';

angularMoonApp.controller('HeaderController', ['$scope', '$rootScope', function ($scope, $rootScope) {
  $scope.init = function () {
  	$rootScope.currentItem = 'home';	
  }

  $scope.init();
  
}]);