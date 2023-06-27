from django.shortcuts import render
from .models import Location
import folium

# Create your views here.
def map(request):
    locations = Location.objects.all()
    # El zoom_start es la cantidad de zoom que tiene el mapa al cargar
    # puede ser cualquier numero entero entre 0 y 18.
    # El location es la ubicacion inicial del mapa
    initialMap = folium.Map(location=[-34.6362,-58.5678], zoom_start=5)

    initialMap.add_child(folium.ClickForMarker(popup="Waypoint"))
    initialMap.add_child(folium.LatLngPopup())
    # for i in initialMap._children:
    #     print(input(i))
    
    # print(initialMap.add_child(folium.LatLngPopup()))
    # Agregar un marcador de prueba
    # folium.Marker([-35.6362, -57.5678], popup="Test Marker").add_to(initialMap)

    for location in locations:
        coordinates = (location.latitude, location.longitude)
        # folium.Marker(coordinates, popup=location.nameBird).add_to(initialMap)
        folium.Marker(coordinates, popup=location.nameBird + '\n' + location.ecorregion,icon=folium.Icon(color="green")).add_to(initialMap)
        # m.add_child(folium.ClickForMarker(popup="Waypoint"))
    

    context = {'map': initialMap._repr_html_(), 'locations': locations, 'title': 'Mapa de Aves'}
    return render(request, 'map/map.html', context)