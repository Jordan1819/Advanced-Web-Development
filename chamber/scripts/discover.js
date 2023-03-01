 /* Discover Page */
  /* Section for calculating number of days since last visit */

  let diffDays = 0; 
    
  //get the value from localStorage
  const startDate = localStorage.getItem("lastDate");

  //if it is not null calculate the difference
  if(startDate != null){
    const difference = (new Date().getTime() - startDate) / 1000 / 60 / 60 / 24; //milliseconds to the day
    diffDays = Math.floor(difference);
    document.querySelector(".timeBetween").innerText = "Days since your last visit: " + diffDays;
  } else {
    document.querySelector(".timeBetween").innerText = "This is your first time here! Welcome!"
  }

//write current date to the localStorage again
localStorage.setItem("lastDate", (new Date()).getTime());