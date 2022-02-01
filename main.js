function invertHeaderColor() {
  var headerElement = document.querySelector("header");
  var bottomElement = document.querySelector(".copyright");
  var windowHeight = window.innerHeight;
  var elementTop = bottomElement.getBoundingClientRect().top;
  var elementVisible = (windowHeight / 10) * 1;
  if (elementTop < windowHeight - elementVisible + 80) {
    // kinda hacky
    headerElement.classList.add("invert");
  } else {
    headerElement.classList.remove("invert");
  }
}

function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = (windowHeight / 10) * 1;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

function hide() {
  var reveals = document.querySelectorAll(".hide");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    var specialOffset = (windowHeight / 8) * 3;
    if (elementTop < windowHeight - elementVisible - specialOffset) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
window.addEventListener("scroll", hide);
window.addEventListener("scroll", invertHeaderColor);
