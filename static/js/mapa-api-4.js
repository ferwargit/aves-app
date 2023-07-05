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

// Agregar control de capas al mapa
L.control.layers(baseLayers, {}).addTo(map);

document.addEventListener('DOMContentLoaded', function() {
    const aveData = document.getElementById('aveData');
    const nombreCientifico = aveData.getAttribute('data-nombre-cientifico');
    const nombreCientificoFormated = encodeURIComponent(nombreCientifico);

    fetch(`https://api.gbif.org/v1/species/match?name=${nombreCientificoFormated}&country=AR`)
        .then(response => response.json())
        .then(data => {
            var usageKey = data.usageKey;
            return fetch(`https://api.gbif.org/v1/occurrence/search?taxonKey=${usageKey}&country=AR&year=2023`);
        })
        .then(response => response.json())
        .then(data => {
            data.results.forEach(observation => {
                if (observation.decimalLatitude && observation.decimalLongitude) {
                    // Crea un nuevo marcador
                    var marker = L.marker([observation.decimalLatitude, observation.decimalLongitude]).addTo(map);

                    // Verifica si la propiedad extensions existe y tiene al menos un objeto dentro
                    if (observation.extensions && observation.extensions["http://rs.gbif.org/terms/1.0/Multimedia"] && observation.extensions["http://rs.gbif.org/terms/1.0/Multimedia"].length > 0) {
                        var multimedia = observation.extensions["http://rs.gbif.org/terms/1.0/Multimedia"][0];
                        var photoLink = multimedia["http://purl.org/dc/terms/identifier"];
                        var place = observation.stateProvince;

                        var eventDate = observation.eventDate;
                        let eventDateObj = new Date(eventDate);
                        let formattedDate = `${eventDateObj.getDate()}-${eventDateObj.getMonth() + 1}-${eventDateObj.getFullYear()}`;

                        var eventTime = observation.eventTime;
                        var timeWithoutZone = eventTime.split('-')[0]; // Ignorar la zona horaria
                        var formattedTime = moment(timeWithoutZone, "HH:mm:ss").format('HH:mm');


                        var latitude = observation.decimalLatitude;
                        var longitude = observation.decimalLongitude;
                        var photoAuthor = multimedia["http://purl.org/dc/terms/creator"];

                        var popupContent = `
                        <p><a href="${photoLink}" target="_blank">Ver foto</a></p>
                        <p><strong>Lugar:</strong> ${place}</p>
                        
                        <p><strong>Fecha:</strong> ${formattedDate}</p>
                        
                        <p><strong>Hora:</strong> ${formattedTime}</p>
                        <p><strong>Latitud:</strong> ${latitude}</p>
                        <p><strong>Longitud:</strong> ${longitude}</p>
                        <p><strong>Autor:</strong> ${photoAuthor}</p>
                        `;


                        marker.bindPopup(popupContent);
                    }

                }
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
});
