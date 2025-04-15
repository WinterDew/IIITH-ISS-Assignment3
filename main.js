// Make sure year is auto-updated :P
document.getElementById("footer-date").innerText = new Date().getFullYear();


// Handle Hamburger

const hamburger = document.getElementById("hamburger");
const nav = document.querySelector(".nav");
const body = document.querySelector("body");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
  body.classList.toggle("no-scroll");
});

const links = document.querySelectorAll(".nav a");
links.forEach(link => {
  link.addEventListener("click", () => {
    
    nav.classList.remove("active");
    body.classList.remove("no-scroll");
  });
});