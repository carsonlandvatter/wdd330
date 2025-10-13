const weatherApiKey = import.meta.env.VITE_WORLD_WEATHER_API_KEY;
const weatherApiUrl = import.meta.env.VITE_WORLD_WEATHER_API_URL;
const today = document.getElementById('today');

const response = await fetch(`${weatherApiUrl}?key=${weatherApiKey}&q=40.60,-111.58&num_of_days=1&format=json`)
const data = await response.json();

export default function displayWeatherInfo() {

    if (today) {
    const sunset = data.data.weather[0].astronomy[0].sunset
    const sunrise = data.data.weather[0].astronomy[0].sunrise
    const date = data.data.weather[0].date
    const chanceOfSnow = data.data.weather[0].chanceofsnow
    const totalSnowfall = data.data.weather[0].totalSnowfall_cm
    const minTemp = data.data.weather[0].top[0].mintempF
    const maxTemp = data.data.weather[0].top[0].maxtempF
    const weatherCard = document.createElement('div')
    weatherCard.classList.add('weatherCards')

    weatherCard.innerHTML = `
    <h2>Current Weather</h2>
    <p>Date: ${date}</p>
    <p>Min Temp: ${minTemp}&deg;C</p>
    <p>Max Temp: ${maxTemp}&deg;F</p>
    <p>Total Snowfall: ${totalSnowfall} cm</p>
    <p>Chance of Snow: ${chanceOfSnow}%</p>
    <p>Sunrise: ${sunrise}</p>
    <p>Sunset: ${sunset}</p>`

    today.appendChild(weatherCard);
    }

}