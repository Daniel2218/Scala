var DeckClass = (function(){

	var _cards = [];

	function Deck(){
		var suits = ["spades","hearts","clubs","diamonds"];
		var i;
		for (i = 0; i < 2; i++){
			for(j = 1; j <= 13; j++){
				for (var k = 0; k < suits.length;k++){
					if(j > 10){
						_cards.push(new CardClass.Card(10,suits[k]));
					} else {
						_cards.push(new CardClass.Card(j,suits[k]));			
					}	
				}
			}
		}
		this._cards = _cards;
		
		_shuffle(_cards);
	}

	var _shuffle = function(array){
	  var currentIndex = array.length, temporaryValue, randomIndex;

	  // While there remain elements to shuffle...
	  while (0 !== currentIndex) {

	    // Pick a remaining element...
	    randomIndex = Math.floor(Math.random() * currentIndex);
	    currentIndex -= 1;

	    // And swap it with the current element.
	    temporaryValue = array[currentIndex];
	    array[currentIndex] = array[randomIndex];
	    array[randomIndex] = temporaryValue;
	  }
	}

	Deck.prototype.Draw = function(){
		return _cards.pop();
	}

	return {
		Deck
	}
})();