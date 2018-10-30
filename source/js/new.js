var button = document.querySelector(".main-nav__button");
var menu = document.querySelector(".main-nav");
var header = document.querySelector(".main-header");

button.addEventListener("click", function () {
  if(menu.classList.contains("main-nav--opened") && header.classList.contains("main-header--inner-opened")) {
    menu.classList.remove("main-nav--opened");
    header.classList.remove("main-header--inner-opened");
  } else {
    menu.classList.add("main-nav--opened");
    header.classList.add("main-header--inner-opened");
  }
});
