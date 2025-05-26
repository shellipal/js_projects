const InputEl = document.querySelector(".input");

const bodyEl = document.querySelector("body");

InputEl.checked = JSON.parse(localStorage.getItem("mode"));

updatebody();

function updatebody() {
  if (InputEl.checked) {
    bodyEl.style.backgroundColor = "black";
  } else {
    bodyEl.style.backgroundColor = "white";
  }
}

InputEl.addEventListener("input", () => {
  updatebody();
  updatelocalStorage();
});

function updatelocalStorage() {
  localStorage.setItem("mode", JSON.stringify(InputEl.checked));
}
