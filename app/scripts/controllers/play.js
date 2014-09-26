'use strict';

/**
 * @ngdoc function
 * @name deckrrApp.controller:PlayCtrl
 * @description
 * # PlayCtrl
 * Controller of the deckrrApp
 */
angular.module('deckrrApp')
  .controller('PlayCtrl', function ($scope, $firebase, fbutil, deck) {

  	var obj = $firebase(new Firebase("https://amber-torch-2724.firebaseio.com/decks")).$asObject();
  	
  	obj.$loaded().then(function(){

  		var key = null;
			for (key in obj) {

				if (obj[key]) {
					if (obj[key].name === "Standard Deck") {
    				$scope.currentGame = obj[key];
    			}

				  for (var i = 0; i < Object.keys(obj).length; i++) {
				    		 	
				  	if (obj[Object.keys(obj)[i]]) {
					  	if ( obj[Object.keys(obj)[i]].name  === "Standard Deck") {
					    	$scope.currentGameKey = Object.keys(obj)[i];
					    }
					   }

				  }


				}

    	}


    	// $scope.coolCard = deck.randomCard($scope.currentGame);
    	$scope.randomCard = deck.playCard($scope.currentGame, $scope.currentGameKey);

    	// show and remove card
    	$scope.playCard = function() {

    	};

  	});



  });
