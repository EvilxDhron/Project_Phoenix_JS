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

// Initial Values
let activePlayer = true;
player1.classList.add("active-player");

function resetGame() {
  player1Current.textContent = 0;
  player1Score.textContent = 0;
  player2Current.textContent = 0;
  player2Score.textContent = 0;
  let activePlayer = true;
  player1.classList.add("active-player");
  diceImg.src = `./Assets/initialImg.png`;
}

function changeColors() {
  if (activePlayer) {
    player1.classList.add("active-player");
    player2.classList.remove("active-player");
  } else {
    player2.classList.add("active-player");
    player1.classList.remove("active-player");
  }
}

function updateCurrentScores(num) {
  if (activePlayer) {
    player1Current.textContent = Number(player1Current.textContent) + num;
  } else {
    player2Current.textContent = Number(player2Current.textContent) + num;
  }
}

function updateTotalScores() {
  if (activePlayer) {
    player1Score.textContent =
      Number(player1Score.textContent) + Number(player1Current.textContent);
    player1Current.textContent = 0;
    activePlayer = !activePlayer;
    changeColors();
  } else {
    player2Score.textContent =
      Number(player2Score.textContent) + Number(player2Current.textContent);
    player2Current.textContent = 0;
    activePlayer = !activePlayer;
    changeColors();
  }
}

function checkDice(dice, num) {
  if (!dice.includes("1dice")) {
    changeColors();
    updateCurrentScores(num);
  } else {
    if (activePlayer) {
      player1Current.textContent = 0;
    } else {
      player2Current.textContent = 0;
    }
    activePlayer = !activePlayer;
    changeColors();
  }
}

rollDiceBtn.addEventListener("click", () => {
  const num = Math.trunc(Math.random() * 6) + 1;
  diceImg.src = `./Assets/${num}dice.png`;
  checkDice(diceImg.src, num);
});

holdBtn.addEventListener("click", () => {
  updateTotalScores();
});

newGameBtn.addEventListener("click", () => {
  resetGame();
});
