var AIhand = (function(AIcardClass){

	var my = {};
    my._hand = [];
    var _worstCard;
   	var checkCards = [];

    my.Build = function(arr){
		for (var i = 0; i < arr.length; i++){
			my._hand.push(new AIcardClass.AIcard(arr[i].getValue(),arr[i].getSuit(),i));
		}

		_onHand(my._hand);

		this.Draw = function(card){
			my._hand.push(card);

			_compareCardsTo(my._hand.length - 1);	
		}

		this.Drop = function(){

		}
	} 

	function _onHand(_hand){
		for (var j = 0; j < _hand.length; j++) {	
			_compareCardsTo(j);
		}
	}

	function _compareCardsTo(index){
		var orginal = my.isDuplicate(my._hand[index]); 

		

		for (var i = 0; i < my._hand.length; i++) {	
			if(orginal == null || findInOrginals(orginal, i)){		
				if(my._hand[index].isSetWith(my._hand[i])){
					my._hand[index]._set.Num++;
					my._hand[index]._set.Cards.push(my._hand[i]);	
				}
				if(my._hand[index].isStraightWith(my._hand[i], my._hand)){
					my._hand[index]._straight.Num++;
					my._hand[index]._straight.Cards.push(my._hand[i]);		
				}
			}
		}

		split(orginal, my._hand[index]);
		my._hand[index].setProb(checkCards, orginal);
		my._hand[index].setStraightProb();
		checkCards.push(my._hand[index]);
	}

	// splits a cards set and straight cards bettween its duplicate
	function split(orginal, duplicate){
		if(orginal != null){
			// push everything to duplicate besides first card
			var firstVal = orginal._set.Cards.shift();
			var lenOfSet = orginal._set.Cards.length;
			
			// adds all cards from orginal to duplicate value
			for(var j = 0; j < lenOfSet; j++){
				duplicate._set.Cards.push(orginal._set.Cards[j]);
			}

			// delete all cards from orginal
			for(var j = 0; j < lenOfSet; j++){
				orginal._set.Cards.pop();
			}

			// add back first card
			orginal._set.Cards.push(firstVal);
		}
	}

	// determines if card has already been added 
	function findInOrginals(orginal, val){	
		var lenOfSet = orginal._set.Cards.length;
		var lenOfStraight = orginal._straight.Cards.length;

		for(var j = 0; j < lenOfSet; j++){
			if(orginal._set.Cards[j]._id == val){
				return false;
			}
		}

		for(var j = 0; j < lenOfStraight; j++){
			if(orginal._straight.Cards[j]._id == val){
				return false;
			}
		}
		
		return true;
	}

	// detemines if this card is a duplicate
	my.isDuplicate = function(card){
		for(var i = 0; i < checkCards.length; i++){
			if(card.getValue() == checkCards[i].getValue() && card.getSuit() == checkCards[i].getSuit()){
				return checkCards[i];
			}
		}
		return null;
	}

	return my;
})(AIcardClass);