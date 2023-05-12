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
    backSpeed: 35,
    backDelay: 1500,
    loop: true,
  });
}

// <--===== Dark Mode =====-->
const darkModeButton = document.querySelector("#u-appearenceButton");
function changeMode() {
  const logo = document.querySelector(".c-brand > img");
  const mode = document.querySelector("html");
  mode.classList.toggle("dark-theme");
  if (mode.classList.contains("dark-theme")) {
    logo.setAttribute("src", "./svg/logos/logo-dm.svg");
  } else {
    logo.setAttribute("src", "./svg/logos/logo.svg");
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
const cards = document.querySelectorAll(".js-contactCard");
const contactMenu = document.querySelector(".js-contactMenu");
const contactMenuToggle = "js-contactMenuToggle";
const contactToggle = document.querySelectorAll(`.${contactMenuToggle}`);

contactMenu.addEventListener("click", (event) => {
  if (event.target.classList.contains(contactMenuToggle)) {
    activateCard(event.target.parentElement);
    markAsActiveMenuItem(event.target);
  }
});

function activateCard(elemento) {
  const socialContact = elemento.dataset.socialContact;

  cards.forEach((card) => {
    card.classList.remove("is-active");

    if (card.classList.value.includes(socialContact)) {
      card.classList.add("is-active");
    }
  });
}

function markAsActiveMenuItem(el) {
  contactToggle.forEach((item) => {
    item.classList.remove("is-active");
  });

  el.classList.add("is-active");
}