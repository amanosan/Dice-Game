function getImage() {
   var randomNumber = Math.floor(Math.random() * 6) + 1;
   var randomImage = "images/dice" + randomNumber + ".png";
   return {
      randomNumber,
      randomImage
   };
}

// Player 1:
var player1 = getImage();
var player2 = getImage();

// setting the dice image of player 1:
document.querySelector(".img1").setAttribute("src", player1.randomImage);

//setting the dice image of player 2:
document.querySelector(".img2").setAttribute("src", player2.randomImage);

// changing the heading according to who wins:
if (player1.randomNumber > player2.randomNumber) {
   document.querySelector("h1").textContent = "Player 1 wins!!";
}
else if (player1.randomNumber < player2.randomNumber) {
   document.querySelector("h1").textContent = "Player 2 wins!!";
}
else {
   document.querySelector("h1").textContent = "It's a Tie!!";
}