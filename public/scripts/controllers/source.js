'use strict';

angularMoonApp.controller('SourceController', ['$scope', 'fileService', function ($scope, fileService) {
	fileService.getContents().then(function(response) {
		$scope.contents = response.data;
	});
}]);