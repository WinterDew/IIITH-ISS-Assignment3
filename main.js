// Make sure year is auto-updated :P
document.getElementById("footer-date").innerText = new Date().getFullYear();


// Handle Hamburger

const hamburger = document.getElementById("hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
});