var AIcardClass = (function(Deck){

	var my = {}, key;

	for (key in Deck){
		if(Deck.hasOwnProperty(key)){
			my[key] = Deck[key];
		}
	}

	my.AIcard = function(_value,_suit){
		CardClass.Card.call(this, _value, _suit);
		
		// test nameing convention
		this._set = {
			Cards : [this],
			Prob : 0,
			Num : 0
		}

		this._straight = {
			Cards : [],
			Prob : 0,
			Num : 0
		}	
		
		this.isSetWith = function(otherCard){
			if(this.getValue() == otherCard.getValue() && this.getSuit() != otherCard.getSuit()){
				for(var i = 0; i < this._set.Cards.length; i++){
					if(otherCard.getSuit() == this._set.Cards[i].getSuit()){
						return false;
					}
				}
				return true;
			}
			return false;
		}

		this.isStraightWith = function(otherCard, hand){
			if (this.getSuit() == otherCard.getSuit()){
				var difference  = this.getValue() - otherCard.getValue();
				if(Math.abs(difference) <= 1){ // rewrite this
			 		return true;
			 	} else {
			 		for (var i = 0; i < Math.abs(difference) - 1; i++) {
			 			var newCard;
			 			if(difference < 0){
			 				newCard = otherCard.Down();
			 			} else {
			 				newCard = otherCard.Up();
			 			}
			 			if(typeof newCard == "object"){
				 			return found = (function (){
								for (var j = 0; j < hand.length; j++) {
									if(newCard.equals(hand[j])){
					 					return true;
					 				}
					 			}
					 			return false;	
							})();
						} else {
							return false;
						}
			 		}
			 	}
			}
			return false;
		}
		this.Up = function(){
			if(this.getValue() > 13){
				return false;
			}
			return new CardClass.Card(this.getValue()+1, this.getSuit());
		}
		this.Down = function(){
			if(this.ifAce()){
				return false;
			}
			return new CardClass.Card(this.getValue()-1, this.getSuit());
		}
		this.setProb = function(checkCards,isDup){
			var result = 1;
			var lengthOfset = this._set.Cards.length;
			var thisCard = this;

			var anyInHand = (function () {
				if(isDup){
					for(var j = 0; j < checkCards.length; j++){
						if(checkCards[j].equals(thisCard)){
							return checkCards[j]._set.Cards.length;
						}
					}
				}
				return 0;
			})();
			
			for (var i = 0; i < (4 - lengthOfset); i++) {
				result *= (8 - anyInHand - (lengthOfset + i)*2)/(my.CardsLeft() - i);
			}
			this._set.Prob = result;
		}
		this.setStraightProb = function(){
			var result = 1;
			var lengthOfstraight = this._straight.Cards.length;
			for (var i = 0; i < (4 - lengthOfstraight); i++) {
				result *= (4 - 2*this.ifAce())/(my.CardsLeft() - i);
			}
			this._straight.Prob = result;
		}	
		this.ifAce = function(){
			var len = this._straight.Cards.length;
			for (var i = 0; i < len; i++) {
				if (this._straight.Cards[i].getValue() == 1){
					return true;
				}
			}
			return false;
		}
	}

	
	return my;

})(Deck);
