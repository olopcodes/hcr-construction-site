"use strict";

var imgs = document.querySelectorAll(".projects-section__images img");
var modal = document.querySelector("#modal");
var modalBtn = document.getElementById("modal-btn");
imgs.forEach(function (img) {
  img.addEventListener("click", function (e) {
    var imgSrc;

    if (window.innerWidth < 800) {
      imgSrc = JSON.parse(e.target.dataset.sources).one;
    } else {
      imgSrc = JSON.parse(e.target.dataset.sources).two;
    }

    modal.querySelector("img").src = imgSrc;
    modal.classList.add("show");
    console.log();
    modalBtn.href = e.target.closest(".projects-section__project").id;
  });
});
modalBtn.addEventListener("click", function (e) {
  e.preventDefault();
  modal.classList.remove("show");
});