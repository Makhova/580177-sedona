var formButton = document.querySelector(".button--user-review");
var popupSuccess = document.querySelector(".popup--success");
var closePopup = document.querySelector(".button--popup-success");

formButton.addEventListener("click", function (evt) {


  popupSuccess.classList.remove("popup--nojs");
});

closePopup.addEventListener("click", function (evt) {
  popupSuccess.classList.add("popup--nojs");
});
