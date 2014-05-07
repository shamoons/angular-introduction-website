'use strict';

(function() {
  describe('SourceController', function() {
    var $scope, $rootScope, createController;

    beforeEach(module('angularMoon'));

    beforeEach(inject(function($injector) {
      $rootScope = $injector.get('$rootScope');
      $scope = $rootScope.$new();

      var $controller = $injector.get('$controller');

      createController = function() {
        return $controller('SourceController', {
          '$scope': $scope
        });
      };
    }));

    it("should set the current menu item to 'source'", function() {
      createController();
      $scope.init();
      expect($rootScope.currentItem).toBe('source');
    });

    it("should get the contents of the root folder", function() {
      createController();
      $scope.init();
    });

  });
})();