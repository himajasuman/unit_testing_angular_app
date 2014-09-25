'use strict';

describe('Controller: MainCtrl', function() {

  // load the controller's module
  beforeEach(module('unitTestingApp'));

  var MainCtrl,
    scope, dataFactory, def;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope, $q) {
    scope = $rootScope.$new();

    dataFactory = {
      slideShowData: function() {
        return true;
      }
    };


    MainCtrl = $controller('MainCtrl', {
      $scope: scope,
      dataFactory: dataFactory
    });


  }));

  it('should have three objects in options scope variable', function() {
    expect(scope.options.length).toBe(3);
  });

  it('should have navigate function that takes in an option object and sets the active status to it by removing the previous option active status', function() {
    expect(scope.options[0].status).toBe('active');
    scope.navigate(scope.options[2]);
    expect(scope.options[2].status).toBe('active');
  });

  it('should call a slideShowData function of dataFactory', function() {
    expect(dataFactory.slideShowData()).toBe(true);
  });
});