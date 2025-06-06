const Kits = ["Crash", "Kick", "Snare", "Tom"];

const containerEl = document.querySelector(".container");

Kits.forEach((kit) => {
  const btnEl = document.createElement("button");
  btnEl.classList.add("btn");
  btnEl.innerText = kit;

  btnEl.style.backgroundImage = "url(Images/" + kit + ".jpg)";

  containerEl.appendChild(btnEl);

  const audioEl = document.createElement("audio");
  audioEl.src = "sounds/" + kit + ".mp3";
  containerEl.appendChild(audioEl);

  btnEl.addEventListener("click", () => {
    audioEl.play();
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === kit.slice(0, 1)) {
      audioEl.play();
      btnEl.style.transform = "scale(0.9)";
      setTimeout(() => {
        btnEl.style.transform = "scale(1)";
      }, 100);
    }
  });
});
