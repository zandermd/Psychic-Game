//computer choices & user varibles
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

	var wins = 0;
	var losses = 0;
	var numGuesses = 10;
	var guessChoices = [];

//make key event 
document.onkeyup = function(event) {

    var userGuess = event.key;

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
    
//if statements (if user guesses correctly, if guesses incorrectly, number of guesses for user)
   
//if user guesses wrong, deduct a turn
if (options.indexOf(userGuess) > -1) {

        //if user guesses correctly/make alert   
       if (userGuess === computerGuess) {
           alert ('You are psychic!')
           wins++;
           numGuesses = 10;
           guessChoices = [];
       }

       //if user guesses incorrectly/make alert
       if (userGuess != computerGuess) {
           alert ('You are not psychic!')
           numGuesses --;
           guessChoices.push(userGuess);
       }

       //when number of guesses reaches 0, reset game and add a loss
       if (numGuesses === 0) {

       numGuesses = 10;
       losses ++;
       guessChoices = [];

       
   }

   //html connections 
   var html = 
   "<h1> The Psychic Game </h1>" +
   "<p>Guess what letter I'm thinking of!</p>" +
   "<p>Wins: " + wins + "</p>" +
   "<p>Losses: " + losses + "</p>" +
   "<p>Guesses Left: " + numGuesses + "</p>" +
   "<p>Your Guesses so far: " + guessChoices.join(", ") + "</p>";

   document.querySelector("#game").innerHTML = html;

   
   }
};
