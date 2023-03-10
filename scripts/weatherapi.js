// Author: Jordan Waite
// Code reference: https://openweathermap.org/
// Assigning html elements to const variables
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = '{https://api.openweathermap.org/data/2.5/weather?q={Fairbanks},{US}&appid={55d6d2d1554e3eba2d95f26f702da6fe}&units=imperial}';

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        // displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();

