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
  player1Current.textContent = game.currentScore;
  player1Score.textContent = game.scores[0];
  player2Current.textContent = game.currentScore;
  player2Score.textContent = game.scores[1];
  player1.classList.add("active-player");
  diceImg.src = `./Assets/initialImg.png`;
  mainText.textContent = "Roll the Dice";
}

function changeColors() {
  if (!game.playing) return;

  if (!game.activePlayer) {
    player1.classList.add("active-player");
    player2.classList.remove("active-player");
  } else {
    player2.classList.add("active-player");
    player1.classList.remove("active-player");
  }
}

function updateCurrentScores(num) {
  game.currentScore += num;
  if (!game.activePlayer) {
    player1Current.textContent = game.currentScore;
  } else {
    player2Current.textContent = game.currentScore;
  }
}

function updateTotalScores() {
  if (!game.activePlayer) {
    game.scores[game.activePlayer] += game.currentScore;
    player1Score.textContent = game.scores[game.activePlayer];
    game.currentScore = 0;
    player1Current.textContent = game.currentScore;
    game.activePlayer = 1 - game.activePlayer;
    checkWinner();
    changeColors();
  } else {
    game.scores[game.activePlayer] += game.currentScore;
    player2Score.textContent = game.scores[game.activePlayer];
    game.currentScore = 0;
    player2Current.textContent = game.currentScore;
    game.activePlayer = 1 - game.activePlayer;
    checkWinner();
    changeColors();
  }
}

function checkDice(num) {
  if (num !== 1) {
    changeColors();
    updateCurrentScores(num);
  } else {
    game.currentScore = 0;
    if (!game.activePlayer) player1Current.textContent = game.currentScore;
    if (game.activePlayer) player2Current.textContent = game.currentScore;
    game.activePlayer = 1 - game.activePlayer;
    changeColors();
  }
}

const checkWinner = () => {
  if (game.scores[0] >= WINNING_SCORE) {
    mainText.textContent = "Player 1 won the Game🥳";
    game.playing = false;
  } else if (game.scores[1] >= WINNING_SCORE) {
    mainText.textContent = "Player 2 won the Game🥳";
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
