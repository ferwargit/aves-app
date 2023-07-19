from django.contrib.auth.mixins import LoginRequiredMixin
from django.http import JsonResponse
from django.shortcuts import render
from django.urls import reverse_lazy
from django.views.generic import (
    ListView,
    CreateView,
    UpdateView,
    DeleteView,
    DetailView,
)

from .forms import BirdForm, LineaAvistajeForm
from .models import Bird, Status, LineaAvistaje
import json
from django.conf import settings
import sqlite3

def biomas(request):
    return render(request, "appves/biomas.html")


def glosario(request):
    return render(request, "appves/glosario.html")


def lugares(request):
    return render(request, "appves/lugares.html")


def topografia(request):
    return render(request, "appves/topografia.html")


def preguntas_frecuentes(request):
    return render(request, "appves/preguntas_frecuentes.html")


def familias(request):
    # Obtiene la ruta de la base de datos desde la configuración de Django
    ruta_basededatos = settings.DATABASES['default']['NAME']

    # Establece conexión con la base de datos
    connection = sqlite3.connect(ruta_basededatos)
    cursor = connection.cursor()

    # Obtener las familias desde la tabla appves_family
    cursor.execute("SELECT familia FROM appves_family")
    result_set = cursor.fetchall()

    # Generar la lista de familias a partir de los resultados de la consulta
    familias_ordenadas = [row[0] for row in result_set]
    familias_ordenadas.sort()  # Ordenar alfabéticamente

    if familias_ordenadas:
        return render(request, "appves/familias.html", {"familias": familias_ordenadas})
    else:
        familias_ordenadas = []  # O cualquier otra acción que desees realizar cuando no haya datos disponibles

    return render(request, "appves/familias.html", {"familias": familias_ordenadas})


def obtener_detalle_familia(request):
    nombre_familia = request.GET.get('nombre_familia')

    try:
        bird = Bird.objects.filter(familia__familia=nombre_familia).first()
        detalle = {
            'nombre': bird.nombre if bird else 'No disponible',
            'nombre_cientifico': bird.nombre_cientifico if bird else 'No disponible',
        }
    except Bird.DoesNotExist:
        detalle = {
            'nombre': 'No disponible',
            'nombre_cientifico': 'No disponible',
        }

    return JsonResponse(detalle)


def about(request):
    return render(request, "appves/about.html")


def home(request):
    return render(request, "appves/home.html")


def buscar_ave(request):
    is_ajax = request.META.get("HTTP_X_REQUESTED_WITH") == "XMLHttpRequest"
    if is_ajax:
        res = None
        ave = request.POST.get("ave")
        qs = Bird.objects.filter(nombre__icontains=ave)
        if len(qs) > 0 and len(ave) > 0:
            data = []
            for ave in qs:
                item = {
                    "pk": ave.pk,
                    "nombre": ave.nombre,
                    "imagen": str(ave.imagen.url),
                }
                data.append(item)
            res = data
        else:
            res = "No se encuentra ave... "
        return JsonResponse({"data": res})
    return JsonResponse({})


class ListarBirds(ListView):
    model = Bird
    template_name = "appves/listar_aves.html"
    context_object_name = "aves"

    def get_queryset(self):
        queryset = super().get_queryset()
        return sorted(queryset, key=lambda bird: bird.nombre.lower().replace("ñ", "n"))


class CrearAve(LoginRequiredMixin, CreateView):
    model = Bird
    form_class = BirdForm
    template_name = "appves/crear_aves.html"
    success_url = reverse_lazy("list_birds")


class EditarAve(LoginRequiredMixin, UpdateView):
    model = Bird
    form_class = BirdForm
    template_name = "appves/editar_ave.html"
    success_url = reverse_lazy("list_birds")


class EliminarAve(LoginRequiredMixin, DeleteView):
    model = Bird
    success_url = reverse_lazy("list_birds")

    def delete(self, request, *args, **kwargs):
        ave = self.get_object()
        ave.status = Status.objects.get(id=3)
        ave.save()
        return self.redirect_to_success_url()


class DetalleAve(DetailView):
    model = Bird
    template_name = "appves/detalle_ave.html"
    context_object_name = "ave"


class CargarAveAvistaje(LoginRequiredMixin, CreateView):
    model = LineaAvistaje
    form_class = LineaAvistajeForm
    template_name = "appves/ave_avistaje.html"
    success_url = reverse_lazy("home")

    def get_initial(self):
        return {"id_avistaje": self.kwargs["pk"]}


class DetalleAvistaje(ListView):
    model = LineaAvistaje
    template_name = 'appves/detalle_avistaje.html'
    context_object_name = 'avistaje'

    def get_initial(self):
            return {'id_avistaje': self.kwargs['pk']}
    
    def get_queryset(self):
        self.queryset = LineaAvistaje.objects.filter(id_avistaje_id= self.kwargs['pk'])
        return self.queryset
