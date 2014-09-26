'use strict';

describe('Controller: DeckCtrl', function () {

  // load the controller's module
  beforeEach(module('deckrrApp'));

  var DeckCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DeckCtrl = $controller('DeckCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
