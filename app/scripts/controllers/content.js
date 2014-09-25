'use strict';

/**
 * @ngdoc function
 * @name unitTestingApp.controller:ContentCtrl
 * @description
 * # ContentCtrl
 * Controller of the unitTestingApp
 */
angular.module('unitTestingApp')
  .controller('ContentCtrl', function ($scope, dataFactory) {
  	$scope.slideshowData = dataFactory.data();
  });
