"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var testimonials = document.querySelectorAll(".home-testimonials__box");
var circles = document.querySelectorAll(".home-testimonials__circles button");
var current = 1;
var currentCircle = 1;
var slidesLength = testimonials.length;
var sliderButtons = document.querySelectorAll(".home-testimonials__btns button");
var sliderCircles = document.querySelector(".home-testimonials__circles");

var _iterator = _createForOfIteratorHelper(sliderButtons),
    _step;

try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var b = _step.value;
    b.addEventListener("click", function (e) {
      if (e.target.closest("button").id === "testimonial-right") {
        moveRight();
      } else if (e.target.closest("button").id === "testimonial-left") {
        moveLeft();
      }
    });
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

function moveLeft() {
  removeActiveClass(); // check if active has previous el

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
  removeActiveClass(); // check if active has previous el

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
  testimonials.forEach(function (t) {
    t.classList.remove("active");
  });
  circles.forEach(function (c) {
    return c.classList.remove("active");
  });
}

sliderCircles.addEventListener("click", function (e) {
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