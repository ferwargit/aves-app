var openStreetMap = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});


// var mapboxStreet = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibGVhZmxldCIsImEiOiJjaXVza3E2NzAwMHZtMnRtNnljbXc2bnA0In0.ilRuezYidC-8Ah9Bq6USDw', {
//     maxZoom: 19,
//     id: 'mapbox/streets-v11',
//     tileSize: 512,
//     zoomOffset: -1,
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://mapbox.com">MapBox</a>'
// });

var stamenToner = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.png', {
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    subdomains: 'abcd',
    minZoom: 0,
    maxZoom: 20,
    ext: 'png'
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
    "OpenStreetMap": openStreetMap,
    // "Mapbox Street": mapboxStreet,
    "Stamen Toner": stamenToner
};


// Aquí se definen las capas de superposición (pueden estar seleccionadas varias a la vez)
var overlays = {
    "GBIF Occurrences": gbifOccurrences
};

// Se añade el control de capas al mapa
L.control.layers(baseLayers, overlays).addTo(map);
