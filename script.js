const APIKEY = "ffbf154789a682ddf28d469e502ad0f6"
const APIURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const inputElem = document.querySelector("[data-input]")
const searchButton = document.querySelector("[data-search]")
const weatherReportImage = document.querySelector("[data-weather-image]")
const weatherReport = document.querySelector("[data-weather-report]")
const weatherCityName = document.querySelector("[data-weather-name]")
const humidPercent = document.querySelector("[data-humid-percent]")
const windSpeed = document.querySelector("[data-wind-percent]")


async function getWeather(cityName){
    const weatherData = await fetch(`${APIURL}${cityName}&appid=${APIKEY}`).then(res => res.json())
    weatherReportImage.src = `images/${weatherData.weather[0].main}.png`
    weatherReport.innerHTML = Math.round(weatherData.main.temp) + "°C"
    weatherCityName.innerHTML = weatherData.name
    windSpeed.innerHTML = `${weatherData.wind.speed} km/h`
    humidPercent.innerHTML = `${weatherData.main.humidity}%`
}

searchButton.addEventListener("click", () =>{
    const cityName = inputElem.value
    getWeather(cityName)
})

