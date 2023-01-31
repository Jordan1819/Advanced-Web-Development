/* Author: Jordan Waite
File: Javascript for chamber homepage*/


/* This is the code to allow the drop-down menu to be toggled */
const mainNav = document.querySelector('.navigation');
const menuButton = document.querySelector('#menu');

menuButton.addEventListener('click', () =>
{mainNav.classList.toggle('responsive')}, false);

document.querySelector()

/*headerDate and footerDate are the 
div classes that need referenced */

/* The code below is for inserting the current date
into the header and footer */

const d = new Date();
const fulldate = `Current Date: ${d}`;

const head = `Current Date: ${fulldate}.`;
const foot = `Last Updated: ${fulldate}.`;

document.querySelector('headerDate').innerHTML = head;
document.querySelector('footerDate').innerHTML = foot;
