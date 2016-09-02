var CardClass = (function(){

	var my = {};

	my.Card = function(_value,_suit){

		this.getValue = function(){
			return _value;
		}

		this.getSuit = function(){
			return _suit;
		}

		this.equals = function(otherCard){
			return (this.getValue() == otherCard.getValue() && this.getSuit() == otherCard.getSuit());
		}
	}

	return my;
})();
