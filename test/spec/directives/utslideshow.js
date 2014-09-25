'use strict';

describe('Directive: utSlideshow', function () {

  // load the directive's module
  beforeEach(module('unitTestingApp'));
  beforeEach(module('templates'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  afterEach(function(){
    element.remove();
    element = scope = undefined;
  });

  it('should create a slideshow', inject(function ($compile) {
    element = angular.element('<ut-slideshow></ut-slideshow>');
    element = $compile(element)(scope);
    expect(element).not.toBeNull();;
  }));
  
});
