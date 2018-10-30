var button = document.querySelector(".main-nav__button");
var menu = document.querySelector(".main-nav");
var header = document.querySelector(".main-header");

button.addEventListener("click", function () {
  if(menu.classList.contains("main-nav--opened") && header.classList.contains("main-header--menu-opened")) {
    menu.classList.remove("main-nav--opened");
    header.classList.remove("main-header--menu-opened");
  } else {
    menu.classList.add("main-nav--opened");
    header.classList.add("main-header--menu-opened");
  }
});
