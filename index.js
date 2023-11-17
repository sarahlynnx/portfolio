
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
