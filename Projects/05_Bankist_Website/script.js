"use strict";

// Modal Elements
const modalOverlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
const closeModalBtn = document.querySelector("#closeModalBtn");
const modalInputs = document.querySelectorAll(".modal-input");
const modalSubmitBtn = document.querySelector("#modal-btn");

// Targeting all inputs at once
const allInputs = document.querySelectorAll("input");

// Main Elements

const featuresSection = document.querySelector(".section--features");
const operationsSection = document.querySelector(".section--operations");
const testimonialsSection = document.querySelector(".section--testimonials");

// Buttons
const navBtn = document.querySelector(".nav-btn");
const heroBtn = document.querySelector(".sec1-btn");

// Links
const featuresLink = document.querySelector(".features-link");
const operationsLink = document.querySelector(".operations-link");
const testimonialsLink = document.querySelector(".testimonials-link");

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

// Modal Events

modalOverlay.addEventListener("click", handleModal);

navBtn.addEventListener("click", handleModal);

closeModalBtn.addEventListener("click", handleModal);

modalSubmitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  clearModalInputs();
});

// Main Events

heroBtn.addEventListener("click", (e) => {
  /*   
  console.log(e);
  console.log(e.target.getBoundingClientRect());
  console.log(window.pageXOffset, window.pageYOffset);
  console.log(featuresSection.getBoundingClientRect());
  console.log(document.documentElement.clientHeight, document.documentElement.clientWidth); 
*/

  // Traditional way of smooth scrolling
  /* 
    window.scrollTo({
    left: featuresSection.getBoundingClientRect().left,
    top: featuresSection.getBoundingClientRect().top,
    behavior: "smooth",
  }); 
*/

  featuresSection.scrollIntoView({ behavior: "smooth" });
});

featuresLink.addEventListener("click", () =>
  featuresSection.scrollIntoView({ behavior: "smooth"}),
);

operationsLink.addEventListener("click", () =>
  operationsSection.scrollIntoView({ behavior: "smooth", block: "center" }),
);

testimonialsLink.addEventListener("click", () =>
  testimonialsSection.scrollIntoView({ behavior: "smooth", block: "center" }),
);