"use strict";

// Modal Elements
const modalOverlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
const closeModalBtn = document.querySelector("#closeModalBtn");
const modalInputs = document.querySelectorAll(".modal-input");
const modalSubmitBtn = document.querySelector("#modal-btn");

// Targeting all inputs at once
const allInputs = document.querySelectorAll("input");

// Buttons
const navBtn = document.querySelector(".nav-btn");
const heroBtn = document.querySelector(".sec1-btn");

// Links
const navbar = document.querySelector("#nav");

// tabbed components
const tabsContainer = document.querySelector(".operations_tab_container");
const allTabs = document.querySelectorAll(".op_tabs");
const allTabsContent = document.querySelectorAll(".operations_content");

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

// Now I'll use event Delegation to capture the events more efficiently.

navbar.addEventListener("click", (e) => {
  e.preventDefault();
  const link = e.target.closest(".nav-link");
  if (!link) return;
  const section = `${link.getAttribute("href")}`;
  document.querySelector(section)?.scrollIntoView({
    behavior: "smooth",
    block: e.target.classList.contains("features-link") ? "start" : "center",
  });
});

// Tab components Events

const tabsClassRemover = function () {
  allTabs.forEach((tab) => tab.classList.remove("tab--active"));
  allTabsContent.forEach((content) =>
    content.classList.remove("operations_content_active"),
  );
};

tabsContainer.addEventListener("click", (e) => {
  const tab = e.target.closest(".op_tabs");
  if (!tab) return;
  tabsClassRemover();
  tab.classList.add("tab--active");
  const tabNumber = tab.className.split("").find((n) => n > 0);
  document
    .querySelector(`.op_content_${tabNumber}`)
    .classList.add("operations_content_active");
});
