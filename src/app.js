function refreshWeather(response) {
	console.log(response.data);
}

function searchCity(city) {
	//make api call and update the interface

	let apiKey = "e546fd9teb385774339o4d3b5b79c3a0";
	let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
	axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) {
	event.preventDefault();
	let searchInput = document.querySelector("#search-form-input");
	let cityElement = document.querySelector("#city");
	cityElement.innerHTML = searchInput.value;
	searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
