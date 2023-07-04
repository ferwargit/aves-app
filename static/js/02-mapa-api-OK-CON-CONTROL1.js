var openStreetMap = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

var map = L.map('map', {
    center: [-41.6, -62.0],
    zoom: 5,
    layers: [openStreetMap]  // La primera capa base que se muestra por defecto
});

var gbifOccurrences = L.tileLayer('https://api.gbif.org/v2/map/occurrence/density/{z}/{x}/{y}@1x.png?taxonKey=212&basisOfRecord=HUMAN_OBSERVATION&years=2023,2023&bin=hex&hexSize=64&style=purpleYellow-noborder.poly&country=AR', {
    attribution: '&copy; <a href="https://www.gbif.org/">GBIF</a>',
    opacity: 0.5
});

// Aquí se definen las capas base (solo puede estar seleccionada una a la vez)
var baseLayers = {
    "OpenStreetMap": openStreetMap
};

// Aquí se definen las capas de superposición (pueden estar seleccionadas varias a la vez)
var overlays = {
    "GBIF Occurrences": gbifOccurrences
};

// Se añade el control de capas al mapa
L.control.layers(baseLayers, overlays).addTo(map);
