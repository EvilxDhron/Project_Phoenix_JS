"use strict";

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
highScore.textContent = localStorage.getItem("newHighScore");

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

function checkTheNum(num) {
  const userNum = Number(num);
  if (userNum === hiddenNum) {
    hiddenNumBox.textContent = `${num}`;
    guessText.textContent = "Wow!! You Guessed it";
    updateScore();
    setNewHighScore(num);
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

  console.log("function is running every time and it is good!");
}

againBtn.addEventListener("click", () => {
  location.reload();
});

inputBox.addEventListener("keydown", (event) => {
  let value = inputBox.value;
  if (event.key === "Enter") {
    checkTheNum(value);
    value = "";
    console.log("hello!!");
  }
});
