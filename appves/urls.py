from django.urls import path

from appves import views
from .views import CargarAveAvistaje, CrearAve, DetalleAve, EditarAve, EliminarAve, ListarBirds, DetalleAvistaje


urlpatterns = [
    
    path('', views.home, name='home'),
    path('about/', views.about, name='about'),
    path('biomas/', views.biomas, name='biomas'),
    path('glosario/', views.glosario, name='glosario'),
    path('lugares/', views.lugares, name='lugares'),
    path('topografia/', views.topografia, name='topografia'),
    path('familias/', views.familias, name='familias'),
    path('search_ave/', views.buscar_ave, name='buscar_ave'),

    path('listar/', ListarBirds.as_view(), name='list_birds'),
    path('crear/', CrearAve.as_view(), name='create_bird'),
    path('editar/<int:pk>', EditarAve.as_view(), name='edit_bird'),
    path('eliminar/<int:pk>', EliminarAve.as_view(), name='delete_bird'),
    path('detalle/<int:pk>', DetalleAve.as_view(), name='detail_birds'),
    path('charge_ave/<int:pk>', CargarAveAvistaje.as_view(), name='cargar_ave_avistaje'),
    path('detalle_avistaje/<int:pk>', DetalleAvistaje.as_view(), name='ver_avistaje'),

]