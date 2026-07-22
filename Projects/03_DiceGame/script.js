"use strict";

const newGameBtn = document.querySelector("#newGameBtn");
const rollDiceBtn = document.querySelector("#rollDiceBtn");
const holdBtn = document.querySelector("#holdBtn");
const player1 = document.querySelector(".player1");
const player2 = document.querySelector(".player2");
const player1Score = document.querySelector("#player1Score");
const player2Score = document.querySelector("#player2Score");
const player1Current = document.querySelector("#player1Current");
const player2Current = document.querySelector("#player2Current");
const diceImg = document.querySelector(".diceImg");
const mainText = document.querySelector("h1");

const players = [player1, player2];
const currentElements = [player1Current, player2Current];
const scoreElements = [player1Score, player2Score];

// Initial Values
const WINNING_SCORE = 100;
player1.classList.add("active-player");

const game = {
  scores: [0, 0],
  currentScore: 0,
  activePlayer: 0,
  playing: true,
};

function resetGame() {
  game.scores = [0, 0];
  game.currentScore = 0;
  game.activePlayer = 0;
  game.playing = true;
  currentElements[0].textContent = game.currentScore;
  currentElements[1].textContent = game.currentScore;
  scoreElements[0].textContent = game.scores[0];
  scoreElements[1].textContent = game.scores[1];
  players[0].classList.add("active-player");
  players[1].classList.remove("active-player");
  diceImg.src = `./Assets/initialImg.png`;
  mainText.textContent = "Roll the Dice";
}

function changeColors() {
  if (!game.playing) return;
  players[game.activePlayer].classList.add("active-player");
  players[1 - game.activePlayer].classList.remove("active-player");
}

function updateCurrentScores(num) {
  game.currentScore += num;
  currentElements[game.activePlayer].textContent = game.currentScore;
}

function updateTotalScores() {
  game.scores[game.activePlayer] += game.currentScore;
  scoreElements[game.activePlayer].textContent = game.scores[game.activePlayer];
  game.currentScore = 0;
  currentElements[game.activePlayer].textContent = game.currentScore;
  checkWinner();
  game.activePlayer = 1 - game.activePlayer;
  changeColors();
}

function checkDice(num) {
  if (num !== 1) {
    changeColors();
    updateCurrentScores(num);
  } else {
    game.currentScore = 0;
    currentElements[game.activePlayer].textContent = game.currentScore;
    game.activePlayer = 1 - game.activePlayer;
    changeColors();
  }
}

const checkWinner = () => {
  if (game.scores[0] >= WINNING_SCORE || game.scores[1] >= WINNING_SCORE) {
    mainText.textContent = `Player ${game.activePlayer ? 2 : 1} won the Game🥳`;
    game.playing = false;
  }
};

rollDiceBtn.addEventListener("click", () => {
  if (!game.playing) return;

  const num = Math.trunc(Math.random() * 6) + 1;
  diceImg.src = `./Assets/${num}dice.png`;
  checkDice(num);
});

holdBtn.addEventListener("click", () => {
  if (!game.playing) return;

  updateTotalScores();
});

newGameBtn.addEventListener("click", resetGame);
