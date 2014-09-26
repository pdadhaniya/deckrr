'use strict';

describe('Service: kingsCup', function () {

  // load the service's module
  beforeEach(module('deckrrApp'));

  // instantiate service
  var kingsCup;
  beforeEach(inject(function (_kingsCup_) {
    kingsCup = _kingsCup_;
  }));

  it('should do something', function () {
    expect(!!kingsCup).toBe(true);
  });

});
