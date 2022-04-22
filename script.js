//Get the return button:
mybutton = document.getElementById("myBtn");
// Get the nav button:
navbtn = document.getElementById("nav-btn");

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

function navToggle() {
  navbtn.addEventListener('click', () => {
    nav.classList.toggle('showLinks')
    input.focus()
  })
}
