let randomWordsArr = ["javascript", "nodemon", "interpolation"];

let wins = 0;
let losses = 0;
let guessesLeft = 10;
let lettersGuessed = [];
let computerGuess = [];
// Got random word to appear now need to loop over word to render correct amount of dashes fro hangman
window.onload = function () {
  let compRandomWord =
    randomWordsArr[Math.floor(Math.random() * randomWordsArr.length)];
  computerGuess.push(compRandomWord);
  console.log(computerGuess[0]);
};

//if letter has already been guessed stop user from using letter again
