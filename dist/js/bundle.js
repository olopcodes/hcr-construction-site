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
// for the header bg change
var header = document.querySelector(".header"); //  this will be the content after the hero section

var targetToObserve = document.querySelector(".home-best"); // lazy loaded images

var homeBestOnly = targetToObserve.querySelectorAll("img");
var options = {
  // when the target is 25% in the viewport
  threshold: 0,
  // moves the target 80px away, so have to scroll down
  rootMargin: "-85px"
};
var observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach(function (entry) {
    // if (!entry.isIntersecting) return;
    if (entry.isIntersecting) {
      header.classList.add("scroll"); // console.log(homeBestOnly);

      homeBestOnly.forEach(function (el) {
        el.classList.remove("lazy-img");
        el.src = el.dataset.src;
      });
    } else {
      header.classList.remove("scroll");
    } // observer.unobserve(entry.target);

  });
}, options);
observer.observe(targetToObserve); // lazy loading images on the best section and works/projects section
// we will target two sections
// lets do one first
// const bestTarget =