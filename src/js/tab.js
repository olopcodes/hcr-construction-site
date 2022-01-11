const tabsWrapper = document.querySelector(".home-works__tabs");
const works = document.querySelectorAll(".home-works__work");
const tabs = tabsWrapper.querySelectorAll("button");
tabsWrapper.addEventListener("click", (e) => {
  for (let t of tabs) {
    t.classList.remove("active-tab");
  }
  e.target.closest("button").classList.add("active-tab");
  for (let w of works) {
    w.classList.remove("active-work");
  }
  const work = document.getElementById(e.target.closest("button").dataset.id);
  work.classList.add("active-work");
});
