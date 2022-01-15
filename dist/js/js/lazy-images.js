"use strict";

// lazy loading if nothing there, do not run ========================
var homeBestSection = document.querySelector(".home-best");
var homeWorksSection = document.querySelector(".home-works"); // lazy loaded images

var homeBestOnly = homeBestSection.querySelectorAll("img");
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