
// Section to pull current weather data
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Ammon,US&appid=55d6d2d1554e3eba2d95f26f702da6fe&units=imperial';

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();

// Section to Display Results

function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;

    const tempF = weatherData.main.temp.toFixed(0);
    const speed = weatherData.main.wind.toFixed(0);
    const windChill = 35.74 + 0.6215 * tempF - 35.75 * Math.pow(speed, 0.16) + 0.4275 * tempF * Math.pow(speed, 0.16);
    
    const windChillOutput = Math.round(windChill);
    document.getElementById("windChill").innerHTML = windChillOutput;}
    // Temporary Windchill Output
    document.getElementById("windChill").innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
