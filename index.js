let randomWordsArr = ["javascript", "nodemon", "interpolation"];
let guessesLeft = 10;
let lettersGuessed = [];
let computerGuess = "nodemon";
let correctGuess = [];
//let userGuess = "";
// Got random word to appear now need to loop over word to render correct amount of dashes fro hangman
//window.onload = function () {
//  let compRandomWord =
//    randomWordsArr[Math.floor(Math.random() * randomWordsArr.length)];
//  computerGuess = compRandomWord;
//  console.log(computerGuess);
//};

//if letter has already been guessed stop user from using letter again
document.onkeyup = function logUserKey(event) {
  let userKey = event.key;
  lettersGuessed.push(userKey);
  console.log(lettersGuessed);
  console.log(computerGuess);
  if (userKey == computerGuess) {
    console.log("it a match");
  }

  document.querySelector("#lettersGuessed").innerHTML = lettersGuessed;
};
