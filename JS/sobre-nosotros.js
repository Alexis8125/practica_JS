// Función para el desplazamiento suave al hacer clic en enlaces internos
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    for (const link of links) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
  
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
  
        if (targetElement) {
          const offsetTop = targetElement.offsetTop;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      });
    }
  });
  