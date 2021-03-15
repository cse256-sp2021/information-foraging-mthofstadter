export function doSomething() {
  window.onscroll = function() {myFunction()};
  document.onload = function() {myFunction2()};
  window.onclick = function() {myFunction3()};

// Get the header
var header = document.getElementById("main-menu-container");
var dropdown = document.getElementById("mturk-top-banner-drop-down-content");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// function myFunction() {
//   console.log(dropdown.offsetHeight);
//   if (window.pageYOffset > sticky) {
//     if(dropdown.offsetHeight != 0) {
//       header.classList.add("stickyTall");
//     }
//     else {
//       header.classList.add("stickyShort");
//     }
//   } else {
//     header.classList.remove("stickyTall");
//     header.classList.remove("stickyShort")
//   }
// }

function myFunction() {
  console.log(dropdown.offsetHeight);
    if(dropdown.offsetHeight != 0) {
      header.classList.remove("stickyShort")
      header.classList.add("stickyTall");
    }
    else {
      header.classList.remove("stickyTall");
      header.classList.add("stickyShort");
    }
  }

function myFunction2() {
  console.log("HI");
  myFunction();
}

function myFunction3() {
  myFunction();
}

}


