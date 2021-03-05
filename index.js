let randomWordsArr = ["javascript", "nodemon", "interpolation"];
let wins = 0;
let losses = 0;
let guessesLeft = 10;
let lettersGuessed = [];
let computerGuess = "";
let correctGuess = [];
// Got random word to appear now need to loop over word to render correct amount of dashes fro hangman
window.onload = function () {
  let compRandomWord =
    randomWordsArr[Math.floor(Math.random() * randomWordsArr.length)];
  computerGuess = compRandomWord;
  console.log(computerGuess);
};

//if letter has already been guessed stop user from using letter again
document.onkeyup = function (event) {
  let userGuess = event.key;
  lettersGuessed.push(userGuess);
  guessesLeft--;
  console.log(guessesLeft);
  console.log(computerGuess.includes(userGuess));

  console.log(userGuess);
};
//TOdO figure out how to check user guess is a match to any letter in the string
