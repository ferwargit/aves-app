// function initMap() {
//     //var map = L.map('map').setView([-34.6362, -58.5678], 4);
//     map = L.map('map').setView([-43.08574, -60.83348], 4);

//     var tileLayer = L.tileLayer(
//         'https://tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, 
//         attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'})

//     tileLayer.addTo(map);
// }
$(document).ready(function() {
    
    $('[name="ver[]"]').on('change', function(e) {
        farr=[]
        
        $("[name='ver[]']:checked").each(function(){
            arr = []
            var o={}
            $(this).closest('td').siblings().each(function(){
                arr.push($(this).text());
            });
            
            arr.push(this.value.split(', '))
            o = new Object();o.posicion=arr[0]; o.nombre=arr[2]; o.cantidad=arr[3]; o.coor=arr[4];
        
            farr.push(o)
        });
        
        markToMapWithNoti(farr)
    });

    
    var map = null
    var tileLayer = null

    $('input[name=mapa]').on('change', function() {
        var mapDiv = document.getElementById('map')
        
        //intento de tildar todos los checkbox de la lista
        // $('[name="ver[]"]').prop("checked", true);
        // $('[name="ver[]"]').on("click")

        //mapa funcionando
        if ($(this).is(':checked') ) {
            console.log("Checkbox " + $(this).prop("id") +  " (" + $(this).val() + ") => Seleccionado");
            
            map = L.map('map').setView([-43.08574, -60.83348], 4);
            layerGroup = L.layerGroup();
            tileLayer = L.tileLayer(
                'https://tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, 
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'})
        
            tileLayer.addTo(map);

            
            mapDiv.classList.remove('not-visible')
            setTimeout(function(){ map.invalidateSize()}, 400);
        } else {
            console.log("Checkbox " + $(this).prop("id") +  " (" + $(this).val() + ") => Deseleccionado");
            mapDiv.classList.add('not-visible')
            map.remove()
            
        }
    });

    function markToMap(farr){
        arrCoord=[]
        farr.forEach(function(farr) {
            
            
            // console.log(farr.coor)
            //markersMap(farr.coor)
            // L.marker([-32.805744732906874, -62.16064453125001])
            // L.marker(farr.coor).addTo(map)
            console.log(farr)
            arrCoord.push(farr.coor)
            
            
        });
        markersMap(arrCoord)
    }

    function markersMap (coords) {
        // if (map.hasLayer(layerGroup)) {
        //   console.log('already have one, clear it');
        //   layerGroup.clearLayers();

        // } else {
        //   console.log('never have it before');
        // }
        layerGroup.clearLayers();
        coords.forEach(function(coords){
            var marker = L.marker(coords);
            layerGroup.addLayer(marker);
        })
        
        map.addLayer(layerGroup);
      }

    function markToMapWithNoti(farr){
        console.log(farr)
        layerGroup.clearLayers();
        farr.forEach(function(farr) {
            console.log(farr.nombre)
            
            var marker = L.marker(farr.coor).bindPopup('Ave: '+ farr.nombre + '<br>Cantidad: ' + farr.cantidad);
            layerGroup.addLayer(marker);
            
        });
        map.addLayer(layerGroup);
    }
});


