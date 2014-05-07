'use strict';

angularMoonApp.controller('SourceController', ['$scope', '$rootScope', '$routeParams', 'fileService', function ($scope, $rootScope, $routeParams, fileService) {
  $scope.init = function() {
    $rootScope.currentItem = 'source';

    fileService.getContents($routeParams.path).then(function(response) {
      $scope.contents = response.data;
      $scope.fileContents = null;
      if(_.isArray($scope.contents)) {
        // We have a listing of files
        $scope.breadcrumbPath = response.data[0].path.split('/'); 
      } else {
        // We have one file
        $scope.breadcrumbPath = response.data.path.split('/');
        $scope.breadcrumbPath.push('');

        $scope.fileContents = atob(response.data.content);

        fileService.getCommits(response.data.path).then(function(response) {
          $scope.commits = response.data;
        });
      }
    });
  }

  $scope.init();
}]);