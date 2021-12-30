// from observer

const header = document.querySelector(".header");
//  this will be the content after the hero section
const targetToObserve = document.querySelector(".home-best");

const options = {
  threshold: 0,
  // moves the target 80px away, so have to scroll down
  rootMargin: "-80px",
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    if (entry.isIntersecting) {
      header.classList.add("scroll");
    } else {
      header.classList.remove("scroll");
    }
  });
}, options);

observer.observe(targetToObserve);
