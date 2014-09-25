'use strict';

describe('Filter: ellipsis', function() {

  // load the filter's module
  beforeEach(module('unitTestingApp'));

  // initialize a new instance of the filter before each test
  var ellipsis,temp;
  beforeEach(inject(function($filter) {
    ellipsis = $filter('ellipsis');
  }));

  it('should have a ellipsis filter', function() {
    expect(ellipsis).not.toEqual(null);
  });


  it('when value is null', function() {
    temp = ellipsis("AC Cleaning_vertical menu.mp4");
    expect(temp).toEqual("AC Cleaning_vertical menu.mp4...");
  });

  it('when string is empty it should just return the dots', function() {
    temp = ellipsis("", 4);
    expect(temp).toEqual("...");
  });

  it('when value is 0 it should just return the dots', function() {
    temp = ellipsis("AC Cleaning_vertical menu.mp4", 0);
    expect(temp).toEqual("...");
  });

  it('when we pass the numbers it returns all the numbers with three dots what ever may be the value', function() {
    temp = ellipsis("234561", 3);
    expect(temp).toEqual("234...");
  });

  it('if second argument is of type "string", it should show an Error', function() {
    expect(function() {
      ellipsis("hello", "yeshksurel")
    }).toThrow('Unexpected error!');
  });


});