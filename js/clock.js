//clock

const theClock = document.querySelector("#clock");
function getClock() {
  const time = new Date();
  const hour = String(time.getHours()).padStart(2, "0");
  const minuet = String(time.getMinutes()).padStart(2, "0");
  const second = String(time.getSeconds()).padStart(2, "0");
  theClock.innerText = `${hour}:${minuet}:${second}`;
}
getClock();
setInterval(getClock, 1000);
