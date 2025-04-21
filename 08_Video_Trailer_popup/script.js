const btnEl = document.querySelector(".btn");
const closeIconEL = document.querySelector(".close-icon");
const trailerContainerEl = document.querySelector(".trailer-container");

const videoEl = document.querySelector("video");

btnEl.addEventListener("click", () => {
  trailerContainerEl.classList.remove("active");
});

closeIconEL.addEventListener("click", () => {
  trailerContainerEl.classList.add("active");
  videoEl.pause();
  videoEl.currentTime = 0;
});

// ....................................................................................
