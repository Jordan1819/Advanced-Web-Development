
// Join Page

function validateTitleInput(inputValue) {
    // Regular expression to check for valid title format
    const titleRegex = /^[A-Za-z\s\-]{7,}$/;
  
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
  
  function storeCurrentDate() {
    // Create a new Date object representing the current date and time
    var currentDate = new Date();
    
    // Get the hidden input element with an id of "dateAccessed"
    const dateInput = document.getElementById("dateAccessed");
  
    // Set the value of the input element to the current date
    dateInput.value = currentDate.toISOString().slice(0, 10);
  
    console.log(currentDate);
  }
  
  window.onload = function() {
    storeCurrentDate();
  }