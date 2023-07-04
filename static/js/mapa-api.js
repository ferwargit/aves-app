

var openStreetMap = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});


var stamenToner = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.{ext}', {
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    subdomains: 'abcd',
    minZoom: 0,
    maxZoom: 20,
    ext: 'png'
});

var stamenWatercolor = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    subdomains: 'abcd',
    minZoom: 1,
    maxZoom: 16,
    ext: 'jpg'
});

var stamenTerrain = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.{ext}', {
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    subdomains: 'abcd',
    minZoom: 0,
    maxZoom: 18,
    ext: 'png'
});


var esriWorldStreetMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri'
});

var esriWorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri'
});

var esriWorldTopoMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri'
});

var esriWorldPhysicalMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Physical_Map/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri'
});

var esriWorldShadedRelief = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri'
});

var esriWorldTerrainBase = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer/tile/{z}/{y}/{x}', {
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

var todas_las_aves = L.tileLayer('https://api.gbif.org/v2/map/occurrence/density/{z}/{x}/{y}@1x.png?taxonKey=212&basisOfRecord=HUMAN_OBSERVATION&years=2023,2023&bin=hex&hexSize=64&style=purpleYellow-noborder.poly&country=AR', {
    attribution: '&copy; <a href="https://www.gbif.org/">GBIF</a>',
    opacity: 0.5
});

var caracara_plancus = L.tileLayer('https://api.gbif.org/v2/map/occurrence/density/{z}/{x}/{y}@1x.png?taxonKey=2480989&basisOfRecord=HUMAN_OBSERVATION&years=2023,2023&bin=hex&hexSize=64&style=red.poly&country=AR', {
    attribution: '&copy; <a href="https://www.gbif.org/">GBIF</a>',
    opacity: 0.5
});

var rhea_americana = L.tileLayer('https://api.gbif.org/v2/map/occurrence/density/{z}/{x}/{y}@1x.png?taxonKey=2495165&basisOfRecord=HUMAN_OBSERVATION&years=2023,2023&bin=hex&hexSize=64&style=green.poly&country=AR', {
    attribution: '&copy; <a href="https://www.gbif.org/">GBIF</a>',
    opacity: 0.5
});

var asio_clamator = L.tileLayer('https://api.gbif.org/v2/map/occurrence/density/{z}/{x}/{y}@1x.png?taxonKey=4843115&basisOfRecord=HUMAN_OBSERVATION&years=2023,2023&bin=hex&hexSize=64&style=iNaturalist.poly&country=AR', {
    attribution: '&copy; <a href="https://www.gbif.org/">GBIF</a>',
    opacity: 0.5
});

// Aquí se definen las capas base (solo puede estar seleccionada una a la vez)
var baseLayers = {
    "OpenStreetMap": openStreetMap,
    "Stamen Toner": stamenToner,
    "Stamen Watercolor": stamenWatercolor,
    "Stamen Terrain": stamenTerrain,
    "Esri World Street Map": esriWorldStreetMap,
    "Esri World Imagery": esriWorldImagery,
    "Esri World Topo Map": esriWorldTopoMap,
    "Esri World Physical Map": esriWorldPhysicalMap,
    "Esri World Shaded Relief": esriWorldShadedRelief,
    "Esri World Terrain Base": esriWorldTerrainBase
};


// Aquí se definen las capas de superposición (pueden estar seleccionadas varias a la vez)
var overlays = {
    // "GBIF Occurrences": gbifOccurrences,
    // "Todas las Aves": todas_las_aves,
    "Caracara_plancus": caracara_plancus,
    // "Rhea_americana": rhea_americana,
    // "Asio_clamator": asio_clamator
};

// Se añade el control de capas al mapa
L.control.layers(baseLayers, overlays).addTo(map);

// Agregar escala al mapa
// L.control.scale().addTo(map);
L.control.scale({ position: 'bottomright' }).addTo(map);


// L.control.coordinates({
// 	// position:"bottomleft", //optional default "bootomright"
// 	position:"topleft", //optional default "bootomright"
// 	// decimals:2, //optional default 4
// 	// decimalSeperator:".", //optional default "."
//     useDMS:true, //optional default false
// 	// labelTemplateLat:"Latitude: {y}", //optional default "Lat: {y}"
// 	labelTemplateLat:"{y}", //optional default "Lat: {y}"
// 	// labelTemplateLng:"Longitude: {x}", //optional default "Lng: {x}"
// 	labelTemplateLng:"{x}", //optional default "Lng: {x}"
// 	// enableUserInput:true, //optional default true
	
// 	useLatLngOrder: true, //ordering of labels, default false-> lng-lat
// 	// markerType: L.marker, //optional default L.marker
// 	// markerProps: {}, //optional default {},
// 	// labelFormatterLng : function(lng){return lng+" lng"}, //optional default none,
// 	// labelFormatterLat : function(lat){return lat+" lat"}, //optional default none
// 	// customLabelFcn: function(latLonObj, opts) { "Geohash: " + encodeGeoHash(latLonObj.lat, latLonObj.lng)} //optional default none
// }).addTo(map);

// Puntos cardinales
// L.control.compass({autoActive: true, showDigit: true}).addTo(map);