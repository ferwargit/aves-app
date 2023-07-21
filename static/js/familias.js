function mostrarDetalle() {
  var select = document.getElementById("familia");
  var detalle = document.getElementById("detalle");
  var detalleNombre = document.getElementById("detalle-nombre");
  var detalleNombreCientifico = document.getElementById(
    "detalle-nombre-cientifico"
  );

  if (select.value !== "") {
    detalle.style.display = "block";
    detalleNombre.textContent = select.value;
    obtenerDetalle(select.value); // Llamada a la función para obtener el nombre y el nombre científico
  } else {
    detalle.style.display = "none";
  }
}

function obtenerDetalle(familia) {
  fetch(`/obtener_detalle_familia?nombre_familia=${familia}`)
    .then((response) => response.json())
    .then((data) => {
      // Establecer el contenido del nombre y nombre científico en los elementos correspondientes
      var detalleNombre = document.getElementById("detalle-nombre");
      var detalleNombreCientifico = document.getElementById(
        "detalle-nombre-cientifico"
      );
      detalleNombre.textContent = data.nombre;
      detalleNombreCientifico.textContent = data.nombre_cientifico;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
