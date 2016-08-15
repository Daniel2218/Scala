var Deck = (function(){

	var my = {};

	my.Cards = [];

	my.CardsLeft = function (){
		return my.Cards.length;
	}

	my.Build = function(){
		var suits = ["spades","hearts","clubs","diamonds"];
		var i;
		for (i = 0; i < 2; i++){
			for(j = 1; j <= 13; j++){
				for (var k = 0; k < suits.length;k++){
					if(j > 10){
						my.Cards.push(new CardClass.Card(10,suits[k]));
					} else {
						my.Cards.push(new CardClass.Card(j,suits[k]));			
					}	
				}
			}
		}
				
		_shuffle(my.Cards);
	}

	var _shuffle = function(array){
	  var _currentIndex = array.length, _tempValue, _randomIndex;

	  // While there remain elements to shuffle...
	  while (0 !== _currentIndex) {

	    // Pick a remaining element...
	    _randomIndex = Math.floor(Math.random() * _currentIndex);
	    _currentIndex -= 1;

	    // And swap it with the current element.
	    _tempValue = array[_currentIndex];
	    array[_currentIndex] = array[_randomIndex];
	    array[_randomIndex] = _tempValue;
	  }
	}

	

	return my;
})();