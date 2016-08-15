var AIhand = (function(AIcard){

	var my = {};
    var _hand = [];
<<<<<<< HEAD
    var _worstCard;
   
    my.Build = function(arr){
		for (var i = 0; i < arr.length; i++){
			_hand.push(new AIcard.Build(arr[i].value,arr[i].suit,1,1));
=======

    my.AIhand = function(oldHand){
		for (var i = 0; i < oldHand.length; i++){
			_hand.push(new AIcard(oldHand[i].value,oldHand[i].suit,1,1));
>>>>>>> parent of 886c401... small changes
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
<<<<<<< HEAD
			if(_hand[index].isSetWith(_hand[i], _hand)){
				_hand[index]._set.Num++;
				_hand[index]._set.Cards.push(_hand[i]);
				_hand[index]._set.setProb();
			}
			if(_hand[index].isStraightWith(_hand[i])){
				_hand[index]._straight.Num++;
				_hand[index]._straight.Cards.push(_hand[i]);
				_hand[index]._set.setStraightProb();
=======
			if(_hand[index].isSetWith(_hand[i])){
				_hand[index].incrementSet();
			}
			if(_hand[index].isStraightWith(_hand[i])){
				_hand[index].incrementStraight();
>>>>>>> parent of 886c401... small changes
			}
		}
	}

	return my;
})(AIcard);