'use strict';

describe('Service: data', function () {

  // load the service's module
  beforeEach(module('unitTestingApp'));

  // instantiate service
  var data;
  beforeEach(inject(function (_data_, _httpbackend_) {
    data = _data_;
  }));

  it('should do something', function () {
    expect(!!data).toBe(true);
  });

});
