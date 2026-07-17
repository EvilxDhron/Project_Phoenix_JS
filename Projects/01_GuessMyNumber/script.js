"use strict";

const body = document.querySelector("body");
const numbox = document.querySelector(".numbox");
const againBtn = document.querySelector(".againBTN");
const guessText = document.querySelector(".guessText");
const hiddenNum = Math.round(Math.random() * 20);
const hiddenNumBox = document.querySelector(".numboxText");
const inputBox = document.querySelector("#num");
const checkBtn = document.querySelector(".inputBtn");
const highLowText = document.querySelector(".text1");
let score = 20;
const scoreText = document.querySelector(".text2");
let highScore = document.querySelector(".text3");
let clickTimer = null;
highScore.textContent = localStorage.getItem("newHighScore") ?? 0;

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
    guessText.textContent = "It's not a Number!! 😥";
    highLowText.textContent = "Oops!! you did a mistake 😅";
  } else if (userNum === hiddenNum) {
    updateText(num);
    updateScore();
    setNewHighScore(score);
    highLowText.textContent = "🥳 We did it!!";
    inputBox.value = "";
  } else if (userNum > hiddenNum) {
    highLowText.textContent = "Too High!!";
    updateScore();
    inputBox.value = "";
  } else if (userNum < hiddenNum) {
    highLowText.textContent = "Too Low!!";
    updateScore();
    inputBox.value = "";
  }
}

againBtn.addEventListener("click", () => {
  clearTimeout(clickTimer);

  clickTimer = setTimeout(() => {
    location.reload();
  }, 250);
});

againBtn.addEventListener("dblclick", () => {
  clearTimeout(clickTimer);
  localStorage.clear();
  location.reload();
});

inputBox.addEventListener("keydown", (event) => {
  let value = inputBox.value;
  if (event.key === "Enter") {
    checkTheNum(value);
    value = "";
  }
  if (!score) {
    guessText.textContent = "Game Over!! 😫";
    highLowText.textContent = "Ooh No!! You Lost 😭";
    inputBox.value = "";
    return;
  }
});

checkBtn.addEventListener("click", () => {
  checkTheNum(inputBox.value);

  if (!score) {
    guessText.textContent = "Game Over!! 😫";
    highLowText.textContent = "Ooh No!! You Lost 😭";
    inputBox.value = "";
    return;
  }
});
