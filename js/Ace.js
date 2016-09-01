var AceClass = (function(CardClass){

	var my = {}, key;

	for (key in CardClass){
		if(CardClass.hasOwnProperty(key)){
			my[key] = CardClass[key];
		}
	}

	var _parentCard = my.Card;

	my.Card = function(_suit) {

		this._value1 = 1;
		this._value2 = 11;

		CardClass.Card.call(this, _value1, _suit);

		this.getHighValue = function(){
			return _value2;
		}
	}

	return my;

})(CardClass);
