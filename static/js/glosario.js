fetch(GLOSARIO_JSON_URL)
  .then((response) => response.json())
  .then((data) => {
    // Ordenar los datos alfabéticamente por término
    data.glosario.sort((a, b) => a.termino.localeCompare(b.termino));

    // Mostrar los datos en el HTML
    const glosarioList = document.getElementById("glosario-list");
    data.glosario.forEach((item) => {
      const li = document.createElement("li");
      li.innerHTML = `<strong>${item.termino}:</strong> ${item.definicion}`;
      glosarioList.appendChild(li);
    });
  });
