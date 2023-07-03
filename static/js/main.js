// Carga el mapa base cuando se cargue la página
loadBaseMap();

// Añade un event listener al formulario para manejar el envío del formulario
var form = document.querySelector('#my-form');
form.addEventListener('submit', handleFormSubmit);