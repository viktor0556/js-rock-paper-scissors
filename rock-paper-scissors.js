const rockButton = document.querySelector('.js-rock-button');
const paperButton = document.querySelector('.js-paper-button');
const scissorsButton = document.querySelector('.js-scissors-button');
const resultParagh = document.querySelector('.result');
const computerMoveDisplay = document.querySelector('.js-computer-move');
const drawDisplayResult = `<p style="
color: rgb(240, 220, 0);
font-size: 20px;
font-weight: bold;
text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
">Draw</p>` ;
const winDisplayResult = `<p style="
color: green;
font-size: 20px;
font-weight: bold;
text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
">Win</p>`;
const loseDisplayResult = `<p style="
color: red;
font-size: 20px;
font-weight: bold;
text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
">Lose</p>`;
let computer;

rockButton.addEventListener('click', () => {
  rock();
});

paperButton.addEventListener('click', () => {
  paper();
});

scissorsButton.addEventListener('click', () => {
  scissors();
});

function rock() {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    computer = 'rock';
    computerMoveDisplay.innerHTML = `computer: ${computer}`;
    resultParagh.innerHTML = drawDisplayResult;
  } else if (randomNumber === 1) {
    computer = 'paper';
    computerMoveDisplay.innerHTML = `computer: ${computer}`;
    resultParagh.innerHTML = loseDisplayResult;
  } else if (randomNumber === 2) {
    computer = 'scissors';
    computerMoveDisplay.innerHTML = `computer: ${computer}`;
    resultParagh.innerHTML = winDisplayResult;
  }
};

function paper() {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    computer = 'rock'
    computerMoveDisplay.innerHTML = `computer: ${computer}`;
    resultParagh.innerHTML = winDisplayResult;
  } else if (randomNumber === 1) {
    computer = 'paper';
    computerMoveDisplay.innerHTML = `computer: ${computer}`;
    resultParagh.innerHTML = drawDisplayResult;
  } else if (randomNumber === 2) {
    computer = 'scissors';
    computerMoveDisplay.innerHTML = `computer: ${computer}`;
    resultParagh.innerHTML = loseDisplayResult;
  }
};

function scissors() {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    computer = 'rock';
    computerMoveDisplay.innerHTML = `computer: ${computer}`;
    resultParagh.innerHTML = loseDisplayResult;
  } else if (randomNumber === 1) {
    computer = 'paper';
    computerMoveDisplay.innerHTML = `computer: ${computer}`;
    resultParagh.innerHTML = winDisplayResult;
  } else if (randomNumber === 2) {
    computer = 'scissors';
    computerMoveDisplay.innerHTML = `computer: ${computer}`;
    resultParagh.innerHTML = drawDisplayResult;
  }
};
