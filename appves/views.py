from typing import Any
from django.http import HttpRequest, HttpResponse, JsonResponse
from django.http.request import HttpRequest
from django.http.response import HttpResponseBase
from django.shortcuts import redirect, render
from django.urls import reverse_lazy
from django.contrib.auth.decorators import login_required
from django.views.generic import View, ListView, CreateView, UpdateView, DeleteView, DetailView
from .models import Bird, Status, LineaAvistaje
from .forms import BirdForm, LineaAvistajeForm
import requests
import json
from urllib.parse import quote
import traceback


# Create your views here.
def biomas(request):
    return render(request, 'appves/biomas.html')

def glosario(request):
    return render(request, 'appves/glosario.html')

def lugares(request):
    return render(request, 'appves/lugares.html')

def lugares01(request):
    return render(request, 'appves/lugares01.html')

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


def nombre_cientifico(request):
    # Carga los datos desde el archivo birds.json
    with open('appves/fixtures/birds.json') as f:
        data = json.load(f)

    # Crea una lista para almacenar los nombres científicos
    scientific_names = [bird['fields'].get('nombre_cientifico') for bird in data if 'nombre_cientifico' in bird['fields']]

    # Comprueba si la lista está vacía
    if not scientific_names:
        print("La lista de nombres científicos está vacía. Verifique los datos en birds.json.")
        return render(request, 'appves/habitat.html', {'error_message': 'No se encontraron nombres científicos en los datos.'})

    # Ordena el scientific_names alfabéticamente
    sorted_scientific_name_list = sorted(scientific_names)

    print(sorted_scientific_name_list)

    # Usa la función render() para usar la plantilla birds.html
    return render(request, 'appves/habitat.html', {'sorted_scientific_name_list': sorted_scientific_name_list})





def get_usage_key(request):
    try:
        if request.method == "GET":
            # data = json.loads(request.body)  # Esta línea no es necesaria. Coméntala o bórrala
            scientific_name = request.GET.get('scientific_name')
            if not scientific_name:
                return JsonResponse({'error': 'El parámetro "scientific_name" es obligatorio.'}, status=400)
            scientific_name_encoded = quote(scientific_name)  # Codificar el nombre científico
            print("Desde la consola Django: " + scientific_name_encoded)
            url = f"https://api.gbif.org/v1/species/match?name={scientific_name_encoded}"
            response = requests.get(url)
            if response.status_code != 200:
                return JsonResponse({'error': f'Response from API was not 200, got {response.status_code}'}, status=500)
            data = response.json()
            if isinstance(data, list) and len(data) > 0:
                first_result = data[0]
                usage_key = first_result.get('usageKey')
                print("Desde la consola Django: " + str(usage_key))
                if usage_key is not None:
                    url = f"https://api.gbif.org/v1/species/{usage_key}/descriptions"
                    response = requests.get(url)
                    if response.status_code != 200:
                        return JsonResponse({'error': f'Response from API was not 200, got {response.status_code}'}, status=500)
                    data = response.json()
                    results = data.get('results', [])
                    region = "Desconocida"
                    for result in results:
                        if 'geographicCoverage' in result:
                            region = result['geographicCoverage']
                            break
                    return JsonResponse({'region': region}, status=200)
        return JsonResponse({'error': 'Método GET inválido.'}, status=400)
    except Exception as e:
        traceback.print_exc()  # Imprime la traza del error en la consola
        return JsonResponse({'error': 'Se produjo un error inesperado: ' + str(e)}, status=500)



class ListarBirds(ListView):
    model = Bird
    template_name = 'appves/listar_aves.html'
    context_object_name = 'aves'

    #  Se redefine el método get_queryset para que el listado de aves se muestre ordenado alfabéticamente por nombre
    def get_queryset(self):
        queryset = super().get_queryset()
        return queryset.order_by('nombre')

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

# class EliminarAve(DeleteView):
#     model = Bird
#     #success_url = reverse_lazy('list_birds')

#     def post(self, request, pk, *args, **kwargs):
#         ave = Bird.objects.get(id=pk)
#         ave.status = Status.objects.get(id=3)
#         ave.save()
#         return redirect('list_birds')

class EliminarAve(DeleteView):
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


class CargarAveAvistaje(CreateView):
    model = LineaAvistaje
    form_class = LineaAvistajeForm
    template_name = 'appves/ave_avistaje.html'
    success_url = reverse_lazy('home')

    def get_initial(self):
            return {'id_avistaje': self.kwargs['pk']}
