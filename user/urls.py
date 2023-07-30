from django.urls import path

from user import views
from .views import CrearAvistaje, ListarAvistajes, EliminarAvistaje


urlpatterns = [

    path('quienes/', views.quienes, name='quienes'),
    path('create_user/', views.create_user, name='create_user'),
    path('login_user/', views.login_user, name='login'),
    path('logout_user/', views.logout_user, name='logout'),
    
    path('create_list/<int:pk>', CrearAvistaje.as_view(), name='crear_avistaje'),
    path('list_avistaje/', ListarAvistajes.as_view(), name='listar_avistajes'),
    path('eliminar/<int:pk>', EliminarAvistaje.as_view(), name='eliminar_avistaje'),
    
]
