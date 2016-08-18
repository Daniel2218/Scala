var AIhand = (function(AIcardClass){

	var my = {};
    my._hand = [];
    var _worstCard;
   	var checkCards = [];

    my.Build = function(arr){
		for (var i = 0; i < arr.length; i++){
			my._hand.push(new AIcardClass.AIcard(arr[i].getValue(),arr[i].getSuit(),1,1));
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
			_hand[index].setProb();
			_hand[index].setStraightProb();
			checkCards.push(my._hand[j]);
		}
	}

	function _compareCardsTo(index){
		for (var i = 0; i < my._hand.length; i++) {
			if(!_isDuplicate(my._hand[index])){
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
	}

	function _isDuplicate(card){
		for(var i = 0; i < checkCards.length; i++){
			if(card.getValue() == checkCards[i].getValue() && card.getSuit() == checkCards[i].getSuit()){
				return true;
			}
		}
		return false;
	}
	return my;
})(AIcardClass);