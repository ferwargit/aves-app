from django.urls import path

from user import views
from .views import CrearAvistaje, ListarAvistajes


urlpatterns = [
    path("quienes/", views.quienes, name="quienes"),
    path("create_user/", views.create_user, name="create_user"),
    path("login_user/", views.login_user, name="login"),
    path("logout_user/", views.logout_user, name="logout"),
    path("contacto/", views.contacto, name="contacto"),
    path("create_list/<int:pk>/", CrearAvistaje.as_view(), name="crear_avistaje"),
    path("list_avistaje/", ListarAvistajes.as_view(), name="listar_avistajes"),
]
