'use strict';

/**
 * @ngdoc overview
 * @name unitTestingApp
 * @description
 * # unitTestingApp
 *
 * Main module of the application.
 */
angular
  .module('unitTestingApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .when('/content', {
        templateUrl: 'views/content.html',
        controller: 'ContentCtrl'
      })
       .when('/contact', {
        templateUrl: 'views/contact.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
