const apiKey = "5389d8d258cce2ecedea384d08232b6a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBnt = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        let data = await response.json();



        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
        if (data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/cloudy.png";
        } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/sun.png";
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png";
        } else if (data.weather[0].main == "Storm") {
            weatherIcon.src = "images/storm.png";
        } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "images/fog.png";
        } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/sun.png";
        } else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "images/snow.png";
        }
    
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    };
};


searchBnt.addEventListener("click", () => {
    checkWeather(searchBox.value);
})

searchBox.addEventListener("keyup", (e) => {
    if (e.keyCode === 13)
    return checkWeather(searchBox.value);
})

