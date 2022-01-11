"use strict";

console.log("app");
"use strict";

// change focus state when get a quote is clicked
var getQuoteBtn = document.getElementById("get-quote"); // animate form on focus

getQuoteBtn.addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("hero-name-input").focus();
});
var regularForm = document.querySelector(".form-regular");
regularForm.addEventListener("focusin", function (e) {
  e.target.previousElementSibling.classList.add("focus");
});
regularForm.addEventListener("focusout", function (e) {
  if (e.target.value === "") {
    e.target.previousElementSibling.classList.remove("focus");
  }
}); // animate header on scroll
"use strict";

// from observer
// for the header bg change
var header = document.querySelector(".header"); //  this will be the content after the hero section

var homeHeroSection = document.querySelector(".home-hero");
var homeBestSection = document.querySelector(".home-best");
var homeWorksSection = document.querySelector(".home-works");
var targets = [homeBestSection, homeWorksSection]; // lazy loaded images

var homeBestOnly = homeBestSection.querySelectorAll("img");
var heroOptions = {
  // when the target is 90% in the viewport
  threshold: 0.9
};
var heroObserver = new IntersectionObserver(function (entries, observer) {
  entries.forEach(function (entry) {
    // if (!entry.isIntersecting) return;
    if (entry.intersectionRatio < 0.9) {
      header.classList.add("scroll");
    } else if (entry.intersectionRatio > 0.9) {
      header.classList.remove("scroll");
    }
  });
}, heroOptions);
heroObserver.observe(homeHeroSection);
var bestOptions = {
  // when the section is 12% or more in the viewport
  threshold: 0.15
};
var bestObserver = new IntersectionObserver(function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > 0.15) {
      homeBestOnly.forEach(function (el) {
        el.classList.remove("lazy-img");
        el.src = el.dataset.src;
        observer.unobserve(entry.target);
      });
    }
  });
}, bestOptions);
bestObserver.observe(homeBestSection);
"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var tabsWrapper = document.querySelector(".home-works__tabs");
var works = document.querySelectorAll(".home-works__work");
var tabs = tabsWrapper.querySelectorAll("button");
tabsWrapper.addEventListener("click", function (e) {
  var _iterator = _createForOfIteratorHelper(tabs),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var t = _step.value;
      t.classList.remove("active-tab");
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  e.target.closest("button").classList.add("active-tab");

  var _iterator2 = _createForOfIteratorHelper(works),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var w = _step2.value;
      w.classList.remove("active-work");
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  var work = document.getElementById(e.target.closest("button").dataset.id);
  work.classList.add("active-work");
});