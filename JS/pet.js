// Scroll Btn
window.addEventListener("scroll", () => {
  let btn = document.querySelector(".scrollup");
  if (window.pageYOffset > 500) {
    btn.classList.add("active");
  } else {
    btn.classList.remove("active");
  }
});
document.querySelector(".scrollup").addEventListener("click", () => {
  window.scrollTo({
    top: 0,
  });
});

// Scroll Btn
// Loader
setTimeout(() => {
  document.querySelector(".loader").style.display = "none";
}, 3000);
// Loader
// Start Nav Menue
let navBtn = document.querySelector(".nav-btn");
let navMenu = document.querySelector(".navmenu");
let menuOpen = false;
navBtn.addEventListener("click", function () {
  if (!menuOpen) {
    navBtn.classList.add("change");
    navMenu.classList.add("open");
    menuOpen = true;
  } else {
    navBtn.classList.remove("change");
    navMenu.classList.remove("open");
    menuOpen = false;
  }
});

// End Nav Menue
// Start Remove All Active from ul Links
let activeLink = document.querySelectorAll(".navmenu li a");
activeLink.forEach((element) => {
  element.addEventListener("click", function () {
    document.querySelector(".active")?.classList.remove("active");
    this.classList.add("active");
  });
});

// End Remove All Active from ul Links

let skeleton = document.querySelectorAll(".skeleton");
window.addEventListener("load", function () {
  skeleton.forEach((element) => {
    element.classList.remove("skeleton");
  });
});

let currentYear = document.querySelector(".year");
let fullyYear = new Date().getFullYear();
currentYear.innerHTML = fullyYear;
