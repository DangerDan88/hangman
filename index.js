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
  //console.log(computerGuess);
};

//if letter has already been guessed stop user from using letter again
document.onkeyup = function (event) {
  let userGuess = event.key;
  lettersGuessed.push(userGuess);
  //console.log(userGuess);

  function loopArr() {
    for (let i = 0; i < computerGuess.length; i++) {
      // console.log(computerGuess[i]);
      let letterStr = computerGuess.charAt(i).split("");
      console.log(letterStr);
      if (userGuess === letterStr) {
        console.log("its a match");
      } else if (userGuess !== letterStr) {
        console.log("not a match");
        guessesLeft -= 1;
        console.log("guess", guessesLeft);
      }
    }
    // console.log(computerGuess);
    //need to add logic to update score letters guessed and hangman on right and wrong guess fix else statement logging not a match probably a prolblem with for loop
  }
  loopArr();
};
