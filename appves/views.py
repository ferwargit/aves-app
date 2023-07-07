from django.contrib.auth.mixins import LoginRequiredMixin
from django.http import JsonResponse
from django.shortcuts import render
from django.urls import reverse_lazy
from django.views.generic import ListView, CreateView, UpdateView, DeleteView, DetailView

from .forms import BirdForm, LineaAvistajeForm
from .models import Bird, Status, LineaAvistaje


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
    palabras = [
    "Tinamidae",
    "Rheidae",
    "Cracidae",
    "Struthionidae",
    "Phoenicopteridae",
    "Anhingidae",
    "Ardeidae",
    "Threskiornithidae",
    "Pandionidae",
    "Accipitridae",
    "Falconidae",
    "Odontophoridae",
    "Numididae",
    "Phasianidae",
    "Podicipedidae",
    "Anatidae",
    "Diomedeidae",
    "Procellariidae",
    "Sulidae",
    "Phaethontidae",
    "Cathartidae",
    "Fregatidae",
    "Phalacrocoracidae",
    "Charadriidae",
    "Recurvirostridae",
    "Rostratulidae",
    "Haematopodidae",
    "Scolopacidae",
    "Laridae",
    "Columbidae",
    "Psittacidae",
    "Trochilidae",
    "Apodidae",
    "Trogonidae",
    "Bucconidae",
    "Momotidae",
    "Galbulidae",
    "Ramphastidae",
    "Podargidae",
    "Cuculidae",
    "Strigidae",
    "Caprimulgidae",
    "Nyctibiidae",
    "Aegothelidae",
    "Hemiprocnidae",
    "Coliidae",
    "Coraciidae",
    "Brachypteraciidae",
    "Alcedinidae",
    "Megalaimidae",
    "Meropidae",
    "Upupidae",
    "Bucerotidae",
    "Phoeniculidae",
    ]

    palabras_ordenadas = sorted(palabras)  # Ordena la lista alfabéticamente
    return render(request, 'appves/familias.html', {'palabras': palabras_ordenadas})

def about(request):
    return render(request, 'appves/about.html')

def home(request):
    return render(request, 'appves/home.html')

def buscar_ave(request):
    is_ajax = request.META.get('HTTP_X_REQUESTED_WITH') == 'XMLHttpRequest'
    if is_ajax:
        res = None
        ave = request.POST.get('ave')
        qs = Bird.objects.filter(nombre__icontains=ave)
        if len(qs) > 0 and len(ave) > 0:
            data = []
            for ave in qs:
                item = {
                    'pk': ave.pk,
                    'nombre': ave.nombre,
                    'imagen': str(ave.imagen.url)
                }
                data.append(item)
            res = data
        else:
            res = 'No se encuentra ave... '
        return JsonResponse({'data': res})
    return JsonResponse({})


class ListarBirds(ListView):
    model = Bird
    template_name = 'appves/listar_aves.html'
    context_object_name = 'aves'

    #  Se redefine el método get_queryset para que el listado de aves se muestre ordenado alfabéticamente por nombre
    def get_queryset(self):
        queryset = super().get_queryset()
        return queryset.order_by('nombre')


class CrearAve(LoginRequiredMixin, CreateView):
    model = Bird
    form_class = BirdForm
    template_name = 'appves/crear_aves.html'
    success_url = reverse_lazy('home/')

class EditarAve(LoginRequiredMixin, UpdateView):
    model = Bird
    form_class = BirdForm
    template_name = 'appves/editar_ave.html'
    success_url = reverse_lazy('list_birds')

# class EliminarAve(DeleteView):
#     model = Bird
#     #success_url = reverse_lazy('list_birds')

#     def post(self, request, pk, *args, **kwargs):
#         ave = Bird.objects.get(id=pk)
#         ave.status = Status.objects.get(id=3)
#         ave.save()
#         return redirect('list_birds')

class EliminarAve(LoginRequiredMixin, DeleteView):
    model = Bird
    success_url = reverse_lazy('list_birds')

    def delete(self, request, *args, **kwargs):
        ave = self.get_object()
        ave.status = Status.objects.get(id=3)
        ave.save()
        return self.redirect_to_success_url()

class DetalleAve(DetailView):
    model = Bird
    template_name = 'appves/detalle_ave.html'
    context_object_name = 'ave'

class CargarAveAvistaje(LoginRequiredMixin, CreateView):
    model = LineaAvistaje
    form_class = LineaAvistajeForm
    template_name = 'appves/ave_avistaje.html'
    success_url = reverse_lazy('home')

    def get_initial(self):
            return {'id_avistaje': self.kwargs['pk']}
