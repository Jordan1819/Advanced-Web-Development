/* Author: Jordan Waite
File: Javascript for chamber homepage*/


/* This is the code to allow the drop-down menu to be toggled */

const mainnav = document.querySelector('.navigation')
const menu = document.querySelector('#menu');


menu.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

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