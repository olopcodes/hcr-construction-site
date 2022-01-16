const testimonials = document.querySelectorAll(".home-testimonials__box");
const circles = document.querySelectorAll(".home-testimonials__circles button");
let current = 1;
let currentCircle = 1;
const slidesLength = testimonials.length;
const sliderButtons = document.querySelectorAll(
  ".home-testimonials__btns button"
);

const sliderCircles = document.querySelector(".home-testimonials__circles");

for (let b of sliderButtons) {
  b.addEventListener("click", (e) => {
    if (e.target.closest("button").id === "testimonial-right") {
      moveRight();
    } else if (e.target.closest("button").id === "testimonial-left") {
      moveLeft();
    }
  });
}

function moveLeft() {
  removeActiveClass();
  // check if active has previous el
  if (testimonials[current].previousElementSibling) {
    current -= 1;
    currentCircle -= 1;
    testimonials[current].classList.remove("before-active");
  } else {
    current += 2;
    currentCircle = 2;
  }
  circles[currentCircle].classList.add("active");
  testimonials[current].classList.add("active");
}

function moveRight() {
  removeActiveClass();
  // check if active has previous el
  if (current !== 2) {
    testimonials[current].classList.remove("after-active");
    current += 1;
    currentCircle += 1;
  } else {
    current = 0;
    currentCircle = 0;
  }
  circles[currentCircle].classList.add("active");
  testimonials[current].classList.add("active");
}

function removeActiveClass() {
  testimonials.forEach((t) => {
    t.classList.remove("active");
  });

  circles.forEach((c) => c.classList.remove("active"));
}

sliderCircles.addEventListener("click", (e) => {
  removeActiveClass();
  if (e.target.id === "circle-1") {
    currentCircle = 0;
    current = 0;
  } else if (e.target.id === "circle-2") {
    currentCircle = 1;
    current = 1;
  } else if (e.target.id === "circle-3") {
    currentCircle = 2;
    current = 2;
  }
  circles[currentCircle].classList.add("active");
  testimonials[current].classList.add("active");
});
