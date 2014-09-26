'use strict';

/**
 * @ngdoc service
 * @name deckrrApp.deck
 * @description
 * # deck
 * Service in the deckrrApp.
 */
angular.module('deckrrApp')
  .service('deck', function() {
    // AngularJS will instantiate a singleton by calling "new" on this function
		// [{},{}.{}]
		this.randomCard = function(deck) {
			// get random card from deck
			//console.log(deck["cards"]);
			var card = deck["cards"][Math.floor(Math.random()*deck["cards"].length)];
			return card
		};

		this.playCard = function(deck, gameKey) {
			// remove card from db
			// console.log(gameKey);
			var cardIndex = null;
			var cardRef = new Firebase('https://amber-torch-2724.firebaseio.com/decks/' + gameKey + 'cards');
			var currentCard = this.randomCard(deck);
			// cardRef.remove();

			for (var i = 0; i < deck["cards"].length; i ++) {
				if (deck["cards"][i].value === currentCard.value && deck["cards"][i].suits === currentCard.suits) {
					cardIndex = i;
				} 
			}

			// sync.remove(i);
			return currentCard;
			
		}

  });
