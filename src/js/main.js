// change focus state when get a quote is clicked
const getQuoteBtn = document.getElementById("get-quote");
// animate form on focus
getQuoteBtn.addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("hero-name-input").focus();
});

// const regularFormInputs = document.querySelectorAll(".form-regular input");
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

const regularForm = document.querySelector(".form-regular");
regularForm.addEventListener("focusin", (e) => {
  e.target.previousElementSibling.classList.add("focus");
});

regularForm.addEventListener("focusout", (e) => {
  if (e.target.value === "") {
    e.target.previousElementSibling.classList.remove("focus");
  }
});
/
// animate header on scroll
