const imgs = document.querySelectorAll(".projects-section__images img");
const modal = document.querySelector("#modal");
const modalBtn = document.getElementById("modal-btn");

imgs.forEach((img) => {
  img.addEventListener("click", (e) => {
    let imgSrc;
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

modalBtn.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.remove("show");
});
