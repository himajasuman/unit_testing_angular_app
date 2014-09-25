'use strict';

describe('Service: dataFactory', function() {

  // load the service's module
  beforeEach(module('unitTestingApp'));

  // instantiate service
  var dataFactory, $httpBackend;
  beforeEach(inject(function(_dataFactory_, _$httpBackend_) {
    dataFactory = _dataFactory_;
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('data/slideshow.json').respond([1, 2, 4]);
  }));

  it('should do something', function() {
    expect(dataFactory).not.toBe(undefined);
  });

  it('should return a slideShowData function that makes a http call to get the data', function() {
    dataFactory.slideShowData();
    $httpBackend.flush();
    expect(dataFactory.data().length).toBe(3);
  });

});