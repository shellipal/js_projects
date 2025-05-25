const NextEl = document.querySelector(".next");
const prevEl = document.querySelector(".prev");

const imagecontainerEl = document.querySelector(".image-container");

const ImgsEl = document.querySelectorAll(".images");
let currentImg = 1;
let timeout;

NextEl.addEventListener("click", () => {
  currentImg++;
  clearTimeout(timeout);
  updateImg();
});

prevEl.addEventListener("click", () => {
  currentImg--;
  clearTimeout(timeout);
  updateImg();
});

updateImg();

function updateImg() {
  if (currentImg > ImgsEl.length) {
    currentImg = 1;
  } else if (currentImg < 1) {
    currentImg = ImgsEl.length;
  }
  imagecontainerEl.style.transform = `translateX(-${(currentImg - 1) * 500}px)`;
  timeout = setTimeout(() => {
    currentImg++;
    updateImg();
  }, 3000);
}
