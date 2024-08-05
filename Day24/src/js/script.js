// Define your API key directly here
const apiKey = '24770080842f425887b141738240508'; // Replace with your actual API key

// Function to fetch and update weather data based on city
async function updateWeather() {
    const city = document.getElementById('cityInput').value;
    if (!city) {
        alert('Please enter a city.');
        return;
    }

    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;
    try {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error('Response was not okay: ' + res.statusText);
        }
        const data = await res.json();
        displayData(data);
        forecastFuture(city); // Fetch forecast data when weather data is updated
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

// Function to display current weather data
function displayData(data) {
    document.querySelector('.city').textContent = data.location.name;
    document.querySelector('.temperature').textContent = `${data.current.temp_c} °C`;
    document.querySelector('.description').textContent = data.current.condition.text;

    const weatherIcon = document.querySelector('.weather-icon');
    const conditionIcon = data.current.condition.icon;
    weatherIcon.className = 'weather-icon'; // Reset icon class
    weatherIcon.style.backgroundImage = `url(${conditionIcon})`;
}

// Function to fetch and display the weather forecast
async function forecastFuture(city) {
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=5&aqi=no&alerts=no`;
    try {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error('Response was not okay: ' + res.statusText);
        }
        const data = await res.json();
        displayForecast(data.forecast.forecastday);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

// Function to display weather forecast
function displayForecast(forecastDays) {
    const forecastList = document.querySelector('#forecast-list');
    forecastList.innerHTML = ''; // Clear any existing forecast items

    forecastDays.forEach(day => {
        const listItem = document.createElement('li');
        listItem.classList.add('forecast-item');
        listItem.innerHTML = `
            <div class="forecast-date">${day.date}</div>
            <div class="forecast-temp">Temperature: ${day.day.avgtemp_c} °C</div>
            <div class="forecast-weather">${day.day.condition.text}</div>
        `;
        forecastList.appendChild(listItem);
    });
}

// Function to update current time
function updateTime() {
    const now = new Date();
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
    document.getElementById('currentTime').innerText = now.toLocaleTimeString([], options);
}

// Set interval to update time every second
setInterval(updateTime, 1000); 
updateTime(); // Initial call to display time immediately

// Event listener for the search button
document.querySelector('button').addEventListener('click', updateWeather);

// Initial load with default city
updateWeather();
