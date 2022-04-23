const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");
const greetingUsername = document.querySelector("#username");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KET = "username";

const date = new Date();
const hours = date.getHours();

const greetings = [
  "좋은아침입니다!",
  "점심은 드셨나요?",
  "오늘하루 잘 보냈나요?",
  "잘시간이에요~",
];

const savedUsername = localStorage.getItem(USERNAME_KET);
//preventDefault--> 기본동작을 막아줌
function onLoginBtnClick(event) {
  event.preventDefault();
  const username = loginInput.value;
  //setItem(Key,value)
  localStorage.setItem(USERNAME_KET, username);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  paintGreetings(username);
}

function paintGreetings(username) {
  let paintGreeting = null;
  if (hours <= 7) {
    paintGreeting = greetings[3];
  } else if (hours <= 12) {
    paintGreeting = greetings[0];
  } else if (hours <= 18) {
    paintGreeting = greetings[1];
  } else if (hours <= 23) {
    paintGreeting = greetings[2];
  }
  greeting.innerHTML = `${paintGreeting}`;
  greetingUsername.innerText = `${username}.`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginBtnClick);
} else {
  paintGreetings(savedUsername);
}
