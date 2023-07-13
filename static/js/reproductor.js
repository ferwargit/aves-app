// Obtén una referencia al elemento de audio
var audioPlayer = document.querySelector('.audio-player audio');

// Agrega eventos para controlar la reproducción
audioPlayer.addEventListener('play', function() {
  // Se ejecuta cuando se inicia la reproducción
  console.log('Reproducción iniciada');
});

audioPlayer.addEventListener('pause', function() {
  // Se ejecuta cuando se pausa la reproducción
  console.log('Reproducción pausada');
});

audioPlayer.addEventListener('ended', function() {
  // Se ejecuta cuando la reproducción finaliza
  console.log('Reproducción finalizada');
});