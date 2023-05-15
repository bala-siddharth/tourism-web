

const reviews = document.querySelectorAll(".review");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentReview = 0;

function showReview() {
  reviews.forEach(review => {
    review.classList.remove("active");
  });
  reviews[currentReview].classList.add("active");
}

nextBtn.addEventListener("click", function(){
  currentReview++;
  if (currentReview > reviews.length - 1) {
    currentReview = 0;
  }
  showReview();
});

prevBtn.addEventListener("click", function(){
  currentReview--;
  if (currentReview < 0) {
    currentReview = reviews.length - 1;
  }
  showReview();
});

showReview();











