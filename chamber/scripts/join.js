
// Join Page

function validateTitle() {
    const regex = /^[a-zA-Z\- ]{7,}$/;
    const titleInput = document.getElementById("title");
  
    if (!regex.test(titleInput.value)) {
      // Display an error message
      alert("The title must be at least 7 characters long and can only contain letters, hyphens, and spaces.");
      // Clear the input field
      titleInput.value = "";
      // Set focus back to the input field
      titleInput.focus();
      return false;
    }
  
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