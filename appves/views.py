from django.shortcuts import redirect, render
from django.urls import reverse_lazy
from django.contrib.auth.decorators import login_required
from django.views.generic import View, ListView, CreateView, UpdateView, DeleteView, DetailView
from .models import Bird, Status, LineaAvistaje
from .forms import BirdForm, LineaAvistajeForm


# Create your views here.
def biomas(request):
    return render(request, 'appves/biomas.html')

def glosario(request):
    return render(request, 'appves/glosario.html')

def lugares(request):
    return render(request, 'appves/lugares.html')

def topografia(request):
    return render(request, 'appves/topografia.html')

def familias(request):
    return render(request, 'appves/familias.html')

def about(request):
    return render(request, 'appves/about.html')

def home(request):
    return render(request, 'appves/home.html')


class ListarBirds(ListView):
    model = Bird
    template_name = 'appves/listar_aves.html'
    queryset = Bird.objects.filter(status=Status.objects.get(id=2) and Status.objects.get(id=1))
    # Se agrega el atributo context_object_name y se asígna un nombre descriptivo para el contexto de las aves
    context_object_name = 'aves'

#@login_required
class CrearAve(CreateView):
    model = Bird
    form_class = BirdForm
    template_name = 'appves/crear_aves.html'
    success_url = reverse_lazy('home/')

class EditarAve(UpdateView):
    model = Bird
    form_class = BirdForm
    template_name = 'appves/editar_ave.html'
    success_url = reverse_lazy('list_birds')

class EliminarAve(DeleteView):
    model = Bird
    #success_url = reverse_lazy('list_birds')

    def post(self, request, pk, *args, **kwargs):
        ave = Bird.objects.get(id=pk)
        ave.status = Status.objects.get(id=3)
        ave.save()
        return redirect('list_birds')

class DetalleAve(DetailView):
    model = Bird
    template_name = 'appves/detalle_ave.html'
    context_object_name = 'ave'


class CargarAveAvistaje(CreateView):
    model = LineaAvistaje
    form_class = LineaAvistajeForm
    template_name = 'appves/ave_avistaje.html'
    success_url = reverse_lazy('home')