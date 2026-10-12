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

// main Element
const main = document.querySelector("#main");

// sections
const siteHeader = document.querySelector("#header");
const heroSection = document.querySelector(".section--hero");

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

tabsContainer.addEventListener("mouseover", (e) => {
  const tab = e.target.closest(".op_tabs");
  const tabNumber = tab.getAttribute("data-tab");
  const section = document.querySelector(`.op_content_${tabNumber}`);
  if (!tab || !tabNumber || !section) return;
  tabsClassRemover();
  tab.classList.add("tab--active");
  section.classList.add("operations_content_active");
});

// Nav links fade animation

const handleLinks = function (e) {
  const link = e.target;
  if (!link.classList.contains("nav-link")) return;
  const siblings = link.closest("#nav-links")?.querySelectorAll(".nav-link");
  if (!siblings || siblings.length === 0) return;
  siblings.forEach((elem) => {
    if (elem === link) return;
    elem.style.opacity = this;
  });
};

navbar.addEventListener("mouseover", handleLinks.bind(0.5));
navbar.addEventListener("mouseout", handleLinks.bind(1));

// Sticky NavBar logic

const navHeight = navbar.getBoundingClientRect().height;

const stickyNavHandler = ([entry]) => {
  if (!entry.isIntersecting) {
    siteHeader.classList.add("sticky");
    main.style.paddingTop += `${navHeight}px`;
  } else {
    siteHeader.classList.remove("sticky");
    main.style.paddingTop = "";
  }
};

const Observer = new IntersectionObserver(stickyNavHandler, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

Observer.observe(heroSection);
