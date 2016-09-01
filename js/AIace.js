var AIaceClass = (function(AIcardClass){

	var my = {}, key;

	for (key in AIcardClass){
		if(AIcardClass.hasOwnProperty(key)){
			my[key] = AIcardClass[key];
		}
	}

	var _parentCard = my.Card;

	my.card = function(_suit, _id) {

		this._set = _parentCard._set;
		this._lowStraight = _parentCard._straight;

		this.highStraight = {
			Cards : [this],
			Prob : 0,
			MissingCards : [],
			IsComplete : false
		}
	}
})(AIcardClass);
