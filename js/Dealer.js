// handles dealing of the cards

//var Dealer = (function(Deck,AIhand){

	Deck.Build();

	var deck = Deck.Cards;
	var arr = [];

	for (var i = 0; i < 13; i++){
		arr.push(deck.pop());
	}

	AIhand.Build(arr);

//})(Deck,AIhand);