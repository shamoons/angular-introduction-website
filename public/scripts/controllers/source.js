'use strict';

angularMoonApp.controller('SourceController', ['$scope', '$routeParams', 'fileService', function ($scope, $routeParams, fileService) {
	fileService.getContents($routeParams.path).then(function(response) {
		$scope.contents = response.data;
		if($scope.contents.length > 1) {
			$scope.breadcrumbPath = response.data[0].path.split('/');	
		} else {
			$scope.breadcrumbPath = response.data.path.split('/');
			$scope.breadcrumbPath.push('');
		}
		
		console.log($scope.breadcrumbPath);

	});
}]);