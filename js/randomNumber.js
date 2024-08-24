const playGround = document.querySelector("#playGround");
const limit = document.querySelector("#limit");
const userChoice = document.querySelector("#guess");
const button = document.querySelector("#submit");
const result = document.querySelector("#result");
const gameResult = document.querySelector("#gameResult");

function guessing(e) {
  e.preventDefault();
  if (limit.value === "") {
    alert("Please Choose Limit Number");
    return;
  }
  const machineChoice = Math.floor(Math.random() * limit.value + 1);
  const choiced = userChoice.value;

  result.textContent = `You chose: ${choiced}, the machine choose: ${machineChoice}`;

  if (choiced == machineChoice) {
    gameResult.textContent = "You Win!";
  } else {
    gameResult.textContent = "You Lose!";
  }
}

playGround.addEventListener("submit", guessing);
