const imgs = document.querySelectorAll(".projects-section__images img");
// console.log(JSON.parse(img.dataset.sources).srcSmall);
console.log(imgs);

//   console.log(sources);

imgs.forEach((img) => {
  // console.log(JSON.parse(img.dataset));
  // console.log(JSON.parse('{"name":"John", "age":"30", "city":"New York"}'));
  console.log(JSON.parse(img.dataset.sources));
});
