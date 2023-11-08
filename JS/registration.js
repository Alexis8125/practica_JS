// Obtenemos el formulario del DOM
const registrationForm = document.getElementById('registration-form');

// Evento para manejar el envío del formulario de registro
registrationForm.addEventListener('submit', function(event) {
  event.preventDefault();

  // Obtenemos los valores de los campos del formulario
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Validamos los campos
  if (username === '' || email === '' || password === '') {
    alert('Por favor, completa todos los campos.');
    return;
  }
  // Muestra un mensaje de éxito
  alert('¡Registro exitoso! Bienvenido a LifeFit.');

  // Redirige al usuario a la página de inicio de sesión o a otra página de tu elección
  // window.location.href = 'iniciar-sesion.html';
});
