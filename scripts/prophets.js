const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.prophets);  // note that we reference the prophet array of the data object given the structure of the json file
    displayProphets(data.prophets);
  }
  getProphetData();

  function calculateAge(birthdate, death) {
    const birth = new Date(birthdate);
    const deathdate = new Date(death);
    const diffInMs = Math.abs(deathdate - birth); // Get the difference in milliseconds
    const msPerDay = 1000 * 60 * 60 * 24; // Number of milliseconds in a day
    const diffInDays = Math.floor(diffInMs / msPerDay); // Get the difference in days
    const years = Math.floor(diffInDays / 365); // Get the difference in years
    const months = Math.floor((diffInDays % 365) / 30); // Get the difference in months
    const days = Math.floor((diffInDays % 365) % 30); // Get the difference in days
  
    console.log(years);
    return `${years}` + ` years  ` + `${months}` + ` months`;
  }

const displayProphets = (prophets) => {
    const cards = document.querySelector('div.cards'); // select the output container element

    prophets.forEach((prophet) => {
        // Create elements to add to the div.cards element
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let h3 = document.createElement('h3');
        let portrait = document.createElement('img');


        // Build the h2 content out to show the prophet's full name - finish the template string
        h2.textContent = `${prophet.name} ${prophet.lastname}`;
        h3.innerHTML = `Date of Birth: ${prophet.birthdate}<br>Birthplace: ${prophet.birthplace}<br>Death: ${prophet.death}<br>Age: ${calculateAge(prophet.birthdate, prophet.death)}`;


        // Build the image portrait by setting all the relevant attribute
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname} $`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        // Append the section(card) with the created elements
        card.appendChild(h2);
        card.appendChild(h3);
        card.appendChild(portrait);

        cards.appendChild(card);
    }); // end of forEach loop
    }; // end of function expression


