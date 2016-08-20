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
		var orginals = my.isDuplicate(my._hand[index]); 

		if(orginals == null || findInOrginals(orginals, i)){ 

			for (var i = 0; i < my._hand.length; i++) {			
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
		// FIX THIS
		my._hand[index].setProb(checkCards, orginals);
		my._hand[index].setStraightProb();
		checkCards.push(my._hand[index]);
	}

	function findInOrginals(orginals, val){
		for(var i = 0; i < orginals.length; i++){
			var len = orginals[i]._set.Cards.length;

			for(var j = 0; j < len; j++){
				if(orginals[i]._set.Cards[j]._id == val){
					return false;
				}
			}
		}
		return true;
	}

	my.isDuplicate = function(card){
		var list = [];
		for(var i = 0; i < checkCards.length; i++){
			if(card.getValue() == checkCards[i].getValue() && card.getSuit() == checkCards[i].getSuit()){
				list.push(checkCards[i]);
			}
		}
		if(list.length == 0){
			return null;
		} 
		return list;
	}

	return my;
})(AIcardClass);