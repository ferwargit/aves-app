from django.urls import path
from django.contrib.auth.decorators import login_required

from appves import views
from .views import CargarAveAvistaje, CrearAve, DetalleAve, EditarAve, EliminarAve, ListarBirds, DetalleAvistaje, EliminarLineaAvistaje


urlpatterns = [
    
    path('', views.home, name='home'),
    path('about/', views.about, name='about'),
    path('biomas/', views.biomas, name='biomas'),
    path('glosario/', views.glosario, name='glosario'),
    path('lugares/', views.lugares, name='lugares'),
    path('topografia/', views.topografia, name='topografia'),
    path('preguntas_frecuentes/', views.preguntas_frecuentes, name='preguntas_frecuentes'),
    path('familias/', views.familias, name='familias'),
    path('search_ave/', views.buscar_ave, name='buscar_ave'),
    path('search/', views.buscar, name='buscador'),
    path('obtener_detalle_familia/', views.obtener_detalle_familia, name='obtener_detalle_familia'),
    path('guia_usuario/', views.guia_usuario, name='guia_usuario'),

    path('listar/', ListarBirds.as_view(), name='list_birds'),
    path('crear/', CrearAve.as_view(), name='create_bird'),
    path('editar/<int:pk>', EditarAve.as_view(), name='edit_bird'),
    path('eliminar/<int:pk>', EliminarAve.as_view(), name='delete_bird'),
    path('detalle/<int:pk>', DetalleAve.as_view(), name='detail_birds'),
    path('charge_ave/<int:pk>', CargarAveAvistaje.as_view(), name='cargar_ave_avistaje'),
    path('detalle_avistaje/<int:pk>', login_required(DetalleAvistaje.as_view()), name='ver_avistaje'),
    path('detalle_avistaje/<int:pk_avi>/eliminar_ave_avistaje/<int:pk>', EliminarLineaAvistaje.as_view(), name='eliminar_linea_avistaje'),

]