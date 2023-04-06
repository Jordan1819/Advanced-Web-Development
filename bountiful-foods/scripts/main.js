/* Author: Jordan Waite */
/*Javascript for Bountiful Foods Site */

/* Lazy loading of images here */

let imagesToLoad = document.querySelectorAll("img[data-src]");
const loadImages = (image) => {
const dataSrc = image.getAttribute("data-src")
if (!dataSrc) return
    image.setAttribute("src", dataSrc);
    image.onload = () => {
        image.removeAttribute("data-src");
    };
};

imagesToLoad.forEach((img) => {
    loadImages(img);
});

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if (item.isIntersecting) {
          loadImages(item.target);
          observer.unobserve(item.target);
        }
      });
    });
    imagesToLoad.forEach((img) => {
      observer.observe(img);
    });
  } else {
    imagesToLoad.forEach((img) => {
      loadImages(img);
    });
  }

  /* Section for pulling and displaying weather data */

const currentTemp = document.querySelector('#current-temp');
const currentCondition = document.querySelector('#current-condition');
const currentHumidity = document.querySelector('#current-humidity');


const url = 'https://api.openweathermap.org/data/2.5/weather?q=Carlsbad,US&appid=55d6d2d1554e3eba2d95f26f702da6fe&units=imperial';

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

function displayResults(weatherData) {
  currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
  const desc = weatherData.weather[0].description;
  const humidity = weatherData.main.humidity.toFixed(0);
  const finalHumidity = humidity + "%";
  currentCondition.textContent = desc;
  currentHumidity.textContent = finalHumidity;

}


/* Section for pulling fruit data from the JSON file */
fetch('https://brotherblazzard.github.io/canvas-content/fruit.json')
.then(response => response.json())
.then(data => {
  const fruitOptions = data.fruit(fruit => `<option value="${fruit}">${fruit}</option>`);

  const fruitSelects = document.querySelectorAll('select[name^="fruit"]');
  fruitSelects.forEach(select => select.innerHTML = fruitOptions.join(''));
});


/* Section for putting the last modified date in the footer */
var d = new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"});
const yearDate = new Date();
const year = yearDate.getFullYear();
const foot = `Last Updated: ${d}`;

const footerDate = document.querySelector('#footerDate');

footerDate.textContent = foot;

