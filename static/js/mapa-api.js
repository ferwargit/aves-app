// Crear capa de mapa base usando OpenStreetMap
var openStreetMap = L.tileLayer(
  "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
  {
    attribution:
      '&copy; Distribución de especies <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }
);

// Crear capa de mapa base usando Stamen Terrain
// var stamenTerrain = L.tileLayer(
//   "https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.{ext}",
//   {
//     attribution:
//       'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
//     subdomains: "abcd",
//     minZoom: 0,
//     maxZoom: 18,
//     ext: "png",
//   }
// );

const satelital = L.tileLayer('https://server.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
				maxZoom: 19,
				attribution: 'Imágenes satelitales © Esri'
				});

// var esriWorldImagery = L.tileLayer(
//   "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
//   {
//     attribution: "Tiles &copy; Esri",
//   }
// );

// Crear el mapa
var map = L.map("map", {
  center: [-41.6, -62.0],
  zoom: 4,
  layers: [openStreetMap], // La primera capa base que se muestra por defecto
});

// Capas base disponibles
var baseLayers = {
  OpenStreetMap: openStreetMap,
  'Mapa Satelital': satelital,
  // "Esri World Imagery": esriWorldImagery,
};

// Agregar control de capas al mapa
// L.control.layers(baseLayers, {}).addTo(map);

// Evento que se activa cuando el botón 'nav-mapa' es clickeado
var navMapa = document.getElementById("nav-mapa");
navMapa.addEventListener("click", function () {
  map.invalidateSize();
  console.log("Mapa actualizado");
});

var markers;
var markersLayer2;
var densitiesLayer;
var densitiesLayerControl; // Variable para almacenar el control de capas de densidades
var rectangleOverlay;
var regionControl; // Variable para almacenar el control de capas de regiones

document.addEventListener("DOMContentLoaded", function () {
  // Obtener el nombre científico de la especie
  const aveData = document.getElementById("aveData");
  const nombreCientifico = aveData.getAttribute("data-nombre-cientifico");
  const nombreCientificoFormated = encodeURIComponent(nombreCientifico);

  // Obtener datos de la especie desde la API de GBIF
  fetch(
    `https://api.gbif.org/v1/species/match?name=${nombreCientificoFormated}&country=AR`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error al obtener los datos de GBIF.");
      }
      return response.json();
    })
    .then((data) => {
      var usageKey = data.usageKey;

      obtenerRegistrosGBIF(usageKey, 0, 300); // Llamada para obtener los primeros 300 registros
      obtenerRegistrosGBIF(usageKey, 300, 300); // Llamada para obtener los registros restantes
      obtenerRegistrosGBIF(usageKey, 600, 300); // Llamada para obtener los registros restantes
      obtenerRegistrosGBIF(usageKey, 900, 300); // Llamada para obtener los registros restantes

      // Capa de densidades (overlay) usando datos de GBIF
      densitiesLayer = L.tileLayer(
        `https://api.gbif.org/v2/map/occurrence/density/{z}/{x}/{y}@1x.png?taxonKey=${usageKey}&basisOfRecord=HUMAN_OBSERVATION&years=2023,2023&bin=hex&hexSize=64&style=red.poly&country=AR`,
        {
          attribution: '&copy; <a href="https://www.gbif.org/">GBIF</a>',
          opacity: 0.5,
        }
      );

      // Capa de marcadores (overlay) usando datos de GBIF
      markers = L.markerClusterGroup();
      map.addLayer(markers);

      markersLayer2 = L.layerGroup();

    });
});

function obtenerRegistrosGBIF(usageKey, offset, limit) {
  fetch(
    `https://api.gbif.org/v1/occurrence/search?taxonKey=${usageKey}&country=AR&offset=${offset}&limit=${limit}`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error al obtener los datos de GBIF.");
      }
      return response.json();
    })
    .then((data) => {
      data.results.forEach((observation) => {
        if (observation.decimalLatitude && observation.decimalLongitude) {
          var marker = L.marker(
            [observation.decimalLatitude, observation.decimalLongitude]
            //{
            //  color: "blue",
            //  fillColor: "#f03",
            //  fillOpacity: 0.5,
            //  radius: 500,
            //}
          );

          if (
            observation.extensions &&
            observation.extensions["http://rs.gbif.org/terms/1.0/Multimedia"] &&
            observation.extensions["http://rs.gbif.org/terms/1.0/Multimedia"]
              .length > 0
          ) {
            var multimedia =
              observation.extensions[
                "http://rs.gbif.org/terms/1.0/Multimedia"
              ][0];
            var photoLink = multimedia["http://purl.org/dc/terms/identifier"];
            var place = observation.stateProvince;
            var eventDate = observation.eventDate;
            let eventDateObj = new Date(eventDate);
            let formattedDate = `${eventDateObj.getDate()}-${
              eventDateObj.getMonth() + 1
            }-${eventDateObj.getFullYear()}`;
            var eventTime = observation.eventTime;
            var timeWithoutZone = eventTime?.split("-")[0];
            var formattedTime = moment(timeWithoutZone, "HH:mm:ss").format(
              "HH:mm"
            );
            var latitude = observation.decimalLatitude;
            var longitude = observation.decimalLongitude;
            var photoAuthor = multimedia["http://purl.org/dc/terms/creator"];

            var popupContent = `
                              <p><a href="${photoLink}" target="_blank">Archivo multimedia</a></p>
                              <p><strong>Lugar:</strong> ${place}</p>
                              <p><strong>Fecha:</strong> ${formattedDate}</p>
                              <p><strong>Hora:</strong> ${formattedTime}</p>
                              <p><strong>Latitud:</strong> ${latitude}</p>
                              <p><strong>Longitud:</strong> ${longitude}</p>
                              <p><strong>Autor:</strong> ${photoAuthor}</p>
                              `;

            marker.bindPopup(popupContent);
          } else {
            // Si no hay datos multimedia, mostramos un mensaje en el popup
            var popupContent =
              "<p>No hay datos disponibles para esta observación.</p>";
            marker.bindPopup(popupContent);
          }
          // Agregar el marcador a la capa de marcadores (markersLayer2)
          marker.addTo(markers.addLayers([markersLayer2]));
          
        }
      });
      // Capa de densidades y marcadores ya cargadas, agregar capa de región
      fetch(
        `https://api.gbif.org/v2/map/occurrence/density/capabilities.json?taxonKey=${usageKey}&fromDate=2023-01&toDate=2023-06&country=AR`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("Error al obtener los datos de GBIF.");
          }
          return response.json();
        })
        .then((data) => {
          var minLat = data.minLat;
          var maxLat = data.maxLat;
          var minLng = data.minLng;
          var maxLng = data.maxLng;

          rectangleOverlay = L.rectangle(
            [
              [minLat, minLng],
              [maxLat, maxLng],
            ],
            {
              color: "orange",
              weight: 2,
            }
          );

          // Agregar el control de capas "Densidades" y "Región" al mapa si no han sido agregados aún
          if (!densitiesLayerControl) {
            densitiesLayerControl = L.control.layers(baseLayers, {
              Densidades: densitiesLayer,
              Región: rectangleOverlay,
            }).addTo(map);
          }

          densitiesLayer.setZIndex(3);
          markers.setZIndex(1);
          
        });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}