// from observer
// for the header bg change
const header = document.querySelector(".header");
//  this will be the content after the hero section
let heroSection = document.querySelector(".home-hero");

// observer to change background of header ==========================================
const options = {
  // when the target is 90% in the viewport
  threshold: 0.9,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
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
