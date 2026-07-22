"use strict";

// DOM Elements
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

// Array of DOM Elements for easy access and updation.
const players = [player1, player2];
const currentElements = [player1Current, player2Current];
const scoreElements = [player1Score, player2Score];

// Initial Values
const WINNING_SCORE = 100;
player1.classList.add("active-player");

// Game State
const game = {
  scores: [0, 0],
  currentScore: 0,
  activePlayer: 0,
  playing: true,
};

// Game UI update functions
function resetGameUI() {
  currentElements[0].textContent = game.currentScore;
  currentElements[1].textContent = game.currentScore;
  scoreElements[0].textContent = game.scores[0];
  scoreElements[1].textContent = game.scores[1];
  players[0].classList.add("active-player");
  players[1].classList.remove("active-player");
  diceImg.src = `./Assets/initialImg.png`;
  mainText.textContent = "Roll the Dice";
}

function renderActivePlayerUI() {
  players[game.activePlayer].classList.add("active-player");
  players[1 - game.activePlayer].classList.remove("active-player");
}

function renderTotalScore() {
  scoreElements[game.activePlayer].textContent = game.scores[game.activePlayer];
}

function renderCurrentScore() {
  currentElements[game.activePlayer].textContent = game.currentScore;
}

function renderWinner() {
  mainText.textContent = `Player ${game.activePlayer ? 2 : 1} won the Game🥳`;
}

// Game Logics
function resetGame() {
  game.scores = [0, 0];
  game.currentScore = 0;
  game.activePlayer = 0;
  game.playing = true;
  resetGameUI();
}

function handleDiceRoll(num) {
  if (num !== 1) {
    processCurrentScores(num);
  } else {
    game.currentScore = 0;
    renderCurrentScore();
    game.activePlayer = 1 - game.activePlayer;
    renderActivePlayerUI();
  }
}

function processCurrentScores(num) {
  game.currentScore += num;
  renderCurrentScore();
}

function processTotalScores() {
  game.scores[game.activePlayer] += game.currentScore;
  renderTotalScore();
  game.currentScore = 0;
  renderCurrentScore();
  if (handleWinner()) return;
  game.activePlayer = 1 - game.activePlayer;
  renderActivePlayerUI();
}

function handleWinner() {
  if (game.scores[0] >= WINNING_SCORE || game.scores[1] >= WINNING_SCORE) {
    renderWinner();
    game.playing = false;
    return true;
  }
  return false;
}

// Events on Game
rollDiceBtn.addEventListener("click", () => {
  if (!game.playing) return;
  const num = Math.trunc(Math.random() * 6) + 1;
  diceImg.src = `./Assets/${num}dice.png`;
  handleDiceRoll(num);
});

holdBtn.addEventListener("click", () => {
  if (!game.playing) return;
  processTotalScores();
});

newGameBtn.addEventListener("click", resetGame);
