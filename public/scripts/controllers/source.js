'use strict';

angularMoonApp.controller('SourceController', ['$scope', '$routeParams', 'fileService', function ($scope, $routeParams, fileService) {
	fileService.getContents($routeParams.path).then(function(response) {
		$scope.contents = response.data;
		$scope.breadcrumbPath = response.data[0].path.split('/');

	});
}]);