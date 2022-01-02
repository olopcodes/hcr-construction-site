// from observer
// for the header bg change
const header = document.querySelector(".header");
//  this will be the content after the hero section
const targetToObserve = document.querySelector(".home-best");

// lazy loaded images
const homeBestOnly = targetToObserve.querySelectorAll("img");

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
      // console.log(homeBestOnly);
      homeBestOnly.forEach((el) => {
        el.classList.remove("lazy-img");
        el.src = el.dataset.src;
      });
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
