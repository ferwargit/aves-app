from typing import Any, Dict
from django.contrib.auth.mixins import LoginRequiredMixin
from django.http import JsonResponse
from django.shortcuts import redirect, render
from django.urls import reverse_lazy
from django.db.models import Q
from django.views.generic import (
    ListView,
    CreateView,
    UpdateView,
    DeleteView,
    DetailView,
)

from .forms import BirdForm, BirdFormFilter, LineaAvistajeForm
from .models import Bird, Status, LineaAvistaje, Family

import os
import json
from django.conf import settings
# import sqlite3

def biomas(request):
    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    json_path = os.path.join(base_dir, 'static', 'json', 'biomas_data.json')
    
    with open(json_path, encoding='utf-8') as json_file:
        biomas_data = json.load(json_file)
    return render(request, "appves/biomas.html", {'biomas_data': biomas_data})


def glosario(request):
    return render(request, "appves/glosario.html")


def lugares(request):
    return render(request, "appves/lugares.html")


def topografia(request):
    return render(request, "appves/topografia.html")


def preguntas_frecuentes(request):
    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    json_path = os.path.join(base_dir, 'static', 'json', 'faq_data.json')
    
    with open(json_path, encoding='utf-8') as json_file:
        faq_data = json.load(json_file)
    
    return render(request, 'appves/preguntas_frecuentes.html', {'faq_data': faq_data})


def familias(request):
    
    familias_ordenadas = Family.objects.all().order_by("familia")

    if familias_ordenadas:
        return render(request, "appves/familias.html", {"familias": familias_ordenadas})
    else:
        familias_ordenadas = []  # O cualquier otra acción que desees realizar cuando no haya datos disponibles

    return render(request, "appves/familias.html", {"familias": familias_ordenadas})

# Devuelve un JSON con los detalles de una familia de aves especificada por el parámetro nombre_familia.
def obtener_detalle_familia(request):
    """
    Recupera los detalles de una familia de aves de la base de datos y los devuelve en formato JSON como respuesta a una solicitud HTTP GET. Si la familia no se encuentra en la base de datos, devuelve valores predeterminados.
    """
    nombre_familia = request.GET.get('nombre_familia')

    try:
        # Intenta obtener un objeto Bird que tenga la familia especificada. Utiliza el método filter para buscar un objeto Bird que tenga la familia que coincide con el nombre proporcionado. Luego, utiliza first() para obtener el primer objeto que coincide o None si no se encuentra ninguna coincidencia.
        bird = Bird.objects.filter(familia__familia=nombre_familia).first()
        # Obtener la descripción de la familia de la tabla appves_family
        familia = Family.objects.filter(familia=nombre_familia).first()
        descripcion = familia.descripcion if familia else 'Descripción no disponible'

        detalle = {
            'nombre': bird.nombre if bird else 'No disponible',
            'nombre_cientifico': bird.nombre_cientifico if bird else 'No disponible',
            'descripcion': descripcion,
        }
    except Bird.DoesNotExist:
        detalle = {
            'nombre': 'No disponible',
            'nombre_cientifico': 'No disponible',
            'descripcion': 'Descripción no disponible',
        }

    return JsonResponse(detalle)


def about(request):
    return render(request, "appves/about.html")


def home(request):
    return render(request, "appves/home.html")

def buscar(request):
    template_name='appves/buscador.html'
    form_class=BirdFormFilter
    form = form_class

    if request.method == 'GET':
        return render(request, template_name, {'form': form})
    is_ajax = request.META.get("HTTP_X_REQUESTED_WITH") == "XMLHttpRequest"
    if is_ajax:
        res = None
        ave = request.POST.get("ave")
        aves= json.loads(ave)
        
        print("------------")
        query=Q()
        query2=Q()
        query2 &=Q()
        print(query2)
        for key, val in aves.items():
            print(f'{key} - {val}')
            if val != '':     
                condicion={f'{key}': val}
                query &=Q(**condicion)
        print(query)
        if query != query2:
            qs = Bird.objects.filter(query)
        else:
            qs=[]
        print(len(qs))
        cant_encontrados = len(qs)
        if len(qs) > 0 and len(ave) > 0:
            data = []
            for ave in qs:
                item = {
                    "pk": ave.pk,
                    "nombre": ave.nombre,
                    "imagen": str(ave.imagen.url),
                    "cantidad": cant_encontrados
                }
                data.append(item)
            res = data
        else:
            res = "No se encuentran aves con estos filtros "
        return JsonResponse({"data": res})
    return JsonResponse({})


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


def guia_usuario(request):
    return render(request, "appves/guia_usuario.html")


class ListarBirds(ListView):
    model = Bird
    template_name = "appves/listar_aves.html"
    context_object_name = "aves"
    paginate_by = 9

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

    def get_initial(self):
        return {"id_avistaje": self.kwargs["pk"]}
    
    def get_success_url(self):
        return reverse_lazy('ver_avistaje', kwargs={'pk':self.get_initial()['id_avistaje']})


class DetalleAvistaje(ListView):
    model = LineaAvistaje
    template_name = 'appves/detalle_avistaje.html'
    context_object_name = 'avistaje'

    def get_initial(self):
        return {'id_avistaje': self.kwargs['pk']}
    
    def get_queryset(self):
        self.queryset = LineaAvistaje.objects.filter(id_avistaje_id= self.kwargs['pk']).filter(activo=True)
        return self.queryset
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['avistaje'] = self.get_queryset()
        context['id_avistaje_context'] = self.get_initial()['id_avistaje']
        return context


class EliminarLineaAvistaje(LoginRequiredMixin, DeleteView):
    model = LineaAvistaje
    # success_url = reverse_lazy("ver_avistaje")

    def get_initial(self):
        print({'id_avistaje': self.kwargs['pk_avi']})
        print({'id_ave_avistaje': self.kwargs['pk']})
        return {'id_avistaje': self.kwargs['pk_avi']}

    def get_success_url(self):
        return reverse_lazy('ver_avistaje', kwargs={'pk':self.get_initial()['id_avistaje']})

    def post(self, request, *args, **kwargs):
        linea_avistaje = self.get_object()
        linea_avistaje.activo = False
        linea_avistaje.save()
        return redirect(self.get_success_url())
    