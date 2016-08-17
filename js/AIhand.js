var AIhand = (function(AIcardClass){

	var my = {};
    my._hand = [];
    var _worstCard;
   
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
		}
	}

	function _compareCardsTo(index){
		for (var i = 0; i < my._hand.length; i++) {
			if(my._hand[index].isSetWith(my._hand[i])){
				my._hand[index]._set.Num++;
				my._hand[index]._set.Cards.push(my._hand[i]);
				my._hand[index].setProb();
			}
			if(my._hand[index].isStraightWith(my._hand[i], my._hand)){
				my._hand[index]._straight.Num++;
				my._hand[index]._straight.Cards.push(my._hand[i]);
				my._hand[index].setStraightProb();
				//console.log(my._hand[index].getSuit() + my._hand[index].getValue());
			}
		}

		for (var i = 0; i < my._hand.length; i++) {
			for(var k = 0; k < my._hand[i]._set.Num; k++){
				console.log(my._hand[index]._set.Cards[k].getSuit() + 
					my._hand[index]._set.Cards[k].getValue());
			}
		}
	}

	function _worstCard(){

	}
	return my;
})(AIcardClass);