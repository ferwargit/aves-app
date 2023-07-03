"""
URL configuration for core project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from appves import views as appves
from user import views
from user.views import CrearAvistaje, ListarAvistajes

# Se agrega para que se pueda ver el contenido de la carpeta static
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.contrib.auth.decorators import login_required

# Para poder ver las imagenes en el navegador
from django.conf import settings
from django.conf.urls.static import static

from appves.views import ListarBirds, CrearAve, EditarAve, EliminarAve, DetalleAve, CargarAveAvistaje

urlpatterns = [
    path('admin/', admin.site.urls),
    path('home/', appves.home, name='home'),
    path('about/', appves.about, name='about'),
    path('create_user/', views.crear_cuenta, name='create_user'),
    path('login_user/', views.login_user, name='login'),
    path('logout_user/', views.logout_user, name='logout'),
    path('logeado/', views.logeado, name='logeado'),
    path('create_list/', login_required(CrearAvistaje.as_view()), name='crear_avistaje'),
    path('list_avistaje/', login_required(ListarAvistajes.as_view()), name='listar_avistajes'),
    path('charge_ave/<int:pk>', login_required(CargarAveAvistaje.as_view()), name='cargar_ave_avistaje'),
    path('search_ave/', appves.buscar_ave, name='buscar_ave'),

    path('listar/', ListarBirds.as_view(), name='list_birds'),
    path('crear/', login_required(CrearAve.as_view()), name='create_bird'),
    path('editar/<int:pk>', login_required(EditarAve.as_view()), name='edit_bird'),
    path('eliminar/<int:pk>', login_required(EliminarAve.as_view()), name='delete_bird'),
    path('detalle/<int:pk>', DetalleAve.as_view(), name='detail_birds'),
    
    #se agregan templates Roget 16/6/23
    path('biomas/', appves.biomas, name='biomas'),
    path('glosario/', appves.glosario, name='glosario'),
    path('lugares/', appves.lugares, name='lugares'),
    path('lugares01/', appves.lugares01, name='lugares01'),
    path('topografia/', appves.topografia, name='topografia'),
    path('familias/', appves.familias, name='familias'),
    path('quienes/', views.quienes, name='quienes'),

    path('habitat/', appves.nombre_cientifico, name='nombre_cientifico'),
    path('get_usage_key/', appves.get_usage_key, name='get_usage_key'),
]

# Se agrega para que se pueda ver el contenido de la carpeta static
urlpatterns += staticfiles_urlpatterns()

# Configuracion para poder ver las imagenes en el navegador
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
