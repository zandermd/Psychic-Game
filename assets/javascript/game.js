//computer choices
var psychicLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

//user varibles
var yourWins = 1;
var yourLosses = 0;
var guessesLeft = 10;
var playerChoice = "";
var lettersGuessed = [];

//generate random letter by the computer
var ranLetter = psychicLetters[Math.floor(Math.random() * psychicLetters.length)];
console.log(ranLetter)

//new guesses
function newGuess() {
    playerChoice = "";
    lettersGuessed = [];
    guessesLeft = 10;
    ranLetter = psychicLetters[Math.floor(Math.random() * psychicLetters.length)];
    document.getElementById('playerChoice').innerHTML = ('');
    console.log('compGuess');
}

//log users input, make click event
document.onkeyup = function (event) {
    var playerChoice = event.key;
    console.log('guesses');
}

if (guessesLeft > 0) {

    //if player makes correct guess, log the win
    if (playerChoice == psychicLetters) {
        alert("Can you guess the right letter?")
        document.getElementById('wins').innerHTML = (yourWins);
        (yourWins += 1);
        newGuess();
        console.log('comp');
    }

    //if player makes wrong guess, log the loss
    if (playerChoice != psychicLetters) {
        console.log('correct');

        document.getElementById('guessesLeft').innerHTML = guessesLeft;
        lettersGuessed.push('playerChoice');
        joinArray = lettersGuessed.join(',');
        document.getElementById('playerChoice').innerHTML = joinArray;
        console.log('test');

        if (guessesLeft === 0) {
            alert("You lose!");
            losses += 1;
            document.getElementById('yourLosses').innerHTML = yourLosses;
            newGuess();
            console.log('COMP GUESS');

        }

    }
}