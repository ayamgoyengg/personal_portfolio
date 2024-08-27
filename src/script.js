// script.js
const burgerButton = document.getElementById('burgerButton');
const closeButton = document.getElementById('closeButton');
const mobileMenu = document.getElementById('mobileMenu');

// Show mobile menu and hide main content
burgerButton.addEventListener('click', () => {
  mobileMenu.classList.remove('hidden');
  document.body.classList.add('overflow-hidden'); // Prevent body scrolling
});

// Hide mobile menu and show main content
closeButton.addEventListener('click', () => {
  mobileMenu.classList.add('hidden');
  document.body.classList.remove('overflow-hidden'); // Allow body scrolling
});

