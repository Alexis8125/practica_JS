// Obtenemos elementos del DOM
const registerButton = document.querySelector('.cta-button');
const loginForm = document.querySelector('.login-form');
const loginButton = document.querySelector('.login-button');
const servicesContainer = document.querySelector('.services-container');

// Evento para mostrar el formulario de inicio de sesión
registerButton.addEventListener('click', () => {
  loginForm.style.display = 'block';
});

// Evento para iniciar sesión (esto es un ejemplo, necesitarás lógica del lado del servidor)
loginButton.addEventListener('click', () => {
  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;

  // Aquí deberías enviar los datos a tu servidor para la autenticación
  // y manejar la respuesta del servidor.
  // Por ejemplo, puedes usar fetch() para hacer una solicitud HTTP.

  // Después de la autenticación exitosa, puedes redirigir al usuario a la página de servicios.
  // Ejemplo de redirección:
  // window.location.href = 'nuestros-servicios.html';

  // Por ahora, mostraremos un mensaje de alerta para demostrar la lógica.
  alert(`Iniciaste sesión como ${username}`);
});

// Ejemplo de carga dinámica de servicios (esto es un ejemplo, necesitarás datos reales y lógica del lado del servidor)
const servicios = [
  'Entrenamiento personalizado',
  'Dietas personalizadas',
  'Clases de yoga',
  'Asesoramiento nutricional',
  'Programas de pérdida de peso',
];

// Crear elementos de servicios y agregarlos al contenedor
servicios.forEach(servicio => {
  const servicioElement = document.createElement('div');
  servicioElement.classList.add('servicio');
  servicioElement.textContent = servicio;
  servicesContainer.appendChild(servicioElement);
});
