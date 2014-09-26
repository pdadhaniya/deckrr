'use strict';

/**
 * @ngdoc function
 * @name deckrrApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the deckrrApp
 */

angular.module('deckrrApp')
  .controller('MainCtrl', function ($scope, fbutil) {
  	$scope.games = fbutil.syncArray('decks');

  	// $scope.addGame = function(newGame) {
  	// 	if (newGame) {
  	// 		$scope.games.$add({name: newGame})
  	// 	}
  	// };

  });
