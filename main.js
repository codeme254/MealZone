const toggleMenuBtn = document.getElementById("toggle-menu-btn");
const nav = document.getElementById("nav");

// toggle menu
toggleMenuBtn.addEventListener("click", () => {
  nav.classList.toggle("header-nav-active");
});

// show header
const header = document.getElementById("header");
const hero = document.getElementById("hero");

const heroSectionObserver = new IntersectionObserver(
  (entries, heroSectionObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        header.classList.add("header-visible");
      } else {
        header.classList.remove("header-visible");
      }
    });
  },
  {},
);

heroSectionObserver.observe(hero);

// scroll the reservation section into view
const reservationCtaButton = document.getElementById("reservation-cta");
const reservationSection = document.getElementById("reservation-section");

reservationCtaButton.addEventListener("click", () => {
  reservationSection.scrollIntoView({ behavior: "smooth" });
});
