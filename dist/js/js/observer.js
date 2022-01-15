"use strict";

// from observer
// for the header bg change
var header = document.querySelector(".header"); //  this will be the content after the hero section

var heroSection = document.querySelector(".home-hero"); // observer to change background of header ==========================================

var options = {
  // when the target is 90% in the viewport
  threshold: 0.9
};
var observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach(function (entry) {
    // if (!entry.isIntersecting) return;
    if (entry.intersectionRatio < 0.9) {
      header.classList.add("scroll");
    } else if (entry.intersectionRatio > 0.9) {
      header.classList.remove("scroll");
    }
  });
}, options);

if (!heroSection) {
  heroSection = document.querySelector(".projects-hero");
}

observer.observe(heroSection);