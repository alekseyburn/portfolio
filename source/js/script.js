let deleteJsClass = function() {
  let navMain = document.querySelector(".main-nav");

  if (!navMain) return;

  navMain.classList.remove("main-nav--nojs");
};

deleteJsClass();

let menuToggle = function() {
  let navMain = document.querySelector(".main-nav");
  let navToggle = navMain.querySelector(".main-nav__toggle");

  if (!navMain || !navToggle) return;

  navToggle.addEventListener("click", function() {
    navMain.classList.toggle("main-nav--open");
    navToggle.classList.toggle("main-nav__toggle--open");
  });
};

menuToggle();
