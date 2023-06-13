from django.shortcuts import render
from django.urls import reverse_lazy
from django.views.generic import View, ListView, CreateView
from .models import Bird
from .forms import BirdForm

# Create your views here.
class ListarBirds(ListView):
    model = Bird
    template_name = 'appves/listar_aves.html'

class CrearAve(CreateView):
    model = Bird
    form_class = BirdForm
    template_name = 'appves/crear_aves.html'
    success_url = reverse_lazy('home/')
