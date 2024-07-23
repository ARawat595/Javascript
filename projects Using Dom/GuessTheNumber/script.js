let randomNumber = parseInt(Math.random() * 100 + 1); //parseInt is also used to covert from decimal to integer like math.floor
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

let p = document.createElement('p');

let prevGuess = []; // we will store values in array and then show it to user
let numGuess = 1; // no of guess attempts he has taken start with 1

let playGame = true; //always a variable declared in any game that allow user to  play game

if (playGame) {
  submit.addEventListener('click', function (e) {
    //this will stop from submitting the form dirctly
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  //to check whether user is giving input value is correct or not
  if (isNaN(guess)) {
    alert(`Please enter a valid number`);
  } else if (guess < 1) {
    alert(`please enter a number greater than 1`);
  } else if (guess > 100) {
    alert(`please enter a number less than 100`);
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over : random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  //this method will print msg that your value is low/high, correct/not
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
  } else if (guess < randomNumber) {
    displayMessage(`Number is Too Low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is Too High`);
  }
}

function displayGuess(guess) {
  //this method will interact with DOM, it will empty the value so that user can input another value,and will add our guess to innerHTML and will decrease no of guesses
  userInput.value = ''; //this is cleaning old values
  guessSlot.innerHTML += `${guess}, `; //this is pushing the values that is guessed by user
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`; //it is decreasing the reamaining guesses
}
function displayMessage(msg) {
  //it will print msg that we will pass in lowOrHi
  lowOrHi.innerHTML = `<h2>${msg}</h2>`;
}

function endGame() {
  userInput.value = ''; //this will clear all values
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  NewGame();
}

function NewGame() {
  const newGameBtn = document.querySelector('#newGame');
  newGameBtn.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}
