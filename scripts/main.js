/* Author: Jordan Waite
File: JavaScript for Assignment Portal Page */

const f = document.createElement('FOOTER');
document.body.appendChild(f);

const txt = document.createTextNode("©2023 ♦ Jordan Waite ♦ Web Frontend Development");
const p = document.createElement('P');
p.appendChild(txt);

const d = new Date();
const fulldate = `Last Updated: ${d}`;
const p1 = document.createElement('P');
p1.textContent = fulldate;

p.appendChild(p1);
f.appendChild(p);