const buttonEl = document.querySelector(".button");

buttonEl.addEventListener("mouseover", (event) => {
  const x = event.pageX - buttonEl.offsetLeft;
  const y = event.pageY - buttonEl.offsetTop;

  buttonEl.style.setProperty("--xPos", x + "px");
  buttonEl.style.setProperty("--yPos", y + "px");
});
