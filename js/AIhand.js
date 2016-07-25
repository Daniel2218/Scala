var AI_hand = (function(){

	var my = {};
    var _hand = [];

    my.AIhand = function(oldHand){
		for (var i = 0; i < oldHand.length; i++){
			_hand.push(new AIcard(oldHand[i].value,oldHand[i].suit,1,1));
		}

		_onHand(_hand);

		this.Draw = function(card){
			_hand.push(card);

			_compareCardsTo(_hand.length - 1);	
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
		for (var i = 0; i < _hand.length; i++) {
			if(_hand[index].isSetWith(_hand[i])){
				_hand[index].incrementSet();
			}
			if(_hand[index].isStraightWith(_hand[i])){
				_hand[index].incrementStraight();
			}
		}
	}

	return my;
})();