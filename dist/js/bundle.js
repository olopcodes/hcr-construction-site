"use strict";

// change focus state when get a quote is clicked
var getQuoteBtn = document.getElementById("get-quote"); // animate form on focus

getQuoteBtn.addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("hero-name-input").focus();
}); // const regularFormInputs = document.querySelectorAll(".form-regular input");
// regularFormInputs.forEach((input) => {
//   input.addEventListener("focus", (e) => {
//     input.previousElementSibling.classList.add("focus");
//   });
// });
// regularFormInputs.forEach((input) => {
//   input.addEventListener("focusout", (e) => {
//     input
//   });
// });

var regularForm = document.querySelector(".form-regular");
regularForm.addEventListener("focusin", function (e) {
  e.target.previousElementSibling.classList.add("focus");
});
regularForm.addEventListener("focusout", function (e) {
  if (e.target.value === "") {
    e.target.previousElementSibling.classList.remove("focus");
  }
}); // const
// animate header on scroll
"use strict";

console.log("app");