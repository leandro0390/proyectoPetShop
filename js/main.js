document.addEventListener("DOMContentLoaded", function() {
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const navLinks = document.querySelector('nav ul');

  hamburgerMenu.addEventListener('click', function() {
      navLinks.classList.toggle('show');
  });
});