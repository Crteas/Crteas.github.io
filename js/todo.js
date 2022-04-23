const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

let toDos = [];

const TODOS_KEY = "todos";

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
  const target = event.target.parentElement;
  target.remove();
  //filter은 array 값이 조건문에 false가 되면 그 값은 없어짐!
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(target.id));
  saveToDos();
}

function toDoFilter(todo, target) {
  return todo.id !== target.id;
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  addTodoList(newTodoObj);
}

function addTodoList(newToDo) {
  const li = document.createElement("li");
  li.id = newToDo.id;
  const span = document.createElement("span");
  const button = document.createElement("button");
  button.innerText = "❌";
  button.className = "hidden";
  button.addEventListener("click", deleteTodo);
  li.addEventListener("mouseenter", () => button.classList.remove("hidden"));
  li.addEventListener("mouseleave", () => button.classList.add("hidden"));
  li.appendChild(span);
  li.appendChild(button);
  span.innerText = newToDo.text;
  toDoList.appendChild(li);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(addTodoList);
}
