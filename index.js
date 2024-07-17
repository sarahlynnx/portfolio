// Toggle Dark/Light Theme
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

const toggleTheme = () => {
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

const removeHash = () => {
  history.pushState(
    "",
    document.title,
    window.location.pathname + window.location.search
  );
  window.scrollTo(0, 0);
}

// SKILLS

document.addEventListener("DOMContentLoaded", () => {
  const skillsSection = document.getElementById("skill-section");
  const skills = document.querySelectorAll(".skill-bubble");
  const options = {
    threshold: 0.1,
  };
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        skills.forEach((skill) => skill.classList.add("visible"));
      } else {
        skills.forEach((skill) => skill.classList.remove("visible"));
      }
    });
  }, options);
  observer.observe(skillsSection);
});

// NAVBAR - Closes the navbar menu when a nav item is clicked

document.addEventListener("DOMContentLoaded", () => {
  const navbarLinks = document.querySelectorAll(".navbar-nav .nav-link");
  const navbarCollapse = document.querySelector(".navbar-collapse");

  navbarLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth < 576) {
        const collapse = new bootstrap.Collapse(navbarCollapse, {
          toggle: false,
        });
        collapse.hide();
      }
    });
  });
});

// EMAIL

document
  .getElementById("contact-form")
  .addEventListener("submit", (event) => {
    event.preventDefault();

    // Get form data
    var templateParams = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };

    // Send email
    emailjs
      .send("service_nckvn8j", "template_z31ouch", templateParams)
      .then(
        function (response) {
          console.log("Email sent successfully:", response);

          document.getElementById("confirmation-message").style.display =
            "block";

          document.getElementById("contact-form").reset();
        },
        function (error) {
          console.log("Failed to send email:", error);
        }
      );
  });

document.addEventListener('DOMContentLoaded', function () {
  var tooltipTriggerEl = document.querySelector('[data-bs-toggle="tooltip"]');
  if (tooltipTriggerEl) {
    var tooltip = new bootstrap.Tooltip(tooltipTriggerEl);
  }
});
