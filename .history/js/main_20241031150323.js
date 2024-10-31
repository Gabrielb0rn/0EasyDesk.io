// Adicionar ao seu arquivo script.js
document.addEventListener('DOMContentLoaded', () => {
  // Animação suave no scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });

  // Header transparente que muda com scroll
  window.addEventListener('scroll', () => {
      const header = document.querySelector('.main-header');
      if (window.scrollY > 50) {
          header.classList.add('scrolled');
      } else {
          header.classList.remove('scrolled');
      }
  });
});