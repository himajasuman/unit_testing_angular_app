'use strict';

describe('Controller: ContentCtrl', function() {

  // load the controller's module
  beforeEach(module('unitTestingApp'));

  var ContentCtrl,
    scope, dataFactory;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();

    dataFactory = {
      data: function() {
        return [1, 2, 3, 4];
      }
    };

    ContentCtrl = $controller('ContentCtrl', {
      $scope: scope,
      dataFactory: dataFactory
    });

  }));

  it('should attach a list of awesomeThings to the scope', function() {
    expect(scope.slideshowData.length).toBe(4);
  });
});