"use strict";

const btns = document.querySelectorAll(".btn");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".closebtn");
const backArea = document.querySelector(".div2");

const closeModal = () => {
  modal.classList.add("hidden");
  backArea.classList.add("hidden");
};

for (let btn of btns) {
  btn.addEventListener("click", () => {
    modal.classList.remove("hidden");
    backArea.classList.remove("hidden");
  });
}

closeBtn.addEventListener("click", closeModal);

backArea.addEventListener("click", closeModal);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
