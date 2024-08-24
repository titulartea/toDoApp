const clockTitle = document.querySelector(".js-clock");
const theDay = document.querySelector("#date");
const form = document.querySelector("#ddayForm");

let interval;

function Countdown() {
  const dday = new Date(theDay.value).getTime();
  const now = new Date().getTime();
  const timeDifference = dday - now;

  if (timeDifference <= 0) {
    clearInterval(interval);
    clockTitle.textContent = "D-Day Passed!";
    return;
  }

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  clockTitle.textContent = `${days}D ${hours}H ${minutes}M ${seconds}S Left!`;
}

function startCountdown(e) {
  e.preventDefault();

  if (interval) {
    clearInterval(interval);
  }

  Countdown();
  interval = setInterval(Countdown, 1000);
}

form.addEventListener("submit", startCountdown);
