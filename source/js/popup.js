var formButton = document.querySelector(".button--user-review");
var popupSuccess = document.querySelector(".popup--failure");
var closePopup = document.querySelector(".button--popup-failure");

formButton.addEventListener("click", function () {
  popupSuccess.classList.remove("popup--nojs");
});

closePopup.addEventListener("click", function () {
  popupSuccess.classList.add("popup--nojs");
});
