'use strict';

/**
 * @ngdoc function
 * @name deckrrApp.controller:DeckCtrl
 * @description
 * # DeckCtrl
 * Controller of the deckrrApp
 */
angular.module('deckrrApp')
  .controller('DeckCtrl', function ($scope, fbutil) {
    	$scope.games = fbutil.syncArray('decks');

    	$scope.addFakeDeck = function() {
    		$scope.games.$add(
    			{
    				name: "Joker Deck",
    				cards: [
    					{
    						suits: "Hearts",
    						value: "Joker"
    					}
    				]
    			}
    		)
    	}
    	$scope.addStandardDeck = function() {
    		$scope.games.$add(
    			{
    				name: "Standard Deck",
	    			cards: [
	    				{
	    					suits: "Hearts",
	    					value: "King"
	    				},
	    				{
	    					suits: 'Hearts',
	    					value: "Queen",
	    				},
	    				{
	    					suits: 'Hearts',
	    					value: "Jack",
	    				},
	    				{
	    					suits: 'Hearts',
	    					value: "10",
	    				},
	    				{
	    					suits: 'Hearts',
	    					value: "9",
	    				},
	    				{
	    					suits: 'Hearts',
	    					value: "8",
	    				},
	    				{
	    					suits: 'Hearts',
	    					value: "7",
	    				},
	    				{
	    					suits: 'Hearts',
	    					value: "6",
	    				},
	    				{
	    					suits: 'Hearts',
	    					value: "5",
	    				},
	    				{
	    					suits: 'Hearts',
	    					value: "4",
	    				},
	    				{
	    					suits: 'Hearts',
	    					value: "3",
	    				},
	    				{
	    					suits: 'Hearts',
	    					value: "2",
	    				},
	    				{
	    					suits: 'Hearts',
	    					value: "Ace",
	    				},
	    				{
	    					suits: "Diamonds",
	    					value: "King"
	    				},
	    				{
	    					suits: 'Diamonds',
	    					value: "Queen",
	    				},
	    				{
	    					suits: 'Diamonds',
	    					value: "Jack",
	    				},
	    				{
	    					suits: 'Diamonds',
	    					value: "10",
	    				},
	    				{
	    					suits: 'Diamonds',
	    					value: "9",
	    				},
	    				{
	    					suits: 'Diamonds',
	    					value: "8",
	    				},
	    				{
	    					suits: 'Diamonds',
	    					value: "7",
	    				},
	    				{
	    					suits: 'Diamonds',
	    					value: "6",
	    				},
	    				{
	    					suits: 'Diamonds',
	    					value: "5",
	    				},
	    				{
	    					suits: 'Diamonds',
	    					value: "4",
	    				},
	    				{
	    					suits: 'Diamonds',
	    					value: "3",
	    				},
	    				{
	    					suits: 'Diamonds',
	    					value: "2",
	    				},
	    				{
	    					suits: 'Diamonds',
	    					value: "Ace",
	    				},
	    				{
	    					suits: "Spades",
	    					value: "King"
	    				},
	    				{
	    					suits: 'Spades',
	    					value: "Queen",
	    				},
	    				{
	    					suits: 'Spades',
	    					value: "Jack",
	    				},
	    				{
	    					suits: 'Spades',
	    					value: "10",
	    				},
	    				{
	    					suits: 'Spades',
	    					value: "9",
	    				},
	    				{
	    					suits: 'Spades',
	    					value: "8",
	    				},
	    				{
	    					suits: 'Spades',
	    					value: "7",
	    				},
	    				{
	    					suits: 'Spades',
	    					value: "6",
	    				},
	    				{
	    					suits: 'Spades',
	    					value: "5",
	    				},
	    				{
	    					suits: 'Spades',
	    					value: "4",
	    				},
	    				{
	    					suits: 'Spades',
	    					value: "3",
	    				},
	    				{
	    					suits: 'Spades',
	    					value: "2",
	    				},
	    				{
	    					suits: 'Spades',
	    					value: "Ace",
	    				},
	    				{
	    					suits: "Clubs",
	    					value: "King"
	    				},
	    				{
	    					suits: 'Clubs',
	    					value: "Queen",
	    				},
	    				{
	    					suits: 'Clubs',
	    					value: "Jack",
	    				},
	    				{
	    					suits: 'Clubs',
	    					value: "10",
	    				},
	    				{
	    					suits: 'Clubs',
	    					value: "9",
	    				},
	    				{
	    					suits: 'Clubs',
	    					value: "8",
	    				},
	    				{
	    					suits: 'Clubs',
	    					value: "7",
	    				},
	    				{
	    					suits: 'Clubs',
	    					value: "6",
	    				},
	    				{
	    					suits: 'Clubs',
	    					value: "5",
	    				},
	    				{
	    					suits: 'Clubs',
	    					value: "4",
	    				},
	    				{
	    					suits: 'Clubs',
	    					value: "3",
	    				},
	    				{
	    					suits: 'Clubs',
	    					value: "2",
	    				},
	    				{
	    					suits: 'Clubs',
	    					value: "Ace",
	    				}
	    			]
    			}
    		);
    	};
  });
