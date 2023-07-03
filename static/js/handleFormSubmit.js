function handleFormSubmit(event) {
  console.log('Manejando el envío del formulario');
  event.preventDefault();

  var select = document.getElementById('scientific-name');
  var selectedValue = select.value;

    // Modificar la URL para incluir el valor seleccionado como un parámetro de consulta
    window.location.href = `/get_usage_key/?scientific_name=${selectedValue}`;

  fetch(`https://api.gbif.org/v2/map/occurrence/density/capabilities.json?taxonKey=${selectedValue}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      if (habitatPolygon) {
        habitatPolygon.remove();
      }

      var minLat = data.minLat;
      var maxLat = data.maxLat;
      var minLng = data.minLng;
      var maxLng = data.maxLng;

      habitatPolygon = L.polygon([
        [minLat, minLng],
        [minLat, maxLng],
        [maxLat, maxLng],
        [maxLat, minLng]
      ]).addTo(map);

      map.fitBounds(habitatPolygon.getBounds());
    })
    .catch((error) => {
      console.error(error);
    });

  console.log("El formulario se ha enviado. Valor seleccionado: " + selectedValue);
}
