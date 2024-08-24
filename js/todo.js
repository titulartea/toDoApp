const todoForm = document.querySelector("#todo-form");
const todoLIst = document.querySelector("#todo-list");
const todoInput = todoForm.querySelector("input");
const todoContainer = document.querySelector("#todo-list");
const actuallCountaner = document.querySelector("#todoContainer");
let toDos = [];
const TODOS_KEY = "savedToDos";

if (
  localStorage.getItem("savedToDos") !== null &&
  localStorage.getItem("savedToDos") !== "[]"
) {
  todoContainer.classList.add("outline");
} else {
  console.log("no");
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObject = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObject);
  paintTodo(newTodoObject);
  todoContainer.classList.add("outline");
  saveToDos();
}

function paintTodo(todoWillPaint) {
  // 만들기
  const makedLi = document.createElement("li");
  makedLi.id = todoWillPaint.id;
  const spanInLi = document.createElement("span");
  const buttton = document.createElement("button");
  // handleToDoSubmit에서 받은 value를 innertext로 표시
  spanInLi.innerText = todoWillPaint.text;
  buttton.innerText = "✕";
  buttton.className += "deleteButton";
  // 집어넣어서 표시
  makedLi.appendChild(spanInLi);
  makedLi.appendChild(buttton);
  todoLIst.prepend(makedLi);
  // 삭제 버튼 가동
  buttton.addEventListener("click", deleteToDo);
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  console.log(li.id);
  toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
  console.log(toDos);
  saveToDos();

  if (localStorage.getItem("savedToDos") === "[]") {
    todoContainer.classList.remove("outline");
  }
}

function saveToDos() {
  localStorage.setItem(
    TODOS_KEY,
    // localStorage에는 문자만 넣을 수 있으므로 Arry인 toDos를 String으로 바꾼다.
    JSON.stringify(toDos)
  );
}

//시작
todoForm.addEventListener("submit", handleTodoSubmit);

//string으로 저장된 todo 가져오기
const savedToDo = localStorage.getItem(TODOS_KEY);

// 저장된 todo가 있다면
if (savedToDo !== null) {
  //string인 savedTodo를 js object로 parse
  const parsedToDos = JSON.parse(savedToDo);
  // 빈 array인 toDos에 저장된 todo 넣기
  toDos = parsedToDos;
  // parsedToDo의 각 todo들을 화면에 paint
  parsedToDos.forEach((item) => paintTodo(item));
}
