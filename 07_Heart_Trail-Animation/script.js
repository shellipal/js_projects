const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (event) => {
  const xPOs = event.offsetX;
  const yPOs = event.offsetY;

  const spanEl = document.createElement("span");
  spanEl.style.left = xPOs + "px";
  spanEl.style.top = yPOs + "px";

  const size = Math.random() * 100;
  spanEl.style.width = size + "px";
  spanEl.style.height = size + "px";

  bodyEl.appendChild(spanEl);

  setTimeout(() => {
    spanEl.remove();
  }, 3000);
});
