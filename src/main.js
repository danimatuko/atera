const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slides");
const dots = document.querySelectorAll(".dots button");

console.log(slider, slides);

const size = slides[0].clientWidth;

console.log(size);
const counter = 3;

slider.style.transform = "translateX(" + -size * counter + "px)";

dots.forEach((dot, index) => {
  dot.addEventListener("click", (e) => {
    console.log(e.target, index);
    slider.style.transform = "translateX(" + -size * index + "px)";
  });
});
