/* Reference for code used in this assignment: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents#active_learning_a_dynamic_shopping_list */
/* Author: Jordan Waite */
const input = document.querySelector('input');
const list = document.querySelector('ul');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    const item = input.value;
    input.value = '';
    input.placeholder = '';

    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const deleteButton = document.createElement('button');

    listItem.appendChild(listText);
    listText.textContent = item;
    listItem.appendChild(deleteButton);
    
    deleteButton.innerHTML = '&#10060;';
    deleteButton.ariaLabel = `Delete ${item}`;

    list.appendChild(listItem);

    deleteButton.addEventListener('click', () => {
        list.removeChild(listItem);
    });

    input.focus();
});