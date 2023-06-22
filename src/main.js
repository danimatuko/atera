const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slides");
const dots = document.querySelectorAll(".dots button");

const size = slides[0].clientWidth;

const counter = 0;

slider.style.transform = "translateX(" + -size * counter + "px)";

dots.forEach((dot, index) => {
  dot.addEventListener("click", (e) => {
    slider.style.transform = "translateX(" + -size * index + "px)";
    resetDots();
    dot.classList.add("active");
  });
});

const resetDots = () => {
  dots.forEach((dot) => {
    dot.classList.remove("active");
  });
};
