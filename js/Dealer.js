// handles dealing of the cards

//var Dealer = (function(Deck,AIhand){

	Deck.Build();

	var deck = Deck.Cards;
	var arr = [];

	// for (var i = 0; i < 13; i++){
	// 	arr.push(deck.pop());
	// }

	arr.push(
		new AIcardClass.AIcard(1,"diamonds"),
		new AIcardClass.AIcard(12,"diamonds")
		// new AIcardClass.AIcard(3,"diamonds"),
		// new AIcardClass.AIcard(11,"hearts"),
	 //    new AIcardClass.AIcard(2,"hearts"),
		// new AIcardClass.AIcard(5,"spades"),
		// new AIcardClass.AIcard(9,"hearts"),
	 //    new AIcardClass.AIcard(12,"diamonds"),
		// new AIcardClass.AIcard(6,"hearts"),
		// new AIcardClass.AIcard(3,"spades"),
		// new AIcardClass.AIcard(12,"clubs"),
		// new AIcardClass.AIcard(2,"spades"),
		// new AIcardClass.AIcard(10,"spades")
	);

	// for (var i = 0; i < arr.length; i++){
	// 	console.log((i+1) + ". " + arr[i].getValue() + " of " + arr[i].getSuit());
	// }

	AIhand.Build(arr);

	for (var i = 0; i < arr.length; i++){
		var set = "{ ";
		for (var j = 0; j < AIhand._hand[i]._set.Cards.length; j++){
		 	set += AIhand._hand[i]._set.Cards[j].getValue() + " of " +
		 		 AIhand._hand[i]._set.Cards[j].getSuit() + ", ";
		}
		set += " }";

		var straight = "{ ";
		for(var j = 0; j < AIhand._hand[i]._straight.Cards.length; j++){
			straight += AIhand._hand[i]._straight.Cards[j].getValue() + " of " +
			 		 AIhand._hand[i]._straight.Cards[j].getSuit() + ", ";
		}
		straight += " }";

		console.log((i+1) + ". " + AIhand._hand[i].getValue() + " of " + AIhand._hand[i].getSuit() 
			+ " Prob of Set: " + AIhand._hand[i]._set.Prob + set + " Prob of straight: "
			 + AIhand._hand[i]._straight.Prob + straight);
	}
//})(Deck,AIhand);