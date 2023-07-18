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

def biomas(request):
    return render(request, "appves/biomas.html")


def glosario(request):
    return render(request, "appves/glosario.html")


def lugares(request):
    return render(request, "appves/lugares.html")


def topografia(request):
    return render(request, "appves/topografia.html")


def familias(request):
    # lee la lista de palabras desde el archivo JSON
    with open('static/json/familias.json', 'r') as f:
        familias = json.load(f)

    familias_ordenadas = sorted(familias)  # Ordena la lista alfabéticamente
    return render(request, "appves/familias.html", {"familias": familias_ordenadas})


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
