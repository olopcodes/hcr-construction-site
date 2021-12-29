// from observer
console.log("hello again observer branch");
const header = document.querySelector(".header");
//  this will be the content after the hero section
const targetToObserve = document.querySelector(".home-hero");

const changeBgOnScroll = (entries, obs) => {
  entries.forEach((entry) => {
    // if entry is not in the viewport
    if (!entry.isIntersecting) return;

    // stop observing
    // obs.unobserve(entry.target);

    // let me know when target intersects
    console.log("target is in the viewport");
    console.log(entry.intersectionRatio);

    // do this to the element
    header.classList.add("scroll");
  });
};

const options = {
  rootMargin: "70px",
  threshold: 0.4,
};

const observer = new IntersectionObserver(changeBgOnScroll, options);
observer.observe(targetToObserve);
