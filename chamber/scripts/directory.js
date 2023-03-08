/* Author: Jordan Waite */

/* Section to fetch and convert json file
from github */
const url = 'https://jordan1819.github.io/WDD-230/chamber/content/data.json';

async function getPartnerData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.partners);
    displayPartners(data.partners);
}
getPartnerData();

const displayPartners = (partners) => {
    const cards = document.querySelector('div.cards');

    partners.forEach((partner) => {

        // Create section for each business card
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let h3 = document.createElement('h3');
        let h32 = document.createElement('h3');
        let a = document.createElement('a');

        // Assign the converted json values to the 
        //created elements from
        // the above section
        h2.textContent = `${partner.name}`;
        h3.textContent = `${partner.address}`;
        h32.textContent = `${partner.phoneNumber}`;
        a.textContent = 'Click here for more';
        
        h2.setAttribute('class', 'directoryNames');
        a.setAttribute('href', partner.url);
        a.setAttribute('target', '_blank');
        a.setAttribute('rel', 'noopener');

        // Append all of the elements together
        // and then the card to the div
        card.appendChild(h2);
        card.appendChild(h3);
        card.appendChild(h32);
        card.appendChild(a);

        cards.appendChild(card);
    });
};














