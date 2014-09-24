'use strict';

/**
 * @ngdoc function
 * @name unitTestingApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the unitTestingApp
 */
angular.module('unitTestingApp')
  .controller('MainCtrl', function ($scope,data) {

    $scope.options = [{
    	name:'Home',
    	href:'#/',
    	status:'active'
    },{
    	name:'Content',
    	href:'#/content',
    	status:''
    },{
    	name:'Contact',
    	href:'#/contact',
    	status:''
    }];

    $scope.navigate = function(option){
    	for (var i = 0; i < $scope.options.length; i++) {
    		if($scope.options[i].status == 'active'){
    			$scope.options[i].status = '';
    		}
    	}
    	option.status = 'active';
    };

    data.slideShowData();

  });
