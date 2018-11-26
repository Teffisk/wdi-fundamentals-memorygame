var cards = [
{rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png"
},
{rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png"
},
{rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png"
},
{rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png"
}
];
var cardsInPlay = [];

var flipCard = function(cardId) {
	 console.log("User flipped a " + cards[cardId].rank);
  cardsInPlay.push(cards[cardId].rank);
  	console.log(cards[cardId].suit);
	console.log(cards[cardId].cardImage);
	//make sure 2 cards have been picked
  if (cardsInPlay.length === 2) {
  	//check to see if the cards match
	if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match"); 
	}
	else { 
		//alert if the cards don't match
		alert("Sorry, try again");
	}
  }
};

flipCard(0);
flipCard(2);