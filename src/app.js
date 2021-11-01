let apiKey = "97c2f6a3b34509ac62090edc5d18d949";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`;

function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windspeedElement = document.querySelector("#windSpeed");
  temperatureElement.innerHTML = response.data.main.temp;
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windspeedElement.innerHTML = response.data.wind.speed;
}
console.log(apiUrl);
axios.get(apiUrl).then(displayTemperature);
