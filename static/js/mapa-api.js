/**
 * Define las capas del mapa
 * 
 * @type {L.TileLayer}
 */
var openStreetMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

/**
 * Define la capa de imágenes del mundo de Esri
 * 
 * @type {L.TileLayer}
 */
var esriWorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: '&copy; <a href="https://www.esri.com/">Esri</a>'
});

/**
 * Inicializa el mapa con una capa
 * 
 * @type {L.Map}
 */
var map = L.map('map', {
    layers: [openStreetMap]
}).setView([-41.6, -62.0], 5);

/**
 * Añade la capa de ocurrencias de GBIF al mapa
 * 
 * @type {L.TileLayer}
 */
var gbifOccurrences = L.tileLayer('https://api.gbif.org/v2/map/occurrence/density/{z}/{x}/{y}@1x.png?taxonKey=212&basisOfRecord=HUMAN_OBSERVATION&years=2022,2023&bin=hex&hexSize=64&style=purpleYellow-noborder.poly', {
    attribution: '&copy; <a href="https://www.gbif.org/">GBIF</a>',
    opacity: 0.5
}).addTo(map);
