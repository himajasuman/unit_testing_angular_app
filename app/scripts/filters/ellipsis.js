'use strict';

/**
 * @ngdoc filter
 * @name unitTestingApp.filter:ellipsis
 * @function
 * @description
 * # ellipsis
 * Filter in the unitTestingApp.
 */
angular.module('unitTestingApp')
  .filter('ellipsis', function() {
    return function(value, length) {
      if (typeof length === "string") {
        throw new Error('Unexpected error!');
      } else {
        var shrt_name, result_name;
        var temp = value.length;
        if (temp > length) {
          shrt_name = value.substring(0, length);
          result_name = shrt_name + '...';
        } else {
          result_name = value + '...';
        }
        return result_name;
      }
    }

  });