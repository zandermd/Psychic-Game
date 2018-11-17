//make counters & varibles
var won = 0;
var lost = 0;
var attempts = 10;
var emptyString = "";
var ranLetter = ranLetter;
var letters = "abcdefghijklmnopqrstuvwxyz";

//generate a random letters
function getRandomLetter() {
ranLetter = letters[Math.floor(Math.random() * letters.length)];
console.log(ranLetter);
}