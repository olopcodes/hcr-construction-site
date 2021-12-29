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

// new from observer js
var changeBackgroundOnScroll = function changeBackgroundOnScroll(entries, obs) {
  entries.forEach(function (entry) {
    // if entry not in the viewport
    if (!entry.isIntersecting) return; // stop observing

    obs.unobserve(entry.target); // log when intersecting

    console.log("intersecting the viewport according to options"); // this is what i want to happen

    document.querySelector(".header").classList.add("scroll");
  });
};

var options = {
  rootMargin: "150px"
};
var observer = new IntersectionObserver(changeBackgroundOnScroll, options); // Element to observer

var header = document.querySelector(".header");
observer.observe(header);