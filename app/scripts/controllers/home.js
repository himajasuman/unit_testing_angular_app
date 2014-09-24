'use strict';

/**
 * @ngdoc function
 * @name unitTestingApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the unitTestingApp
 */
angular.module('unitTestingApp')
  .controller('HomeCtrl', function ($scope) {
  	$scope.tools = [{
  		name: 'Angular',
  		description : 'AngularJS is a toolset for building the framework most suited to your application development.'
  	},{
  		name: 'Karma',
  		description : 'Spectacular Test Runner for JavaScript.'
  	},{
  		name: 'Jasmine',
  		description : 'Jasmine is a behavior-driven development framework for testing JavaScript code.'
  	}];

  });
