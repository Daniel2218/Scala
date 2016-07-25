var AIcardClass = (function(Card){

	var my = {}, key;

	for (key in Card){
		if(Card.hasOwnProperty(key)){
			my[key] = Card[key];
		}
	}

	my.AIcard = function(_value,_suit, _set=0, _straight=0){
		CardClass.Card.call(this, _value, _suit);

		this.getSet = function(){
			return _set;
		}
		
		this.getStraight = function(){
			return _straight;
		}

		this.incrementSet = function(){
			_set++;
		}

		this.incrementStraight = function(){
			_straight++;
		}

		this.isSetWith = function(otherCard){
			return (this.getValue() == otherCard.getValue() && this.getSuit() != otherCard.getSuit());
		}

		this.isStraightWith = function(otherCard){
			return (Math.abs(this.getValue() - otherCard.getValue()) == 1 && this.getSuit() == otherCard.getSuit());
		}
	}

	
	return my;

})(CardClass);
