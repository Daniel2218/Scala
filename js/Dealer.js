// handles dealing of the cards

//var Dealer = (function(Deck,AIhand){

	Deck.Build();

	var deck = Deck.Cards;
	var arr = [];

	// for (var i = 0; i < 13; i++){
	// 	arr.push(deck.pop());
	// }

	arr.push(new AIcardClass.AIcard(7,"spades"),
			new AIcardClass.AIcard(6,"clubs"),
			new AIcardClass.AIcard(4,"hearts"),
			new AIcardClass.AIcard(10,"diamonds"),
			new AIcardClass.AIcard(7,"diamonds"),
			new AIcardClass.AIcard(10,"clubs"),
			new AIcardClass.AIcard(8,"diamonds"),
			new AIcardClass.AIcard(1,"clubs"),
			new AIcardClass.AIcard(5,"hearts"),
			new AIcardClass.AIcard(10,"diamonds"),
			new AIcardClass.AIcard(9,"hearts"),
			new AIcardClass.AIcard(9,"diamonds"),
			new AIcardClass.AIcard(7,"clubs")
		);

	for (var i = 0; i < 13; i++){
		console.log((i+1) + ". " + arr[i].getValue() + " of " + arr[i].getSuit());
	}

	AIhand.Build(arr);

	for (var i = 0; i < 13; i++){
		var str = "{ ";
		for (var j = 0; j < AIhand._hand[i]._set.Cards.length; j++){
		 	str += AIhand._hand[i]._set.Cards[j].getValue() + " of " +
		 		 AIhand._hand[i]._set.Cards[j].getSuit() + ", ";
		}
		str += " }";
		console.log((i+1) + ". " + AIhand._hand[i].getValue() + " of " + AIhand._hand[i].getSuit() 
			+ " Prob of Set: " + AIhand._hand[i]._set.Prob * 100 + str);
	}
//})(Deck,AIhand);