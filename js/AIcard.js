var AIcardClass = (function(Deck){

	var my = {}, key;

	for (key in Deck){
		if(Deck.hasOwnProperty(key)){
			my[key] = Deck[key];
		}
	}

	my.AIcard = function(_value,_suit, _id){
		CardClass.Card.call(this, _value, _suit);
		
		this._id = _id;

		// test nameing convention
		this._set = {
			Cards : [this],
			Prob : 0,
			Num : 0
		}

		this._straight = {
			Cards : [this],
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

				// checks if a card of same value and suit has been added
	 			for(var k = 0; k < this._straight.Cards.length; k++){
 					if (this._straight.Cards[k].equals(otherCard)){
						return false;
					}
 				}

				var difference  = this.getValue() - otherCard.getValue();

				if(Math.abs(difference) == 1){
			 		return true;
			 	} else {
			 		var newCard = new AIcardClass.AIcard(otherCard.getValue(), otherCard.getSuit(), -1);
			 		var isStraight = true;

			 		for (var i = 0; i < Math.abs(difference) - 1 && isStraight; i++) {
				 		isStraight = (function() {		
				 			
				 			if(difference < 0){ 
				 				newCard = newCard.Down();
				 			} else {
				 				newCard = newCard.Up();
				 			} 	

			 				// checks to see if the hand contains this card
				 			for (var j = 0; j < hand.length; j++) {
								if(newCard.equals(hand[j])){
									return true;
				 				}
				 			}	 				
					 		return false;
					 	})();
					 }
			 		 return isStraight;	
			 	}
			}
			return false;
		}
		this.Up = function(){
			if(this.getValue() > 13){
				return false;
			}
			return new AIcardClass.AIcard(this.getValue()+1, this.getSuit());
		}
		this.Down = function(){
			if(this.ifAce()){
				return false;
			}
			return new AIcardClass.AIcard(this.getValue()-1, this.getSuit());
		}
		this.setProb = function(checkCards,originals){
			var result = 1;
			var lengthOfset = this._set.Cards.length;
			var thisCard = this;

			var anyInHand = (function () {
				if(originals != null){
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
