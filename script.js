const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");
const year = document.getElementById("year");
const header = document.querySelector(".header");

if (menuToggle) {
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

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

const revealElements = document.querySelectorAll(
  ".hero-text, .hero-card, .section-header, .about-text, .about-box, .project-card, .skill-box, .contact-item"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  {
    threshold: 0.15,
  }
);

revealElements.forEach((element) => {
  element.classList.add("reveal");
  observer.observe(element);
});