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
console.log("hello again observer branch");
var header = document.querySelector(".header"); //  this will be the content after the hero section

var targetToObserve = document.querySelector(".home-hero");

var changeBgOnScroll = function changeBgOnScroll(entries, obs) {
  entries.forEach(function (entry) {
    // if entry is not in the viewport
    if (!entry.isIntersecting) return; // stop observing
    // obs.unobserve(entry.target);
    // let me know when target intersects

    console.log("target is in the viewport");
    console.log(entry.intersectionRatio); // do this to the element

    header.classList.add("scroll");
  });
};

var options = {
  rootMargin: "70px",
  threshold: 0.4
};
var observer = new IntersectionObserver(changeBgOnScroll, options);
observer.observe(targetToObserve);