//greeting
const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greet");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "svaedUsername";
const logOut = document.querySelector("#logoutButton");
const toDoInput = document.querySelector("#todo-input");
const clock = document.querySelector("h2#clock");
const show = document.getElementsByClassName("show");
const left = document.querySelector(".additional");
const right = document.querySelector(".right");

right.classList.add(HIDDEN_CLASSNAME);
left.classList.add(HIDDEN_CLASSNAME);
function seeGreeting() {
  greeting.style.opacity = "100%";
}

function onSubmit(event) {
  event.preventDefault();
  wrottenUsername = loginInput.value;
  localStorage.setItem(USERNAME_KEY, wrottenUsername);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  left.classList.remove(HIDDEN_CLASSNAME);
  right.classList.remove(HIDDEN_CLASSNAME);
  paintGreeting(wrottenUsername);
}
function seeList() {
  toDoInput.style.width = "100%";
  toDoInput.style.opacity = "70%";
}

function paintGreeting(username) {
  greeting.innerText = `반갑습니다 ${username}님 :)`;
  clock.style.marginBottom = "100px";
  greeting.classList.remove(HIDDEN_CLASSNAME);
  setTimeout(seeGreeting, 50);

  setTimeout(seeList, 50);
}
function handleLogOut() {
  localStorage.removeItem(USERNAME_KEY);
  localStorage.removeItem(TODOS_KEY);
  location.reload();
}

const localUsername = localStorage.getItem(USERNAME_KEY);

if (localUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);

  loginForm.addEventListener("submit", onSubmit);
} else {
  paintGreeting(localUsername);
  left.classList.remove(HIDDEN_CLASSNAME);
  right.classList.remove(HIDDEN_CLASSNAME);
  console.log(localUsername);
}

logOut.addEventListener("click", handleLogOut);
