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
highScore.textContent = Number(localStorage.getItem("newHighScore")) ?? 0;

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
  body.style.backgroundColor = "#393939";
  numbox.style.backgroundColor = "Red";
  numbox.style.borderColor = "Black";
  hiddenNumBox.style.color = "Black";
  hiddenNumBox.textContent = "?";
  showMessage();
  document.querySelector(".sec1").style.display = "flex";
  numbox.style.display = "flex";
  highScore.textContent = Number(localStorage.getItem("newHighScore")) ?? 0;
}

function updateScore() {
  score--;
  scoreText.textContent = score;
}

function setNewHighScore(newScore) {
  let oldHighScore = localStorage.getItem("newHighScore");

  if (newScore > oldHighScore) {
    highScore.textContent = newScore;
    localStorage.setItem("newHighScore", newScore);
  } else {
    highScore.textContent = oldHighScore;
  }
}

function updateText(num) {
  hiddenNumBox.textContent = `${num}`;
  guessText.textContent = "Wow!! You Guessed it";
  body.style.backgroundColor = "Green";
  numbox.style.backgroundColor = "White";
  numbox.style.borderColor = "White";
  hiddenNumBox.style.color = "Green";
}

function checkTheNum(num) {
  const userNum = Number(num);

  if (!num) {
    showMessage("Oops!! you did a mistake 😅");
    guessText.textContent = "It's not a Number!! 😥";
  } else if (userNum === hiddenNum) {
    updateText(num);
    updateScore();
    setNewHighScore(score);
    showMessage("🥳 We did it!!");
    document.querySelector(".sec1").style.display = "none";
  } else {
    showMessage(userNum > hiddenNum ? "Too High!!" : "Too Low!");
    updateScore();
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
  if (!score) {
    guessText.textContent = "Game Over!! 😫";
    showMessage("Ooh No!! You Lost 😭");
    document.querySelector(".sec1").style.display = "none";
    numbox.style.display = "none";

    return;
  }
});

checkBtn.addEventListener("click", () => {
  checkTheNum(inputBox.value);

  if (!score) {
    guessText.textContent = "Game Over!! 😫";
    showMessage("Ooh No!! You Lost 😭");
    numbox.style.display = "none";
    document.querySelector(".sec1").style.display = "none";

    return;
  }
});
