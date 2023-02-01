/* Author: Jordan Waite
File: Javascript for chamber homepage*/


/* This is the code to allow the drop-down menu to be toggled */
const mainNav = document.querySelector('.navigation');
const menuButton = document.querySelector('#menu');

menuButton.addEventListener('click', () =>
{mainNav.classList.toggle('responsive')}, false);

document.querySelector()

/* The code below is for inserting the current date
into the header and footer */

const d = new Date();

const head = `Current Date: ${d}.`;
const foot = `Last Updated: ${d}.`;


const headerDate = document.querySelector('.headerDate');
const footerDate = document.querySelector('.footerDate');

headerDate.textContent = head;
footerDate.textContent = foot;
