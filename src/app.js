function refreshWeather(response) {
	let temperatureElement = document.querySelector("#temperature");
	let temperature = response.data.temperature.current;
	let cityElement = document.querySelector("#city");
	let countryElement = document.querySelector("#country");
	let timeElement = document.querySelector("#time");
	let descriptionElement = document.querySelector("#description");
	let humidityElement = document.querySelector("#humidity");
	let windspeedElement = document.querySelector("#windspeed");
	let date = new Date(response.data.time * 1000);
	let icon = response.data.condition.icon_url;
	let currentIcon = document.querySelector("#icon");
	console.log(response.data.condition.icon_url);
	currentIcon.src = `${icon}`;

	temperatureElement.innerHTML = Math.round(temperature);
	cityElement.innerHTML = response.data.city;
	countryElement.innerHTML = response.data.country;
	timeElement.innerHTML = formatDate(date);
	descriptionElement.innerHTML = response.data.condition.description;
	humidityElement.innerHTML = response.data.temperature.humidity;
	windspeedElement.innerHTML = response.data.wind.speed;
}
function formatDate(date) {
	let minutes = date.getMinutes();
	let hours = date.getHours();
	let days = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];
	let day = days[date.getDay()];
	if (minutes < 10) {
		minutes = `0${minutes}`;
	}
	return `${day} ${hours}:${minutes}`;
}

function searchCity(city) {
	let apiKey = "e546fd9teb385774339o4d3b5b79c3a0";
	let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
	axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) {
	event.preventDefault();
	let searchInput = document.querySelector("#search-form-input");

	searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Nicosia");
