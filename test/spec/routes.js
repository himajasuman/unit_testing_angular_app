'use strict';

describe('Routes', function() {

  // load the service's module
  beforeEach(module('unitTestingApp'));

  var $httpBackend;
  beforeEach(inject(function(_$httpBackend_) {
    $httpBackend = _$httpBackend_;
  }));

  it('should have a working / route', inject(function($location, $rootScope, $route) {
    $httpBackend.expectGET('views/home.html').respond();
    $location.path('/');
    $rootScope.$digest();

    $httpBackend.flush();
    expect($location.path()).toBe('/');
    expect($route.current.controller).toBe('HomeCtrl');
  }));

  it('should have a working /content route', inject(function($location, $rootScope, $route) {
    $httpBackend.expectGET('views/content.html').respond();
    $location.path('/content');
    $rootScope.$digest();

    $httpBackend.flush();
    expect($location.path()).toBe('/content');
    expect($route.current.controller).toBe('ContentCtrl');
  }));

  it('should have a working /contact route', inject(function($location, $rootScope, $route) {
    $httpBackend.expectGET('views/contact.html').respond();
    $location.path('/contact');
    $rootScope.$digest();

    $httpBackend.flush();
    expect($location.path()).toBe('/contact');
    expect($route.current.controller).toBe(undefined);
  }));

});