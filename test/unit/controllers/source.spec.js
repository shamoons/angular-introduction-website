'use strict';

(function() {
  describe('SourceController', function() {
    var $scope, $rootScope, $httpBackend, $routeParams, $q, createController, fileService, deferred;

    beforeEach(module('angularMoon'));

    beforeEach(inject(function($injector) {
      $httpBackend = $injector.get('$httpBackend');
      $rootScope = $injector.get('$rootScope');
      $routeParams = $injector.get('$routeParams');
      $scope = $rootScope.$new();
      $q = $injector.get('$q');
      deferred = $q.defer();

      fileService = $injector.get('fileService');
      var $controller = $injector.get('$controller');

      createController = function() {
        return $controller('SourceController', {
          '$scope': $scope,
          '$routeParams': $routeParams,
          'fileService': fileService
        });
      };
    }));

    it("should set the current menu item to 'source'", function() {
      createController();
      $scope.init();
      expect($rootScope.currentItem).toBe('source');
    });

    it("should get test the getContents call of the fileService", function() {
      spyOn(fileService, 'getContents').andCallThrough();
      createController();
      $scope.init();

      expect(fileService.getContents).toHaveBeenCalled();
    });

    it("should return an object with multiple files", function() {
      var multipleFiles = [{path: '.DS_Store'}, {path: '.bowerrc'}];
      deferred.resolve(multipleFiles);
      spyOn(fileService, 'getContents').andReturn(deferred.promise);

      createController();
      $scope.init();

      expect($scope.contents).toBe(multipleFiles);
      expect($scope.breadcrumbPath).toBe('');
    });
  });
})();