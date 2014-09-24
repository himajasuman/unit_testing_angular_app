'use strict';

describe('Directive: utSlideshow', function () {

  // load the directive's module
  beforeEach(module('unitTestingApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<ut-slideshow></ut-slideshow>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the utSlideshow directive');
  }));
});
