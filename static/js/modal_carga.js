document.addEventListener("DOMContentLoaded", function () {
  Swal.fire({
    title: "Loading...",
    text: "Please wait",
    icon: "/static/images/loading.gif",
    button: false,
    closeOnClickOutside: false,
    closeOnEsc: false,
  });
  window.addEventListener("load", function () {
    Swal.close();
  });
});
