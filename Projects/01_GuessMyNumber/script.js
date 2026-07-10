const againBtn = document.querySelector(".againBTN");

const boxText = document.querySelector(".numboxText");

const inputVal = document.querySelector("#num");
let inputValue;

const inputBtn = document.querySelector(".inputBtn");

const header = document.querySelector("#header");
const guessText = document.querySelector(".guessText");

// const randomNum = Math.round(Math.random()*20);
const randomNum = 18;

againBtn.addEventListener("click", () => {
  location.reload();
});

inputBtn.addEventListener("click", () => {
  inputValue = inputVal.value;
  boxText.textContent = inputVal.value;
  if (inputValue == randomNum) {
    header.style.backgroundColor = "Green";
    guessText.textContent = "Wow!! you Guessed it right!";
    guessText.style.textAlign = "center";
    guessText.style.fontSize = "50px";
  }
  inputVal.value = "";
});

inputVal.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    inputValue = inputVal.value;
    boxText.textContent = inputVal.value;
    if (inputValue == randomNum) {
      header.style.backgroundColor = "Green";
      guessText.textContent = "Wow!! you Guessed it right!";
      guessText.style.textAlign = "center";
      guessText.style.fontSize = "50px";
    }
    inputVal.value = "";
  }
});

console.log(inputValue + "This");
