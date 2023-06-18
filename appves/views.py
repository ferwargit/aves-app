from django.shortcuts import render
from django.urls import reverse_lazy
from django.contrib.auth.decorators import login_required
from django.views.generic import View, ListView, CreateView, UpdateView
from .models import Bird
from .forms import BirdForm

# Create your views here.
class ListarBirds(ListView):
    model = Bird
    template_name = 'appves/listar_aves.html'
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