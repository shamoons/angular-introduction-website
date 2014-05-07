'use strict';

(function() {
  describe('HeaderController', function() {
    var $scope, $rootScope, createController;

    beforeEach(module('angularMoon'));

    beforeEach(inject(function($injector) {
      $rootScope = $injector.get('$rootScope');
      $scope = $rootScope.$new();

      var $controller = $injector.get('$controller');

      createController = function() {
        return $controller('HeaderController', {
          '$scope': $scope
        });
      };
    }));

    it("should set the current menu item to 'home'", function() {
      createController();
      $scope.init();
      expect($rootScope.currentItem).toBe('home');
    });

  });
})();