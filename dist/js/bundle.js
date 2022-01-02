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

var homeHeroSection = document.querySelector(".home-hero");
var homeBestSection = document.querySelector(".home-best");
var homeWorksSection = document.querySelector(".home-works");
var targets = [homeBestSection, homeWorksSection]; // lazy loaded images

var homeBestOnly = homeBestSection.querySelectorAll("img");
var heroOptions = {
  // when the target is 90% in the viewport
  threshold: 0.9
};
var heroObserver = new IntersectionObserver(function (entries, observer) {
  entries.forEach(function (entry) {
    // if (!entry.isIntersecting) return;
    if (entry.intersectionRatio < 0.9) {
      header.classList.add("scroll");
    } else if (entry.intersectionRatio > 0.9) {
      header.classList.remove("scroll");
    }
  });
}, heroOptions);
heroObserver.observe(homeHeroSection);
var bestOptions = {
  // when the section is 12% or more in the viewport
  threshold: 0.15
};
var bestObserver = new IntersectionObserver(function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > 0.15) {
      homeBestOnly.forEach(function (el) {
        el.classList.remove("lazy-img");
        el.src = el.dataset.src;
        observer.unobserve(entry.target);
      });
    }
  });
}, bestOptions);
bestObserver.observe(homeBestSection);