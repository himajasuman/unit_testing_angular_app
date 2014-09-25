'use strict';

/**
 * @ngdoc directive
 * @name unitTestingApp.directive:utSlideshow
 * @description
 * # utSlideshow
 */
angular.module('unitTestingApp')
  .directive('utSlideshow', function () {
    return {
      templateUrl: 'views/slideshow.html',
      restrict: 'E',
      scope: {
      	source : '='
      },
      link: function postLink(scope, element, attrs) {
        scope.index = 0;
        scope.slide = scope.source[scope.index];
        scope.sourceLength = scope.source.length;
        scope.move = function(direction){
        	if(direction == 'forward'){
        		if(scope.index < scope.source.length-1){
        			scope.index = scope.index + 1;
        		}
        	}else{
        		if(scope.index > 0){
        			scope.index = scope.index - 1;
        		}
        	}
          scope.slide = scope.source[scope.index];
        }
      }
    };
  });
