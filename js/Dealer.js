// handles dealing of the cards

//var Dealer = (function(Deck,AIhand){

	Deck.Build();

	var deck = Deck.Cards;
	var arr = [];

	for (var i = 0; i < 13; i++){
		arr.push(deck.pop());
	}

	AIhand.Build(arr);

	for (var i = 0; i < 13; i++){
		//console.log("Value: " + AIhand._hand[i].getValue() + " Suit: " + AIhand._hand[i].getSuit() +
		//	" Set Prob: " + AIhand._hand[i]._set.Prob + " Straight Prob: " + AIhand._hand[i]._straight.Prob);
	}
//})(Deck,AIhand);