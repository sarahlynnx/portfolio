
//skills bubbles positioning  
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".disabled-buttons button");

  buttons.forEach((button, index) => {
      const angle = (index / buttons.length) * 360; 
      const radius = 30; 
      const x = radius * Math.cos((angle * Math.PI) / 180);
      const y = radius * Math.sin((angle * Math.PI) / 180);

      button.style.left = `${40 + x}%`; 
      button.style.top = `${40 + y}%`; 
  });
});

//toggle dark/light mode
const themeIcon = document.getElementById('theme-icon');
const rootElement = document.documentElement;
const navItems = document.querySelectorAll('.nav-item');
const navText = document.querySelector('.navbar-text');
const contactForm = document.querySelector('.contact-form');

function toggleTheme() {
  if (rootElement.getAttribute('data-bs-theme') === 'dark') {
    rootElement.setAttribute('data-bs-theme', 'light'); 
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
    navItems.forEach(item => item.classList.remove('light-theme'));
    navText.classList.remove('light-theme');
    contactForm.classList.add('light-theme');
  } else {
    rootElement.setAttribute('data-bs-theme', 'dark');
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
    navItems.forEach(item => item.classList.add('light-theme'));
    navText.classList.add('light-theme');
    contactForm.classList.remove('light-theme');
  }
}
