'use strict';

(function() {
  describe('SourceController', function() {
    var $scope, $rootScope, $httpBackend, createController, fileService;

    beforeEach(module('angularMoon'));

    beforeEach(inject(function($injector) {
      $httpBackend = $injector.get('$httpBackend');
      $rootScope = $injector.get('$rootScope');
      $scope = $rootScope.$new();

      fileService = $injector.get('fileService');
      spyOn(fileService, 'getContents').andCallThrough();


      var $controller = $injector.get('$controller');

      createController = function() {
        return $controller('SourceController', {
          '$scope': $scope,
          'fileService': fileService
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

      expect(fileService.getContents).toHaveBeenCalled();
    });

  });
})();