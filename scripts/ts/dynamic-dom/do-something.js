export function doSomething() {
  window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("main-menu-container");

// Get the offset position of the navbar
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
}
