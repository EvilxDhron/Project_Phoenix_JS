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
highScore.textContent = localStorage.getItem("newHighScore") || 0;

// Initial Values

let hiddenNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let clickTimer = null;

// Game UI Functions

function resetGameUI() {
  scoreUIUpdate();
  backUIChange();
  numboxUIChange();
  hiddenNumUIChange();
  showMessage();
  setSectionDisplay();
  highScore.textContent = localStorage.getItem("newHighScore") || 0;
}

function showMessage(message = "😉 Start guessing the number...") {
  highLowText.textContent = message;

  if (Number(inputBox.value) !== hiddenNum) {
    guessText.textContent = "Guess My Number!";
  }

  inputBox.value = "";
}

function guessUIupdate(text) {
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
  document.querySelector(".sec1").style.display = display;
}

function showGmeOverUI() {
  showMessage("Ooh No!! You Lost 😭");
  guessUIupdate("Game Over!! 😫");
  setSectionDisplay("none");
  numboxUIChange(undefined, undefined, "none");
}

// Game Logics

function resetGameState() {
  hiddenNum = Math.trunc(Math.random() * 20) + 1;
  score = 20;
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

function checkTheNum(num) {
  const userNum = Number(num);

  if (num.trim() === "") {
    showMessage("Oops!! you did a mistake 😅");
    guessUIupdate("It's not a Number!! 😥");
  } else if (userNum === hiddenNum) {
    setNewHighScore(score);
    showWinnerUI(num);
    setSectionDisplay("none");
  } else {
    showMessage(userNum > hiddenNum ? "Too High!!" : "Too Low!");
    score--;
    scoreUIUpdate(score);

    if (score === 0) {
      showGmeOverUI();
      return;
    }
  }
}

// Game Events

againBtn.addEventListener("click", () => {
  clearTimeout(clickTimer);

  clickTimer = setTimeout(() => {
    resetGameState();
  }, 250);
});

againBtn.addEventListener("dblclick", () => {
  clearTimeout(clickTimer);
  localStorage.removeItem("newHighScore");
  resetGameState();
});

inputBox.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    checkTheNum(inputBox.value);
  }
});

checkBtn.addEventListener("click", () => {
  checkTheNum(inputBox.value);
});
