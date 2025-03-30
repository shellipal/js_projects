const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

const questionEl = document.getElementById("questions");

const formEl = document.getElementById("form");
const inputEl = document.getElementById("input");
const scoreEl = document.getElementById("score");

let score = JSON.parse(localStorage.getItem("score"));
if (!score) {
  score = 0;
}

scoreEl.innerText = `score : ${score}`;

questionEl.innerText = `What is ${num1} Multiply by ${num2}?`;

const correctAnswer = num1 * num2;

formEl.addEventListener("submit", () => {
  const UserAnswer = +inputEl.value;

  if (UserAnswer === correctAnswer) {
    score++;
    updateLocalStorage();
  } else {
    score--;
    updateLocalStorage();
  }
});

function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}
