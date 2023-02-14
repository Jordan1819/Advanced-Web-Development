function windChill(tempF, speed) {
    if (tempF <= 50 && speed >= 3) {
      const windChill = 35.74 + 0.6215 * tempF - 35.75 * Math.pow(speed, 0.16) + 0.4275 * tempF * Math.pow(speed, 0.16);
      return windChill;
    }
    else {
      return "N/A";
    }
  }

const final = Math.round(windChill(-33, 8));
const span = document.getElementById("windChill").innerHTML = final;
