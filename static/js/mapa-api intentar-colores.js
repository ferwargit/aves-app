var openStreetMap = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

var stamenTerrain = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.{ext}', {
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    subdomains: 'abcd',
    minZoom: 0,
    maxZoom: 18,
    ext: 'png'
});

var esriWorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri'
});

var map = L.map('map', {
    center: [-41.6, -62.0],
    zoom: 4,
    layers: [openStreetMap]  // La primera capa base que se muestra por defecto
});

document.addEventListener('DOMContentLoaded', function() {
    const aveData = document.getElementById('aveData');
    const nombreCientifico = aveData.getAttribute('data-nombre-cientifico');
    console.log(nombreCientifico);
    const nombreCientificoFormated = encodeURIComponent(nombreCientifico);
    console.log(nombreCientificoFormated);

fetch(`https://api.gbif.org/v1/species/match?name=${nombreCientificoFormated}&country=AR`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    // Aquí obtienes el usageKey de la respuesta de la API
        var usageKey = data.usageKey;
        console.log(usageKey);
    // Continúa con el código para la segunda consulta a la API
        fetch(`https://api.gbif.org/v2/map/occurrence/density/{z}/{x}/{y}@1x.png?taxonKey=${usageKey}&basisOfRecord=HUMAN_OBSERVATION&years=2023,2023&bin=hex&hexSize=64&style=red.poly&country=AR`)
        .then(response => {
            console.log(response);
            if (response.ok) {
            // Aquí obtienes la respuesta de la segunda consulta a la API
                return response.blob();
            } else {
                throw new Error('Error en la solicitud');
    }
    })
    .then(blob => {
    // Continúa con el código para mostrar la respuesta en el mapa
        var imageUrl = URL.createObjectURL(blob);

        // Crea una nueva capa de mapa utilizando la imagen obtenida
        var responseLayer = L.tileLayer(imageUrl, {
        attribution: '&copy; <a href="https://www.gbif.org/">GBIF</a>',
        opacity: 0.5
        });
    
        // Agrega la capa de respuesta al mapa como una capa de superposición
        overlays["Respuesta_de_API"] = responseLayer;
        L.control.layers(baseLayers, overlays).addTo(map);



    })
    .catch(error => {
    console.error('Error:', error);
    });

  })
});


// Aquí se definen las capas base (solo puede estar seleccionada una a la vez)
var baseLayers = {
    "OpenStreetMap": openStreetMap,
    "Stamen Terrain": stamenTerrain,
    "Esri World Imagery": esriWorldImagery,
};

// Aquí se definen las capas de superposición (pueden estar seleccionadas varias a la vez)
// var overlays = {
//     "Caracara_plancus": caracara_plancus,
// };

// Se añade el control de capas al mapa
// L.control.layers(baseLayers, overlays).addTo(map);

// // Agregar escala al mapa
// // L.control.scale().addTo(map);
// L.control.scale({ position: 'bottomright' }).addTo(map);
