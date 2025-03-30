const textareaEl = document.getElementById("textarea");

const totalcounterEl = document.getElementById("total-counter");
const remainingCounterEl = document.getElementById("Remaining-counter");

const remainingCounter = 150;

textareaEl.addEventListener("keyup", () => {
  UpdateCounter();
  RemainingCounter();
});

function UpdateCounter() {
  totalcounterEl.innerText = textareaEl.value.length;
}

function RemainingCounter() {
  const totalCounter = textareaEl.value.length;
  remainingCounterEl.innerText = remainingCounter - totalCounter;
}
