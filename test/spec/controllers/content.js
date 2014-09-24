'use strict';

describe('Controller: ContentCtrl', function () {

  // load the controller's module
  beforeEach(module('unitTestingApp'));

  var ContentCtrl,
    scope;

  var data = function(){
    return ['x' , 'y' , 'z'];
  };
  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, data) {
    scope = $rootScope.$new();
    ContentCtrl = $controller('ContentCtrl', {
      $scope: scope,
      data: data
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.slideshowData.length).toBe(3);
  });
});
