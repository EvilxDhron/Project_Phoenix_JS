"use strict";

const modalOverlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
const closeModalBtn = document.querySelector("#closeModalBtn");
const navBtn = document.querySelector(".nav-btn");
const modalInputs = document.querySelectorAll(".modal-input");
const modalSubmitBtn = document.querySelector("#modal-btn");
const allInputs = document.querySelectorAll("input");

let clicked = true;

allInputs.forEach((input) => {
  input.autocomplete = "off";
});

const clearModalInputs = () => {
  modalInputs.forEach((input) => {
    input.value = "";
  });
};

const renderModal = (value = 1) => {
  modal.style.opacity = value;
  modalOverlay.style.opacity = value;
};

const updateModalClass = () => {
  modal.classList.toggle("hidden");
  modalOverlay.classList.toggle("hidden");
};

function handleModal() {
  clearModalInputs();
  if (clicked) {
    updateModalClass();
    setTimeout(renderModal, 100);
    clicked = !clicked;
  } else {
    renderModal(0);
    setTimeout(updateModalClass, 250);
    clicked = !clicked;
  }
}

modalOverlay.addEventListener("click", handleModal);

navBtn.addEventListener("click", handleModal);

closeModalBtn.addEventListener("click", handleModal);

modalSubmitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  clearModalInputs();
});
