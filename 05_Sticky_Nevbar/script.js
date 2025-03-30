const nevbarEl = document.querySelector(".nevbar");

const bottomContainerEl = document.querySelector(".bottom-container");

console.log(nevbarEl.offsetHeight);

console.log(bottomContainerEl.offsetTop);

window.addEventListener("scroll", () => {
  if (
    window.scrollY >
    bottomContainerEl.offsetTop - nevbarEl.offsetHeight - 50
  ) {
    nevbarEl.classList.add("active");
  } else nevbarEl.classList.remove("active");
});
