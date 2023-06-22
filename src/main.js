window.onload = function () {
  const slider = document.querySelector(".slider");
  const slides = document.querySelectorAll(".slides");
  const dots = document.querySelectorAll(".dots button");

  let counter = 0;

  let size = slides[0].clientWidth;

  function initSlider() {
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        counter = index;
        slide();
        resetDots();
        dot.classList.add("active");
      });
    });
  }

  function slide() {
    slider.style.transform = `translateX(${-size * counter}px)`;
  }

  function resetDots() {
    dots.forEach((dot) => {
      dot.classList.remove("active");
    });
  }

  function handleResize() {
    size = slides[0].clientWidth;
    slide();
  }

  window.addEventListener("resize", handleResize);

  initSlider();
  size = slides[0].clientWidth;
  slide(); // Call slide() after initSlider() to ensure the initial slide is set correctly
};

// Get the heading element
const heading = document.querySelector(".typing-heading");

// Set the initial text
const text = heading.textContent;
let currentText = "";
let index = 0;
const speed = 100; // Typing speed in milliseconds

// Function to start the typing animation
function typeWriter() {
  if (index < text.length) {
    currentText += text.charAt(index);
    heading.textContent = currentText;
    index++;
    setTimeout(typeWriter, speed);
  }
}

// Start the typing animation
typeWriter();
