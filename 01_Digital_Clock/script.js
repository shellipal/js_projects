const HourEl = document.getElementById("hour");
const MinuteEl = document.getElementById("minutes");
const SecondsEl = document.getElementById("seconds");
const AmPmEl = document.getElementById("ampm");

function UpdateClock() {
  let H = new Date().getHours();
  let M = new Date().getMinutes();
  let S = new Date().getSeconds();
  let ampm = "AM";

  if (H > 12) {
    H = H - 12;
    ampm = "PM";
  }

  H = H < 10 ? "0" + H : H;
  M = M < 10 ? "0" + M : M;
  S = S < 10 ? "0" + S : S;

  HourEl.innerText = H;
  MinuteEl.innerText = M;
  SecondsEl.innerText = S;
  AmPmEl.innerText = ampm;
  setTimeout(() => {
    UpdateClock();
  }, 1000);
}

UpdateClock();
