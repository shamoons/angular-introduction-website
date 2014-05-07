'use strict';

(function() {
  describe('SearchController', function() {
    var $scope, $rootScope, $location, createController;

    beforeEach(module('angularMoon'));

    beforeEach(inject(function($injector) {
      $rootScope = $injector.get('$rootScope');
      $scope = $rootScope.$new();
      $location = $injector.get('$location');

      var $controller = $injector.get('$controller');

      createController = function() {
        return $controller('SearchController', {
          '$scope': $scope,
          '$rootScope': $rootScope,
          '$location': $location
        });
      };
    }));

    it("should execute a search when user input is detected", function() {

    });

    it("should not execute a search if the input is less than 3 characters", function() {

    });

    it("should not execute a search if there are non-alphanumeric characters", function() {

    });

    it("should clear the search field when the URL changes", function() {
      createController();
      $scope.init();
      $scope.searchTerm = 'some term';

      $location.path('/source');
      $rootScope.$apply();

      expect($scope.searchTerm).toBe('');
    });
  });
})();