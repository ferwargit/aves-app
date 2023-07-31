let especiesDiv;
// Función para mostrar el detalle de la familia seleccionada.
function mostrarDetalle() {
  // Obtener el valor seleccionado en el elemento select
  const select = document.getElementById("familia");
  const detalle = document.getElementById("detalle");
  const detalleNombre = document.getElementById("detalle-nombre");

  if (select.value !== "") {
    detalle.style.display = "block";
    detalleNombre.textContent = select.value;
    obtenerDetalle(select.value);

    // Llamada a la función para obtener el usageKey utilizando async/await
    obtenerUsageKey(select.value)
      .then(obtenerNombresYConteo)
      .then((data) => {
        // Actualizar los marcadores en el mapa con los nuevos datos y pasar el div de especies
        actualizarMarcadores(data, especiesDiv);
      })
      .catch((error) => {
        console.error("Error al obtener datos:", error);
      });
  } else {
    // Ocultar el detalle cuando no hay información seleccionada
    detalle.style.display = "none";
  }
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

function obtenerNombresYConteo(taxonKey) {
  return obtenerObservaciones(taxonKey)
    .then((data) => {
      const { results } = data;
      const speciesCount = {};
      const uniqueSpeciesNames = [];

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

// Función para obtener las observaciones de especies utilizando el taxonKey.
function obtenerObservaciones(taxonKey) {
  //const url = `https://api.gbif.org/v1/occurrence/search?rank=species&taxonKey=${taxonKey}&country=AR&year=2023&limit=300`;
  const url = `https://api.gbif.org/v1/occurrence/search?rank=species&taxonKey=${taxonKey}&country=AR&limit=300`;

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
        const color = speciesColor[name] || "green"; // Si la especie no tiene color asignado, usa verde por defecto

        // Crear un marcador y agregarlo al mapa
        const marker = L.marker([lat, lng], {
          icon: L.divIcon({
            className: "my-marker",
            iconSize: [10, 10],
            html: `<div style="background-color: ${color};"></div>`,
          }),
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

document.addEventListener("DOMContentLoaded", function () {
  // Acceder al div de especies y almacenarlo en una variable
  especiesDiv = document.getElementById("especies");

  // Inicializar el mapa al cargar la página
  inicializarMapa();

  // Evento para mostrar el detalle de la familia seleccionada
  document.getElementById("familia").addEventListener("change", mostrarDetalle);

  // Función para inicializar el mapa.
  function inicializarMapa() {
    map = L.map("map").setView([-41.6118, -62.4173], 5); // Coordenadas del centro de Argentina y nivel de zoom

    // Agregar una capa de mapa base de OpenStreetMap
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);

    markersLayer = L.layerGroup().addTo(map); // Capa para los marcadores
  }
});

// Función para actualizar los marcadores en el mapa con nuevos datos.
function actualizarMarcadores(data) {
  // Comprobar si markersLayer está definido antes de llamar a clearLayers
  if (markersLayer) {
    markersLayer.clearLayers(); // Limpiar los marcadores existentes
  } else {
    console.error("markersLayer no está definido");
  }

  // Iterar sobre los datos de las especies
  data.results.forEach((species) => {
    const lat = species.decimalLatitude;
    const lng = species.decimalLongitude;

    // Establecer el color verde por defecto
    const color = "green";

    // Crear un marcador y agregarlo a la capa de marcadores
    const marker = L.marker([lat, lng], {
      icon: L.divIcon({
        className: "my-marker",
        iconSize: [10, 10],
        html: `<div style="background-color: ${color};"></div>`,
      }),
    });

    markersLayer.addLayer(marker); // Agregar el marcador a la capa de marcadores

    // Ordenar el array de nombres de especies alfabéticamente
    data.uniqueSpeciesNames.sort();

    // Limpiar el contenido previo del div de especies
    especiesDiv.innerHTML = "";

    // Agregar el título
    const titulo = document.createElement("h3");
    titulo.textContent = "Especies de Aves Avistadas";
    especiesDiv.appendChild(titulo);

    // Mostrar los datos
    const especiesList = document.createElement("ul");
    data.uniqueSpeciesNames.forEach((species) => {
      const li = document.createElement("li");
      li.textContent = species;
      especiesList.appendChild(li);
    });

    especiesDiv.appendChild(especiesList); // Agregamos la lista de especies al div
  });
  // Mostrar el contenedor de especies cuando haya información disponible
  especiesDiv.style.display = "block";
}
