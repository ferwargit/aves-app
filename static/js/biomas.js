const map = L.map("map").setView([-43, -62], 4);

const tiles = L.tileLayer(
  "https://wms.ign.gob.ar/geoserver/gwc/service/tms/1.0.0/capabaseargenmap@EPSG%3A3857@png/{z}/{x}/{-y}.png",
  {
    maxZoom: 20,
    minZoom: 1,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }
).addTo(map);

// control that shows state info on hover
const info = L.control();

info.onAdd = function (map) {
  this._div = L.DomUtil.create("div", "info");
  this.update();
  return this._div;
};

//Muestra la leyenda de la esquina superior derecha
info.update = function (props) {
  const contents = props
    ? `<b>${props.name}</b>
				<br />
				<b>Superficie</b>:${props.area} HA<sup></sup>
				<br />
				<b>Áreas protegidas</b>:<br />${props.aps}
				<br />
				<b>Superficies de Áreas protegidas</b>: ${props.superficieap} HA
				<br />
				<b>Porcentaje protegido</b>:${props.protegido}%
				<br />			`
    : "Posiciona el mouse sobre una ecorregión";
  this._div.innerHTML = `<h4>Ecorregiones de Argentina</h4>${contents}`;
};

info.addTo(map);

//Asigna un color para cada ID
function getColor(d) {
  return d == 0
    ? "#7c0902"
    : d == 1
    ? "#ffdab9"
    : d == 2
    ? "#f6b26b"
    : d == 3
    ? "#6aa84f"
    : d == 4
    ? "#ffd966"
    : d == 5
    ? "#40826d"
    : d == 6
    ? "#6fa8dc"
    : d == 7
    ? "#8fce00"
    : d == 8
    ? "#cc3333"
    : d == 9
    ? "#d87d0b"
    : d == 10
    ? "#c4a380"
    : d == 11
    ? "#536878"
    : d == 12
    ? "#ffb90f"
    : d == 13
    ? "#c09ede"
    : d == 14
    ? "#bbebaa"
    : d == 15
    ? "#e2ff07"
    : d == 16
    ? "#26eb9e"
    : d == 17
    ? "#14d3bd"
    : "#000000";
}

// Implementa el estilo de las ecorregiones
function style(feature) {
  return {
    fillColor: getColor(feature.properties.ID),
    weight: 2,
    opacity: 1,
    color: "grey",
    dashArray: "3",
    fillOpacity: 0.7,
  };
}

//Implementa la lógica para resaltar una ecorregión
function highlightFeature(e) {
  const layer = e.target;

  layer.setStyle({
    weight: 5,
    color: "#666",
    dashArray: "",
    fillOpacity: 0.7,
  });

  layer.bringToFront();

  info.update(layer.feature.properties);
}

/* limites ecorregiones */
const geojson = L.geoJson(biomas, {
  style,
  onEachFeature,
}).addTo(map);

function resetHighlight(e) {
  geojson.resetStyle(e.target);
  info.update();
}

function zoomToFeature(e) {
  map.fitBounds(e.target.getBounds());
}

function onEachFeature(feature, layer) {
  layer.on({
    mouseover: highlightFeature,
    mouseout: resetHighlight,
    click: zoomToFeature,
  });
}

//agregamos cuadro de control al mapa
const legend = L.control({ position: "bottomleft" });

legend.onAdd = function (map) {
  const div = L.DomUtil.create("div", "info legend");
  const labels = [];
  const addedRegions = [];

  for (let i = 0; i < biomas.features.length; i++) {
    const region = biomas.features[i].properties;
    const color = getColor(region.ID);

    // Verifica si la región ya fue agregada
    if (!addedRegions.includes(region.ID)) {
      const label = `<div><i style="background:${color}"></i>${region.name}</div>`;
      labels.push(label);
      addedRegions.push(region.ID);
    }
  }

  div.innerHTML = labels.join("");
  return div;
};

legend.addTo(map);

map.attributionControl.addAttribution(
  'Ecorregiones Argentinas <a href="https://www.ign.gob.ar/NuestrasActividades/InformacionGeoespacial/CapasSIG">IGN Instituto Geográfico Nacional</a>'
);
