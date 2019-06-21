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

let catalogToggle = function () {
  let catalog = document.querySelectorAll(".catalog__info-wrapper");
  let catalogToggler = document.querySelectorAll(".catalog__btn");

  if (!catalog || !catalogToggler) return;

  // Array.prototype.forEach.call(catalog, function(catalog) {
  //   Array.prototype.forEach.call(catalogToggler, function (catalogToggler) {
  //     catalogToggler.addEventListener("click", function (event) {
  //       event.preventDefault();
  //       catalog.classList.toggle("catalog__info-wrapper--open");
  //     });
  //   });
  // });

  for (let i = 0; i < catalog.length; i++) {
    catalogToggler[i].addEventListener("click", function (event) {
      event.preventDefault();
      catalog[i].classList.toggle("catalog__info-wrapper--open");
    });
  }
};

catalogToggle();
