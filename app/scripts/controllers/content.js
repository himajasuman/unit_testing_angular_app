'use strict';

/**
 * @ngdoc function
 * @name unitTestingApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the unitTestingApp
 */
angular.module('unitTestingApp')
  .controller('ContentCtrl', function ($scope, data) {
  	$scope.slideshowData = data.data();
  });
