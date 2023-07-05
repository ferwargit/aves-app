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

// Le tengo que pasar el nombre cientifico de la especie
// https://api.gbif.org/v1/species/match?name=Rhea%20americana
// De aca obtengo el usageKey: 2495165 y luego se lo paso a la url de abajo

var caracara_plancus = L.tileLayer('https://api.gbif.org/v2/map/occurrence/density/{z}/{x}/{y}@1x.png?taxonKey=2480989&basisOfRecord=HUMAN_OBSERVATION&years=2023,2023&bin=hex&hexSize=64&style=red.poly&country=AR', {
    attribution: '&copy; <a href="https://www.gbif.org/">GBIF</a>',
    opacity: 0.5
});

// Aquí se definen las capas base (solo puede estar seleccionada una a la vez)
var baseLayers = {
    "OpenStreetMap": openStreetMap,
    "Stamen Terrain": stamenTerrain,
    "Esri World Imagery": esriWorldImagery,
};

// Aquí se definen las capas de superposición (pueden estar seleccionadas varias a la vez)
var overlays = {
    "Caracara_plancus": caracara_plancus,
};

// Se añade el control de capas al mapa
L.control.layers(baseLayers, overlays).addTo(map);

// Agregar escala al mapa
// L.control.scale().addTo(map);
L.control.scale({ position: 'bottomright' }).addTo(map);
