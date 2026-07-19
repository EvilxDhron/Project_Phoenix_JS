"use strict";

const body = document.querySelector("body");
const numbox = document.querySelector(".numbox");
const againBtn = document.querySelector(".againBTN");
const guessText = document.querySelector(".guessText");
let hiddenNum = Math.trunc(Math.random() * 20) + 1;
const hiddenNumBox = document.querySelector(".numboxText");
const inputBox = document.querySelector("#num");
const checkBtn = document.querySelector(".inputBtn");
const highLowText = document.querySelector(".text1");
let score = 20;
const scoreText = document.querySelector(".text2");
let highScore = document.querySelector(".text3");
let clickTimer = null;
highScore.textContent = localStorage.getItem("newHighScore") || 0;

function showMessage(message = "😉 Start guessing the number...") {
  highLowText.textContent = message;

  if (Number(inputBox.value) !== hiddenNum) {
    guessText.textContent = "Guess My Number!";
  }

  inputBox.value = "";
}

function resetUI() {
  hiddenNum = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  scoreText.textContent = score;
  body.style.background = "linear-gradient(135deg, #1f1f1f, #3d3d3d)";
  numbox.style.backgroundColor = "#ff3d3d";
  numbox.style.borderColor = "White";
  hiddenNumBox.style.color = "White";
  hiddenNumBox.textContent = "?";
  showMessage();
  document.querySelector(".sec1").style.display = "flex";
  numbox.style.display = "flex";
  highScore.textContent = localStorage.getItem("newHighScore") || 0;
}

function updateScore() {
  score--;
  scoreText.textContent = score;
}

function setNewHighScore(newScore) {
  let oldHighScore = Number(localStorage.getItem("newHighScore")) || 0;

  if (newScore > oldHighScore) {
    highScore.textContent = newScore;
    localStorage.setItem("newHighScore", newScore);
  } else {
    highScore.textContent = oldHighScore;
  }
}

function updateText(num) {
  showMessage("🥳 We did it!!");
  guessText.textContent = "Wow!! You Guessed it";
  body.style.background = "linear-gradient(135deg, #0575e6, #00f260)";
  numbox.style.backgroundColor = "White";
  numbox.style.borderColor = "White";
  hiddenNumBox.style.color = "Green";
  hiddenNumBox.textContent = num;
}

function checkTheNum(num) {
  const userNum = Number(num);

  if (num.trim() === "") {
    showMessage("Oops!! you did a mistake 😅");
    guessText.textContent = "It's not a Number!! 😥";
  } else if (userNum === hiddenNum) {
    setNewHighScore(score);
    updateText(num);
    document.querySelector(".sec1").style.display = "none";
  } else {
    showMessage(userNum > hiddenNum ? "Too High!!" : "Too Low!");
    updateScore();

    if (score === 0) {
      showMessage("Ooh No!! You Lost 😭");
      guessText.textContent = "Game Over!! 😫";
      document.querySelector(".sec1").style.display = "none";
      numbox.style.display = "none";
      return;
    }
  }
}

againBtn.addEventListener("click", () => {
  clearTimeout(clickTimer);

  clickTimer = setTimeout(() => {
    // location.reload();
    resetUI();
  }, 250);
});

againBtn.addEventListener("dblclick", () => {
  clearTimeout(clickTimer);
  localStorage.removeItem("newHighScore");
  // location.reload();
  resetUI();
});

inputBox.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    checkTheNum(inputBox.value);
  }
});

checkBtn.addEventListener("click", () => {
  checkTheNum(inputBox.value);
});
