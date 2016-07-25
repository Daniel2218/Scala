var Hand = (function (){

	var my = {};
	var _theHand = [];

	my.Hand = function(cards){
		_theHand.concat(cards);

		this.draw = function(card){
			_theHand.push(card);
		}
		this.drop = function(){
			
		}
	}

	return my;
})();