let randomWordsArr = ["javascript", "nodemon", "interpolation"];
let wins = 0;
let losses = 0;
let guessesLeft = 10;
let lettersGuessed = [];
let computerGuess = "";
// Got random word to appear now need to loop over word to render correct amount of dashes fro hangman
window.onload = function () {
  let compRandomWord =
    randomWordsArr[Math.floor(Math.random() * randomWordsArr.length)];
  computerGuess = compRandomWord;
  // console.log(computerGuess);
};

//if letter has already been guessed stop user from using letter again
document.onkeyup = function (event) {
  let userGuess = event.key;
  lettersGuessed.push(userGuess);
  //console.log(userGuess);

  function loopArr() {
    for (let i = 0; i < computerGuess.length; i++) {
      // console.log(computerGuess);
      let letterStr = computerGuess.charAt(i);
      console.log(letterStr);
    }
    // console.log(computerGuess);
    //Loop over computer random guess letters and if statment it over the user guess dont have to loop full array jus the random word
  }
  loopArr();
};
