const ContainerEl = document.querySelector(".container");

const careers = [
  "Student",
  "problem-solver",
  "software engineer",
  "frontend developer",
  "web developer",
];

let careersIndx = 0;
let characterIndx = 0;
updateText();

function updateText() {
  characterIndx++;
  ContainerEl.innerHTML = `<h1>I am a ${careers[careersIndx].slice(
    0,
    characterIndx
  )}</h1>`;

  if (characterIndx === careers[careersIndx].length) {
    careersIndx++;
    characterIndx = 0;
  }

  if (careersIndx === careers.length) {
    careersIndx = 0;
  }
  setTimeout(updateText, 400);
}
