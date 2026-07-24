"use strict";

// DOM Elements
const body = document.querySelector("body");
const numbox = document.querySelector(".numbox");
const againBtn = document.querySelector(".againBTN");
const guessText = document.querySelector(".guessText");
const hiddenNumBox = document.querySelector(".numboxText");
const inputBox = document.querySelector("#num");
const checkBtn = document.querySelector(".inputBtn");
const highLowText = document.querySelector(".text1");
const scoreText = document.querySelector(".text2");
const highScore = document.querySelector(".text3");
const inputSection = document.querySelector(".sec1");
highScore.textContent = localStorage.getItem("newHighScore") || 0;

// Initial Values / Game State

const game = {
  hiddenNum: Math.trunc(Math.random() * 20) + 1,
  score: 20,
  clickTimer: null,
};

// Game UI Functions

function resetGameUI() {
  scoreUIUpdate();
  backUIChange();
  numboxUIChange();
  hiddenNumUIChange();
  showMessage();
  guessUIupdate();
  resetInput();
  setSectionDisplay();
  highScore.textContent = localStorage.getItem("newHighScore") || 0;
}

function showMessage(message = "😉 Start guessing the number...") {
  highLowText.textContent = message;
}

function resetInput() {
  inputBox.value = "";
}

function guessUIupdate(text = "Guess My Number!") {
  guessText.textContent = text;
}

function scoreUIUpdate(score = 20) {
  scoreText.textContent = score;
}

function updateHighScoreUI(High_Score) {
  highScore.textContent = High_Score;
}

function backUIChange(color = "linear-gradient(135deg, #1f1f1f, #3d3d3d)") {
  body.style.background = color;
}

function numboxUIChange(
  color1 = "#ff3d3d",
  color2 = "White",
  display = "flex",
) {
  numbox.style.backgroundColor = color1;
  numbox.style.borderColor = color2;
  numbox.style.display = display;
}

function hiddenNumUIChange(color = "White", text = "?") {
  hiddenNumBox.style.color = color;
  hiddenNumBox.textContent = text;
}

function showWinnerUI(num) {
  showMessage("🥳 We did it!!");
  guessUIupdate("Wow!! You Guessed it");
  backUIChange("linear-gradient(135deg, #0575e6, #00f260)");
  numboxUIChange("White", "White");
  hiddenNumUIChange("Green", num);
}

function setSectionDisplay(display = "flex") {
  inputSection.style.display = display;
}

function showGameOverUI() {
  showMessage("Ooh No!! You Lost 😭");
  guessUIupdate("Game Over!! 😫");
  setSectionDisplay("none");
  numboxUIChange(undefined, undefined, "none");
}

// Game Logics

function resetGameState() {
  game.hiddenNum = Math.trunc(Math.random() * 20) + 1;
  game.score = 20;
  resetGameUI();
}

function setNewHighScore(newScore) {
  let oldHighScore = Number(localStorage.getItem("newHighScore")) || 0;

  if (newScore > oldHighScore) {
    updateHighScoreUI(newScore);
    localStorage.setItem("newHighScore", newScore);
  } else {
    updateHighScoreUI(oldHighScore);
  }
}

function handleGuess(num) {
  const userNum = Number(num);

  if (num.trim() === "") {
    showMessage("Oops!! you did a mistake 😅");
    resetInput();
    guessUIupdate("It's not a Number!! 😥");
  } else if (userNum === game.hiddenNum) {
    setNewHighScore(game.score);
    showWinnerUI(game.hiddenNum);
    setSectionDisplay("none");
  } else {
    showMessage(userNum > game.hiddenNum ? "Too High!!" : "Too Low!");
    guessUIupdate();
    resetInput();
    game.score--;
    scoreUIUpdate(game.score);

    if (score === 0) {
      showGameOverUI();
      return;
    }
  }
}

// Game Events

againBtn.addEventListener("click", () => {
  clearTimeout(game.clickTimer);

  game.clickTimer = setTimeout(() => {
    resetGameState();
  }, 250);
});

againBtn.addEventListener("dblclick", () => {
  clearTimeout(game.clickTimer);
  localStorage.removeItem("newHighScore");
  resetGameState();
});

inputBox.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    handleGuess(inputBox.value);
  }
});

checkBtn.addEventListener("click", () => {
  handleGuess(inputBox.value);
});
