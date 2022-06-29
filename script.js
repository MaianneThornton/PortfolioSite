/*
=============== 
Scroll to top Arrow
===============
*/
//Get the return button:
mybutton = document.getElementById("myBtn");


// When the user scrolls down 20px from the top of the document, show the return button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the return button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

/*
=============== 
Navbar
===============
*/
// Get the nav button:
navbtn = document.getElementById("nav-btn");
links = document.getElementById("links")

function showLinks(){
  
}

function navToggle() {
  navbtn.addEventListener('click', () => {
    nav.classList.toggle('showLinks')
    input.focus()
  })
}


/*
=============== 
Section Animation
===============
*/
// Slides sections in from alternating sides
// select all the container classes
const boxes = document.querySelectorAll('.container')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
  // trigger point to determine when the box should scroll into view by using the innerHeight of the box
  const triggerBottom = window.innerHeight / 5 * 4

  boxes.forEach(box => {
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
    const boxTop = box.getBoundingClientRect().top
    if (boxTop < triggerBottom) {
      box.classList.add('show')
    } else {
      box.classList.remove('show')
    }
  })
}