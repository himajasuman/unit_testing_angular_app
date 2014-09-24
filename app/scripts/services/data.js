'use strict';

/**
 * @ngdoc service
 * @name unitTestingApp.data
 * @description
 * # data
 * Factory in the unitTestingApp.
 */
angular.module('unitTestingApp')
  .factory('data', function ($http,$q) {
    // Service logic
    // ...
    var deferredData,resolvedData;
    var slideShowData = function(){
      deferredData = $q.defer();
      $http({method: 'GET', url: 'data/slideshow.json'}).then(function(data) {
        // this callback will be called asynchronously
        // when the response is available
        if(data.status == 200){
          resolvedData = data.data;
          deferredData.resolve(resolvedData); 
        }else if(data.error){
          deferredData.reject('Unable to get the data');
        }
      })
    };

    // Public API here
    return {
      slideShowData:slideShowData,
      data: function () {
        return resolvedData;
      }
    };
  });
