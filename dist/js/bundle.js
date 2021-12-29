"use strict";

// change focus state when get a quote is clicked
var getQuoteBtn = document.getElementById("get-quote"); // animate form on focus

getQuoteBtn.addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("hero-name-input").focus();
});

var regularForm = document.querySelector(".form-regular");
regularForm.addEventListener("focusin", function (e) {
  e.target.previousElementSibling.classList.add("focus");
});
regularForm.addEventListener("focusout", function (e) {
  if (e.target.value === "") {
    e.target.previousElementSibling.classList.remove("focus");
  }
});

// animate header on scroll
("use strict");

console.log("app");
