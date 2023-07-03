document.addEventListener('DOMContentLoaded', function() {
    function loadBaseMap() {
        // Código para cargar el mapa base
        var map = L.map('map').setView([-41.6, -62.0], 5);

        L.tileLayer(
            'https://tile.openstreetmap.org/{z}/{x}/{y}.png', 
            { maxZoom: 19, 
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(map);
    }

    loadBaseMap();
});
