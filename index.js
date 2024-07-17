
//skill bubbles positioning  
document.addEventListener("DOMContentLoaded", function () {
  const skills = document.querySelectorAll(".skills .skill-bubble");

  skills.forEach((skill, index) => {
    const angle = (index / skills.length) * 360;
    const radius = 30;
    const x = radius * Math.cos((angle * Math.PI) / 180);
    const y = radius * Math.sin((angle * Math.PI) / 180);

    skill.style.left = `${40 + x}%`;
    skill.style.top = `${40 + y}%`;
  });
});

//toggle dark/light mode
const themeIcon = document.getElementById('theme-icon');
const rootElement = document.documentElement;
const navBar = document.querySelector('.navbar');
const navItems = document.querySelectorAll('.nav-item');
const navText = document.querySelector('.navbar-text');
const navLink = document.querySelectorAll('.nav-link');
const contactForm = document.querySelector('.contact-form');
const btnAfterElement = document.querySelectorAll('.btn');
const socialIcons = document.querySelectorAll('.social-icons');
const skillText = document.querySelectorAll('.skill-bubble');

function toggleTheme() {
  if (rootElement.getAttribute('data-bs-theme') === 'dark') {
    rootElement.setAttribute('data-bs-theme', 'light');
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
    navItems.forEach(item => item.classList.remove('theme'));
    navText.classList.add('theme');
    navLink.forEach(item => item.classList.add('theme'));
    contactForm.classList.add('theme');
    btnAfterElement.forEach(item => item.classList.add('theme'));
    socialIcons.forEach(item => item.classList.add('theme'));
    skillText.forEach(item => item.classList.add('theme'));
    navBar.classList.add('theme');

  } else {
    rootElement.setAttribute('data-bs-theme', 'dark');
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
    navItems.forEach(item => item.classList.add('theme'));
    navText.classList.remove('theme');
    navLink.forEach(item => item.classList.remove('theme'));
    contactForm.classList.remove('theme');
    btnAfterElement.forEach(item => item.classList.remove('theme'));
    socialIcons.forEach(item => item.classList.remove('theme'));
    skillText.forEach(item => item.classList.remove('theme'));
    navBar.classList.remove('theme');

  }
}

function removeHash() {
  history.pushState(
    "",
    document.title,
    window.location.pathname + window.location.search
  );
  window.scrollTo(0, 0);
}
