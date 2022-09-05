const hamburger = document.querySelector('.hamburger-menu');
const nav = document.querySelector('.nav-menu');
const links = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('slide')
  hamburger.classList.toggle('slide')
})

