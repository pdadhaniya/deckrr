'use strict';

/**
 * @ngdoc function
 * @name deckrrApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the deckrrApp
 */
angular.module('deckrrApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
