let randomWordsArr = ["javascript", "nodemon", "interpolation"];
let guessesLeft = 10;
let lettersGuessed = [];
let computerGuess = "nodemon";
let correctGuess = [];
let wrongGuess = [];

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
  console.log(lettersGuessed.join(""));
  console.log(computerGuess);
  guessesLeft--;
  if (correctGuess.join("") === computerGuess) {
    console.log("congrats you win");
  } else if (guessesLeft < 1) {
    console.log("GameOver");
  } else if (computerGuess.includes(userKey) && guessesLeft > 0) {
    console.log("thats a good guess");
    correctGuess.push(userKey);
    document.querySelector(".correctGuess").innerHTML = correctGuess;
  } else {
    console.log("nice try guess again");
    wrongGuess.push(userKey);

    document.querySelector("#lettersGuessed").innerHTML = wrongGuess;
  }
};
