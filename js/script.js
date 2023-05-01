// <--===== Menu-Mobile =====-->
const menuButton = document.querySelector(".c-menu__button");
function toggleMenu() {
  const menuMobile = document.querySelector(".c-menu");
  menuMobile.classList.toggle("is-active");
}
if (menuButton) {
  menuButton.addEventListener("click", toggleMenu);
}

// <--===== Typed =====-->
const typed = document.getElementById("typed");
if (typed) {
  let typed_strings = typed.getAttribute("data-typed-items");
  typed_strings = typed_strings.split(",");
  new Typed("#typed", {
    strings: typed_strings,
    typeSpeed: 60,
    backSpeed: 45,
    backDelay: 1500,
    loop: true,
  });
}

// <--===== Dark Mode =====-->
const darkModeButton = document.querySelector("#u-appearenceButton");
function changeMode() {
  const logo = document.querySelector(".c-brand > img");
  const mode = document.querySelector("html");
  mode.classList.toggle("dark-mode");
  if (mode.classList.contains("dark-mode")) {
    logo.setAttribute("src", "./mfg-logo-dark-mode.svg");
  } else {
    logo.setAttribute("src", "./mfg-logo.svg");
  }
}
if (darkModeButton) {
  darkModeButton.addEventListener("change", changeMode);
}

// <--===== Vanilla Tilt =====-->
VanillaTilt.init(document.querySelectorAll(".c-skills__card"), {
  reverse: true,
  glare: true,
  "max-glare": 0.2,
  scale: 1.05,
});

// <--===== Show Skills =====-->
const switcher = document.querySelector(".c-skills__checkbox");
function showSkills() {
  const skillContent = document.querySelectorAll(".c-skills__content");
  const switcherMode = document.querySelector(".c-skills__switcher");
  switcherMode.classList.toggle("c-skills__switcher--active");
  skillContent.forEach((item) =>
    item.classList.toggle("c-skills__content--active")
  );
}
if (switcher) {
  switcher.addEventListener("change", showSkills);
}

// <--===== Contact =====-->
const card = document.querySelectorAll(".c-contact__card");
const menu = document.querySelector(".c-menu");
const menuToggle = document.querySelectorAll(".c-menu__toggle");

// menu.addEventListener("click", (e) => {
//   if (e.target.classList.contains())
// })