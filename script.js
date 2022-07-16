const closeBtn = document.querySelector(".close-btn");
const openBtn = document.querySelector(".open-btn");
const mobileNav = document.querySelector(".mobile-nav");

closeBtn.addEventListener("click", function () {
  mobileNav.classList.remove("open-nav");
});

openBtn.addEventListener("click", function () {
  mobileNav.classList.add("open-nav");
});
