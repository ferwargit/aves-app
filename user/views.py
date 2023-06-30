#from django.core.paginator import _SupportsPagination
from django.http import HttpResponse
from django.shortcuts import redirect, render
from django.contrib.auth import authenticate, login, logout
from django.urls import reverse_lazy
from .models import User, Province, Avistaje
from .forms import AvistajeForm, CustomUserCreationForm, UserLoginForm
from django.contrib.auth.decorators import login_required
from django.views.generic import View, ListView, CreateView, UpdateView, DeleteView, DetailView

# Create your views here.
# @login_required










def quienes(request):
    return render(request, 'user/quienes.html')




def crear_cuenta(request):
    if request.method == 'GET':
        return render(request, 'user/create_user.html', {
            'form': CustomUserCreationForm
        })
    else:
        if request.POST['password1'] == request.POST['password2']:
            print(request.POST)
            
            user = User.objects.create_user(
                username=request.POST['username'],
                password=request.POST['password1'],
                email= request.POST['email'],
                province = Province.objects.get(id=request.POST['province'])
            )
            print(user)
    return HttpResponse("Cuenta creada con exito!!")

def login_user(request):
    if request.method == 'GET':
        return render(request, 'user/login_user.html', {
            'form': UserLoginForm
        })
    else:
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            print(user)
            login(request, user=user)
            print("login exitoso!!")
            return redirect('logeado')
        else:
            print(user)
            return HttpResponse("Usuario inexistente")

def logeado(request):
    return render(request, 'user/logeado_user.html')

def logout_user(request):
    logout(request)
    return redirect('home')

class CrearAvistaje(CreateView):
    model = Avistaje
    form_class = AvistajeForm
    template_name = 'user/crear_lista.html'
    success_url = reverse_lazy('listar_avistajes')


class ListarAvistajes(ListView):
    model = Avistaje
    template_name = 'user/lista_avistajes.html'
    context_object_name = 'avistajes'

    def get_queryset(self):
        self.queryset = Avistaje.objects.filter(id_user_id=self.request.user.pk)
        return self.queryset
