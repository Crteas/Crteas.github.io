const API_KEY = "b39f4410b4c55760d6cfdb613165fc18";
function onGeoGood(pos) {
  const lat = pos.coords.latitude;
  const lng = pos.coords.longitude;
  console.log("Hi", lat, lng);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main}/${data.main.temp}°C/`;
    });
}
function onGeoError() {
  const weather = document.querySelector("#weather span:first-child");
  weather.innerText = "날씨를 이용할 수 없어요!";
}

navigator.geolocation.getCurrentPosition(onGeoGood, onGeoError);
