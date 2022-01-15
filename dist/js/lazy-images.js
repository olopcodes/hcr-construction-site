// lazy loading if nothing there, do not run ========================
const homeBestSection = document.querySelector(".home-best");
const homeWorksSection = document.querySelector(".home-works");

// lazy loaded images
const homeBestOnly = homeBestSection.querySelectorAll("img");
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
