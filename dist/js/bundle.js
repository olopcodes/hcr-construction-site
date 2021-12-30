"use strict";

console.log("app");
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
}); // animate header on scroll
"use strict";

// from observer
var header = document.querySelector(".header"); //  this will be the content after the hero section

var targetToObserve = document.querySelector(".home-best");
var options = {
  threshold: 0,
  // moves the target 80px away, so have to scroll down
  rootMargin: "-80px"
};
var observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach(function (entry) {
    if (!entry.isIntersecting) return;

    if (entry.isIntersecting) {
      header.classList.add("scroll");
    } else {
      header.classList.remove("scroll");
    }
  });
}, options);
observer.observe(targetToObserve);