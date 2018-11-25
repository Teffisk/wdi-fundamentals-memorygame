var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

var flipCard = function(cardId) {
	 console.log("User flipped a " + cards[cardId]);
  cardsInPlay.push(cards[cardId]);
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
















