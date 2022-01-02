// from observer
// for the header bg change
const header = document.querySelector(".header");
//  this will be the content after the hero section
const targetToObserve = document.querySelector(".home-best");

const options = {
  // when the target is 25% in the viewport
  threshold: 0,
  // moves the target 80px away, so have to scroll down
  rootMargin: "-85px",
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    // if (!entry.isIntersecting) return;

    if (entry.isIntersecting) {
      header.classList.add("scroll");
    } else {
      header.classList.remove("scroll");
    }
    // observer.unobserve(entry.target);
  });
}, options);

observer.observe(targetToObserve);

// lazy loading images on the best section and works/projects section
// we will target two sections
// lets do one first
// const bestTarget =
