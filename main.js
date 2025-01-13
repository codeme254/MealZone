const toggleMenuBtn = document.getElementById("toggle-menu-btn");
const nav = document.getElementById("nav");

toggleMenuBtn.addEventListener("click", () => {
  nav.classList.toggle("header-nav-active");
});
