const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const prevButton = document.querySelector("#prev");
const nextButton = document.querySelector("#next");

let slideIndex = 0;

function showSlide() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slides[slideIndex].classList.add("active");
}

function nextSlide() {
  slideIndex++;
  if (slideIndex > 2) {
    slideIndex = 0;
  }
  showSlide();
}

function prevSlide() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = 2;
  }
  showSlide();
}

nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);
