// from observer
// for the header bg change
const header = document.querySelector(".header");
//  this will be the content after the hero section
const homeHeroSection = document.querySelector(".home-hero");
const homeBestSection = document.querySelector(".home-best");
const homeWorksSection = document.querySelector(".home-works");
const targets = [homeBestSection, homeWorksSection];
// lazy loaded images
const homeBestOnly = homeBestSection.querySelectorAll("img");

const heroOptions = {
  // when the target is 90% in the viewport
  threshold: 0.9,
};

const heroObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    // if (!entry.isIntersecting) return;

    if (entry.intersectionRatio < 0.9) {
      header.classList.add("scroll");
    } else if (entry.intersectionRatio > 0.9) {
      header.classList.remove("scroll");
    }
  });
}, heroOptions);

heroObserver.observe(homeHeroSection);

const bestOptions = {
  // when the section is 12% or more in the viewport
  threshold: 0.15,
};

const bestObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0.15) {
      homeBestOnly.forEach((el) => {
        el.classList.remove("lazy-img");
        el.src = el.dataset.src;
        observer.unobserve(entry.target);
      });
    }
  });
}, bestOptions);

bestObserver.observe(homeBestSection);
