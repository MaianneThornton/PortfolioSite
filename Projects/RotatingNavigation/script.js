const loadText = document.querySelector('.loading-text')
const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')

let load = 0

// Runs the blurring function every 30 ms 
let int = setInterval(blurring, 30)

function blurring() {
  load++

  // Stops running when int = 100
  if (load > 99) {
    clearInterval(int)
  }

  loadText.innerText = `${load}%`
  // Opacity is a scale from 0 (not opaque) to 1 (opaque)
  // Fades out the loading percentage text
  loadText.style.opacity = scale(load, 0, 100, 1, 0)
  // Fades out the bg image blur from 30px to 0px
  container.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}

// Adds show-nav when button is clicked
open.addEventListener('click', () => container.classList.add('show-nav'))
close.addEventListener('click', () => container.classList.remove('show-nav'))