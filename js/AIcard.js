var AIcardClass = (function(){

	var AIcard = function(value,suit,set,straight){
		CardClass.Card.call(this, value, suit);
		this.set = set;
		this.straight = straight;
		
	}

	AIcard.prototype.isSetWith = function(otherCard){
		return (this.value == otherCard.value && this.suit != otherCard.suit);
	}

	AIcard.prototype.isStraightWith = function(otherCard){
		return (Math.abs(this.value - otherCard.value) == 1 && this.suit == otherCard.suit);
	}

	AIcard.prototype.incrementSet = function(){
		this.set++;
	}

	AIcard.prototype.incrementStraight = function(){
		this.straight++;
	}

	return {
		AIcard
	};	
})();