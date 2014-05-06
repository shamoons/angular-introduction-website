'use strict';

angularMoonApp.service('fileService', ['$http', function($http) {
  this.getContents = function (path) {
    if(path === undefined) {
      path = '';
    }

    return $http({
      url: 'https://api.github.com/repos/shamoons/angular-introduction-website/contents/' + path,
      method: 'GET',
    });
  }
}]);