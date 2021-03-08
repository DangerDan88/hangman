let randomWordsArr = ["javascript", "nodemon", "interpolation"];
let guessesLeft = 10;
let lettersGuessed = [];
let computerGuess = [];
let correctGuess = [];
// Got random word to appear now need to loop over word to render correct amount of dashes fro hangman
window.onload = function () {
  let compRandomWord =
    randomWordsArr[Math.floor(Math.random() * randomWordsArr.length)];
  computerGuess.push(compRandomWord);
  console.log(computerGuess);
};

//if letter has already been guessed stop user from using letter again
document.onkeyup = function (event) {
  let userGuess = event.key;
  lettersGuessed.push(userGuess);
  console.log(guessesLeft);
  if (computerGuess.includes(userGuess) && guessesLeft > 0) {
    console.log("thats a good guess");
    correctGuess.push(userGuess);
    lettersGuessed.push(userGuess);
    //console.log(correctGuess.join(""));
    console.log(computerGuess);
    console.log(userGuess);
    document.querySelector(".gameContainer").innerHTML = correctGuess;
  } else if (correctGuess == computerGuess) {
    alert("Thats a win");
  } else if (guessesLeft < 1) {
    alert("Game is over try again ");
  } else {
    guessesLeft--;
    lettersGuessed.push(userGuess);
  }

  document.querySelector("#lettersGuessed").innerHTML = lettersGuessed;
};

//TODO figure out to have a user win my comparison isnt working and need to figure out dashes for the hangman
