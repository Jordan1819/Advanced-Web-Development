/* Author: Jordan Waite
File: Javascript for chamber homepage*/


/* This is the code to allow the drop-down menu to be toggled */
const mainNav = document.querySelector('.navigation');
const menuButton = document.querySelector('#menu');

menuButton.addEventListener('click', () =>
{mainNav.classList.toggle('responsive')}, false);

/* The code below is for inserting the current date
into the header and footer */

const d = new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"});
const yearDate = new Date();
const year = yearDate.getFullYear();

const head = `${d}`;
const foot = `Last Updated: ${d}.`;
const footTag = `©${year} Idaho Falls Chamber of Commerce | Jordan Waite | WDD 230 Project`;


const headerDate = document.querySelector('.headerDate');
const footerDate = document.querySelector('.footerDate');
const footerTag = document.querySelector('.footerTag');

headerDate.textContent = head;
footerDate.textContent = foot;
footerTag.textContent = footTag;

document.querySelector('.headerDate').textContent = head;
