document.addEventListener("DOMContentLoaded", function () {
  inicializarMapa();
  // Realiza otras inicializaciones aquí
});

// Variables globales
let map;
let markersLayer;
// Función para mostrar el detalle de la familia seleccionada.
function mostrarDetalle() {
  var select = document.getElementById("familia");
  var detalle = document.getElementById("detalle");
  var detalleNombre = document.getElementById("detalle-nombre");

  if (select.value !== "") {
    detalle.style.display = "block";
    detalleNombre.textContent = select.value;
    obtenerDetalle(select.value);
    // Llamada a la función para obtener el usageKey utilizando async/await
    obtenerUsageKey(select.value)
      .then((taxonKey) => {
        return obtenerNombresYConteo(taxonKey);
      })
      .then((data) => {
        // Actualizar los marcadores en el mapa con los nuevos datos
        actualizarMarcadores(data);
      })
      .catch((error) => {
        console.error("Error al obtener datos:", error);
      });
  }
}

// Función para inicializar el mapa.
function inicializarMapa() {
  map = L.map("map").setView([-41.6118, -62.4173], 5); // Coordenadas del centro de Argentina y nivel de zoom

  // Agregar una capa de mapa base (puedes usar otras capas disponibles)
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
  }).addTo(map);

  markersLayer = L.layerGroup().addTo(map); // Capa para los marcadores
}

// Función para actualizar los marcadores en el mapa con nuevos datos.
function actualizarMarcadores(data) {
  // Comprobar si markersLayer está definido antes de llamar a clearLayers
  if (markersLayer) {
    markersLayer.clearLayers(); // Limpiar los marcadores existentes
  } else {
    console.error("markersLayer no está definido");
  }

  // Diccionario para mapear el nombre de la especie con un color específico
  const speciesColor = {
    "Cathartes aura": "red",
    "Cathartes burrovianus": "blue",
    "Coragyps atratus": "yellow",
    "Sarcoramphus papa": "orange",
    "Vultur gryphus": "purple",
    // Agrega más especies con sus colores aquí
  };

  // Iterar sobre los datos de las especies
  data.results.forEach((species) => {
    const lat = species.decimalLatitude;
    const lng = species.decimalLongitude;
    const name = species.species;
    const color = speciesColor[name] || "green"; // Si la especie no tiene color asignado, usar azul por defecto

    // Crear un marcador y agregarlo a la capa de marcadores
    const marker = L.marker([lat, lng], {
      icon: L.divIcon({
        className: "my-marker",
        iconSize: [10, 10],
        html: `<div style="background-color: ${color};"></div>`,
      }),
    });

    markersLayer.addLayer(marker); // Agregar el marcador a la capa de marcadores
    // map.addLayer(markersLayer); // Asegúrate de que la capa de marcadores se agrega al mapa
  });
}

// Función para obtener el detalle de la familia.
function obtenerDetalle(familia) {
  const url = `/obtener_detalle_familia?nombre_familia=${familia}`;
  fetch(url)
    .then((response) => {
      // Verificar si la respuesta es exitosa (código de estado 200) y si el tipo de contenido es JSON
      if (
        !response.ok ||
        response.headers.get("content-type") !== "application/json"
      ) {
        throw new Error("Respuesta no válida desde el servidor");
      }
      return response.json();
    })

    .then((data) => {
      var detalleNombre = document.getElementById("detalle-nombre");
      var detalleDescripcion = document.getElementById("detalle-descripcion");

      detalleNombre.textContent = data.nombre;
      detalleDescripcion.textContent = data.descripcion;
    })
    .catch((error) => {
      console.error("Error al obtener detalle:", error);
    });
}

// Función para obtener el usageKey de la familia desde la API utilizando async/await.
async function obtenerUsageKey(familia) {
  const url = `https://api.gbif.org/v1/species/match?rank=family&name=${encodeURIComponent(
    familia
  )}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    const taxonKey = data.usageKey;
    console.log("TaxonKey de", familia, ":", taxonKey);
    return taxonKey; // Devolver el taxonKey para que esté disponible en el llamado a obtenerUsageKey
  } catch (error) {
    console.error("Error al obtener taxonKey:", error);
    throw error; // Lanzar el error para manejarlo en el llamado a obtenerUsageKey
  }
}

// Función para obtener las observaciones de especies utilizando el taxonKey.
function obtenerObservaciones(taxonKey) {
  const url = `https://api.gbif.org/v1/occurrence/search?rank=species&taxonKey=${taxonKey}&country=AR&year=2023&limit=300`;

  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data); // Verificar los datos recibidos de la API

      // Diccionario para mapear el nombre de la especie con un color específico
      const speciesColor = {
        "Cathartes aura": "red",
        "Cathartes burrovianus": "blue",
        "Coragyps atratus": "yellow",
        "Sarcoramphus papa": "orange",
        "Vultur gryphus": "purple",
        // Agrega más especies con sus colores aquí
      };

      // Iterar sobre los datos de las especies
      data.results.forEach((species) => {
        const lat = species.decimalLatitude;
        console.log("lat: ", lat);
        const lng = species.decimalLongitude;
        console.log("lng: ", lng);
        const name = species.species;
        console.log("name: ", name);
        const color = speciesColor[name] || "green"; // Si la especie no tiene color asignado, usa green por defecto

        // Crear un marcador y agregarlo al mapa
        const marker = L.marker([lat, lng], {
          icon: L.divIcon({
            className: "my-marker",
            iconSize: [10, 10],
            html: `<div style="background-color: ${color};"></div>`,
          }),
          // }).addTo(map);
        });
        markersLayer.addLayer(marker); // Agregar el marcador a la capa de marcadores
      });

      return data; // Devolvemos los datos obtenidos de la API
    })
    .catch((error) => {
      console.error("Error al obtener observaciones:", error);
      throw error; // Lanzamos el error para que pueda ser capturado en la función mostrarDetalle si es necesario
    });
}

function obtenerNombresYConteo(taxonKey) {
  return obtenerObservaciones(taxonKey)
    .then((data) => {
      const { results } = data;
      const speciesCount = {};
      const uniqueSpeciesNames = [];

      // Diccionario para mapear el nombre de la especie con un color específico
      const speciesColor = {
        "Cathartes aura": "red",
        "Cathartes burrovianus": "blue",
        "Coragyps atratus": "yellow",
        "Sarcoramphus papa": "orange",
        "Vultur gryphus": "purple",
        // Agrega más especies con sus colores aquí
        // Agrega más especies con sus colores aquí
      };

      results.forEach((species) => {
        const name = species.species;
        if (name) {
          speciesCount[name] = (speciesCount[name] || 0) + 1;
          if (!uniqueSpeciesNames.includes(name)) {
            uniqueSpeciesNames.push(name);
          }
        }
      });

      console.log("Nombres de especies únicos:", uniqueSpeciesNames);
      console.log("Conteo de cada especie:", speciesCount);

      // Devolvemos los datos adicionales junto con los datos originales
      return { ...data, uniqueSpeciesNames, speciesCount };
    })
    .catch((error) => {
      console.error("Error al obtener nombres y conteo:", error);
      throw error;
    });
}
