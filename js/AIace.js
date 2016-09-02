var AIaceClass = (function(AIcardClass){

	var my = {}, key;

	for (key in AIcardClass){
		if(AIcardClass.hasOwnProperty(key)){
			my[key] = AIcardClass[key];
		}
	}

	var _parentCard = my.AIcard;

	my.AIcard = function(_suit, _id) {
		_parentCard.call(this, 1, _suit, _id);

		this._lowStraight = _parentCard._straight;

		this.highStraight = {
			Cards : [this],
			Prob : 0,
			MissingCards : [],
			IsComplete : false
		}

		this.getHighValue =  11;
		this.getLowValue = this.getValue();
	}

	return my;
})(AIcardClass);
