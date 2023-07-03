document.addEventListener("DOMContentLoaded", function () {
  // Obtén el formulario y el campo de selección
  var form = document.querySelector("#my-form");
  var select = document.getElementById("scientific-name");

  // Agrega un evento al formulario cuando se envía
  form.addEventListener("submit", function (event) {
    // Evita que el formulario se envíe de manera predeterminada
    event.preventDefault();

    console.log("El usuario ha hecho clic en el botón de enviar.");

    // Obtén el valor seleccionado del campo de selección
    var scientificName = select.value.replace(/ /g, "%20");

    // Verifica que el valor seleccionado no esté vacío
    if (!scientificName) {
      console.error("El nombre científico está vacío");
      return;
    }

    // Imprime los datos que se van a enviar
    console.log({
      scientific_name: scientificName,
    });

    // Modifica la URL para incluir el valor seleccionado como un parámetro de consulta
    window.location.href = `/get_usage_key/?scientific_name=${scientificName}`;
  });
});
