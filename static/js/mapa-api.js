var openStreetMap = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

var map = L.map('map').setView([-41.6, -62.0], 5);
openStreetMap.addTo(map);

var gbifOccurrences = L.tileLayer('https://api.gbif.org/v2/map/occurrence/density/{z}/{x}/{y}@1x.png?taxonKey=212&basisOfRecord=HUMAN_OBSERVATION&years=2023,2023&bin=hex&hexSize=64&style=purpleYellow-noborder.poly', {
    attribution: '&copy; <a href="https://www.gbif.org/">GBIF</a>',
    opacity: 0.5
}).addTo(map);
