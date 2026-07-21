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

// Initial Scores
player1Current.textContent = 0;
player1Score.textContent = 0;
player2Current.textContent = 0;
player2Score.textContent = 0;
let activePlayer = true;
player1.classList.add("active-player");

rollDiceBtn.addEventListener("click", () => {
  const num = Math.trunc(Math.random() * 6) + 1;
  diceImg.src = `./Assets/${num}dice.png`;

  if (!diceImg.src.includes("1dice")) {
    if (activePlayer) {
      player1Current.textContent = Number(player1Current.textContent) + num;
      player1.classList.add("active-player");
      player2.classList.remove("active-player");
    } else {
      player2Current.textContent = Number(player2Current.textContent) + num;
      player2.classList.add("active-player");
      player1.classList.remove("active-player");
    }
  } else {
    if (activePlayer) {
      player1Current.textContent = 0;
    } else {
      player2Current.textContent = 0;
    }
    activePlayer = !activePlayer;
  }
});

holdBtn.addEventListener("click", () => {
  if (activePlayer) {
    player1Score.textContent =
      Number(player1Score.textContent) + Number(player1Current.textContent);
    player1Current.textContent = 0;
    player1.classList.add("active-player");
    player2.classList.remove("active-player");
    activePlayer = !activePlayer;
  } else {
    player2Score.textContent =
      Number(player2Score.textContent) + Number(player2Current.textContent);
    player2Current.textContent = 0;
    player2.classList.add("active-player");
    player1.classList.remove("active-player");
    activePlayer = !activePlayer;
  }
});

newGameBtn.addEventListener("click", () => {
  player1Current.textContent = 0;
  player1Score.textContent = 0;
  player2Current.textContent = 0;
  player2Score.textContent = 0;
  let activePlayer = true;
  player1.classList.add("active-player");
});
