/* Author: Jordan Waite
File: Javascript for chamber homepage*/


/* This is the code to allow the drop-down menu to be toggled */
const mainNav = document.querySelector('.navigation');
const menuButton = document.querySelector('#menu');

menuButton.addEventListener('click', () =>
{mainNav.classList.toggle('responsive')}, false);

/* The code below is for inserting the current date
into the header and footer */

var d = new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"});
const yearDate = new Date();
const year = yearDate.getFullYear();

const head = `${d}`;
const foot = `Last Updated: ${d}`;
const footTag = `©${year} Idaho Falls Chamber of Commerce | Jordan Waite | WDD 230 Project`;


const headerDate = document.querySelector('.headerDate');
const footerDate = document.querySelector('.footerDate');
const footerTag = document.querySelector('.footerTag');

headerDate.textContent = head;
footerDate.textContent = foot;
footerTag.textContent = footTag;

document.querySelector('.headerDate').textContent = head;

/* The code below is for displaying a promotional
message on Mondays and Tuesdays */

const promotion = document.querySelector('.promotion');
const date = new Date();
const currentDay = date.getDay();

if (currentDay == 1 || currentDay == 2) {
    promotion.style.display = 'block';
}

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
  /* Discove Page */
  /* Section for calculating number of days since last visit */

  let diffDays = 0; 
    
  //get the value from localStorage
  const startDate = localStorage.getItem("lastDate");

  //if it is not null calculate the difference
  if(startDate != null){
    const difference = (new Date().getTime() - startDate) / 1000 / 60 / 60 / 24; //milliseconds to the day
    diffDays = Math.floor(difference);
    document.querySelector(".timeBetween").innerText = "Days since your last visit: " + diffDays;
  } else {
    document.querySelector(".timeBetween").innerText = "This is your first time here! Welcome!"
  }

//write current date to the localStorage again
localStorage.setItem("lastDate", (new Date()).getTime());


// Join Page

function validateTitleInput(inputValue) {
  // Regular expression to check for valid title format
  const titleRegex = /^[A-Za-z\s-]{7,}*$/;

  // Check if the input value matches the regex pattern
  if (titleRegex.test(inputValue)) {
    return true;
  } else {
    return false;
  }
}

function validateForm() {
  const titleInput = document.getElementById("title");
  const title = titleInput.value;
  if (!validateTitleInput(title)) {
    titleInput.setCustomValidity("Please enter a valid title with alpha characters, hyphens, and spaces and a minimum of seven characters.");
    return false;
  }
  // If the title is valid, allow the form to submit
  return true;
}

// Code to add current date to hidden form
window.onload = function() {
  storeCurrentDate();
}

function storeCurrentDate() {
  // Create a new Date object representing the current date and time
  var currentDate = new Date();
  
  // Get the hidden input element with an id of "dateAccessed"
  const dateInput = document.getElementById("dateAccessed");

  // Set the value of the input element to the current date
  dateInput.value = currentDate.toISOString().slice(0, 10);

  console.log(currentDate);
}




