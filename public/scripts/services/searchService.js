'use strict';

angularMoonApp.service('searchService', ['$http', function($http) {
  this.getContents = function (path) {
    if(path === undefined) {
      path = '';
    }

    return $http({
      url: 'https://api.github.com/repos/shamoons/angular-introduction-website/contents/' + path,
      method: 'GET',
    });
  }

  this.getCommits = function(path) {
    if(path === undefined) {
      path = '';
    }

    return $http({
      url: 'https://api.github.com/repos/shamoons/angular-introduction-website/commits?path=' + path,
      data: {
        path: path
      },
      method: 'GET',
    });
  }
}]);