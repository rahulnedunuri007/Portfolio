const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");
const year = document.getElementById("year");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});

if (year) {
  year.textContent = new Date().getFullYear();
}