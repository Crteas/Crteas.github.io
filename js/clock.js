const clock = document.querySelector("#clock");

setTime();
setInterval(setTime, 1000);

function setTime() {
  const date = new Date();
  const hours = date.getHours().toString().padStart(2, "0");
  const min = date.getMinutes().toString().padStart(2, "0");
  clock.innerHTML = `${hours}:${min}`;
}
