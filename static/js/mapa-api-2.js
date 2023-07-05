var overlays = {};

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

var baseLayers = {
    "OpenStreetMap": openStreetMap,
    "Stamen Terrain": stamenTerrain,
    "Esri World Imagery": esriWorldImagery,
};


document.addEventListener('DOMContentLoaded', function() {
    const aveData = document.getElementById('aveData');
    const nombreCientifico = aveData.getAttribute('data-nombre-cientifico');
    const nombreCientificoFormated = encodeURIComponent(nombreCientifico);

    fetch(`https://api.gbif.org/v1/species/match?name=${nombreCientificoFormated}&country=AR`)
        .then(response => response.json())
        .then(data => {
            var usageKey = data.usageKey;
            return fetch(`https://api.gbif.org/v1/occurrence/search?taxonKey=${usageKey}&country=AR&year=2023`);
            // &limit=500
        })
        .then(response => response.json())
        .then(data => {
            var birdObservations = L.layerGroup();
            data.results.forEach(observation => {
                if (observation.decimalLatitude && observation.decimalLongitude) {
                    L.marker([observation.decimalLatitude, observation.decimalLongitude]).addTo(birdObservations);
                }
            });
            overlays["Respuesta_de_API"] = birdObservations;
            L.control.layers(baseLayers, overlays).addTo(map);
        })
        .catch(error => {
            console.error('Error:', error);
        });
});

// Agregar escala al mapa
L.control.scale().addTo(map);
