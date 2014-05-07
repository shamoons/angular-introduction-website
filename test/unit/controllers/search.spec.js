'use strict';

(function() {
  describe('SearchController', function() {
    var $scope, createController;

    beforeEach(module('angularMoon'));

    beforeEach(inject(function($injector) {
      $scope = $rootScope.$new();

      var $controller = $injector.get('$controller');

      createController = function() {
        return $controller('SearchController', {
          '$scope': $scope
        });
      };
    }));

    it("should execute a search when user input is detected", function() {

    });

    it("should not execute a search if the input is less than 3 characters", function() {

    });

    it("should not execute a search if there are non-alphanumeric characters", function() {

    });
  });
})();