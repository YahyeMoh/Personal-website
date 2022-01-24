// Dropdown Menu
const hamburger = document.querySelector('.hamburger');
const intro = document.querySelectorAll('a')[0];
const skill = document.querySelectorAll('a')[1];
const project = document.querySelectorAll('a')[2];
const about = document.querySelectorAll('a')[3];

const dropdown = function() {
  hamburger.classList.toggle('is-active');
  document.querySelector('.menu').classList.toggle('drop-down');
}

hamburger.addEventListener('click', dropdown)
intro.addEventListener('click', dropdown)
skill.addEventListener('click', dropdown)
project.addEventListener('click', dropdown)
about.addEventListener('click', dropdown)

const toggle = document.querySelector('#darkmode-toggle');
let darkMode = localStorage.getItem("darkMode");
const firstLightLogo = document.querySelectorAll('img.light')[0];
const secondLightLogo = document.querySelectorAll('img.light')[1];
const firstDarkLogo = document.querySelectorAll('img.dark')[0];
const secondDarkLogo = document.querySelectorAll('img.dark')[1];

const enableDarkMode = () => {
  document.body.classList.add('darkmode');
  localStorage.setItem('darkMode', 'enabled');
  firstLightLogo.classList.toggle('disappear');
  firstDarkLogo.classList.toggle('disappear');
  secondLightLogo.classList.toggle('disappear');
  secondDarkLogo.classList.toggle('disappear');
}

const disableDarkMode = () => {
  document.body.classList.remove('darkmode');
  localStorage.setItem('darkMode', null);
  firstLightLogo.classList.toggle('disappear');
  firstDarkLogo.classList.toggle('disappear');
  secondLightLogo.classList.toggle('disappear');
  secondDarkLogo.classList.toggle('disappear');
}

toggle.addEventListener("click", () => {
  darkMode = localStorage.getItem('darkMode');
  if (darkMode !== 'enabled') {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

const educationTitle = document.querySelectorAll('#about h2')[0];
const interestTitle = document.querySelectorAll('#about h2')[1];
const accomplishmentTitle = document.querySelectorAll('#about h2')[2];

educationTitle.addEventListener('click', () => {
  document.querySelector('#education-content').classList.toggle('disappear');
});

interestTitle.addEventListener('click', () => {
  document.querySelector('#interest-content').classList.toggle('disappear');
});

accomplishmentTitle.addEventListener('click', () => {
  document.querySelector('#accomplishment-content').classList.toggle('disappear');
});