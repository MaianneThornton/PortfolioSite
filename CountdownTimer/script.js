// ------- Variables ------- 
let startingMinutes = 10;
let time = startingMinutes * 60; // seconds (600 secs in 10 minutes)

const countdownElement = document.getElementById('countdown'); // countdown ID | HTML

// ------- Update Countdown Function -------
setInterval(updateCountdown, 1000); //update timer every second
function updateCountdown() {
  const minutes = Math.floor(time / 60); // seconds divided by 60 to get the minutes with no decimals
  let seconds = time % 60; // remaining seconds after modulo

  seconds = seconds < 10 ? `0` + seconds : seconds; // ternary to fix the way seconds are displayed. if seconds is less than 10 then display 0 as the first digit

  // while (minutes >= 0) {
  countdownElement.innerHTML = `${minutes}:${seconds}`; // creates the element so we can see it on the page
  time--; // decrement so time counts down
  time = time < 0 ? 0 : time; // to avoid negative numbers
}

// ------- Button -------
function refreshPage() {
  window.location.reload();
}