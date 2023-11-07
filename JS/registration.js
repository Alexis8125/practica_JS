// Obtenemos el formulario del DOM
const registrationForm = document.getElementById('registration-form');

// Evento para manejar el envío del formulario de registro
registrationForm.addEventListener('submit', function(event) {
  event.preventDefault();

  // Obtenemos los valores de los campos del formulario
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Validamos los campos (solo validaciones básicas)
  if (username === '' || email === '' || password === '') {
    alert('Por favor, completa todos los campos.');
    return;
  }

  // Envía los datos al servidor para el registro (simulado en este ejemplo)
  // Aquí deberías hacer una solicitud HTTP (por ejemplo, usando fetch()) para enviar los datos al servidor.

  // Muestra un mensaje de éxito (esto es un ejemplo, en un entorno real, el servidor debería enviar una respuesta)
  alert('¡Registro exitoso! Bienvenido a LifeFit.');

  // Redirige al usuario a la página de inicio de sesión o a otra página de tu elección
  // window.location.href = 'iniciar-sesion.html';
});
