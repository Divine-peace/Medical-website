const hamburger = document.querySelector(".hamburger");
const toggleMenu = document.querySelector(".mobile-menu");

hamburger.addEventListener("click", () => {
  toggleMenu.classList.toggle("active");
});


