axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

id_latitud = document.getElementById('id_latitud')
id_longitud = document.getElementById('id_longitud')
var marker;
  
var map = L.map('map').setView([-34.6362, -58.5678], 5);

L.tileLayer(
    'https://tile.openstreetmap.org/{z}/{x}/{y}.png', 
    { maxZoom: 19, 
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(map);

map.on('click', function(event) {
    var api_axion = 'https://apis.datos.gob.ar/georef/api/ubicacion'
    var latLng = event.latlng;
    //console.log('Latitud:', latLng.lat);
    //console.log('Longitud:', latLng.lng);
    var lat = latLng.lat;
    var lng = latLng.lng;

    id_latitud.value = lat;
    id_longitud.value = lng;
    //fechaInput.value = fechaActual;
    //horaInput.value = horaActual;

    if(marker){
        map.removeLayer(L.marker);
        map.removeControl(marker);
    }
    marker = L.marker(latLng).addTo(map).bindPopup('Latitud: ' + latLng.lat + '<br>Longitud: ' + latLng.lng).openPopup();

    // Obtener el nombre de la provincia a partir de las coordenadas
    // utilizando la API de georreferenciación de datos.gob.ar
    axios.get(`${api_axion}?lat=${lat}&lon=${lng}`).then(function(response) {
        console.log(response.data); // console.log() para verificar la respuesta
        var provincia = response.data.ubicacion.provincia.nombre;

        // Asignar el nombre de la provincia al campo de entrada correspondiente
        //document.getElementById('provincia').value = provincia;
        })
        .catch(function(error) {
            console.log(error);
        });
});

  