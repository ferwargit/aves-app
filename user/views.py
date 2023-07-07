from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.mixins import LoginRequiredMixin
from django.http import HttpResponse
from django.shortcuts import redirect, render
from django.urls import reverse_lazy
from django.views.generic import ListView, CreateView

from .forms import AvistajeForm, CustomUserCreationForm, UserLoginForm
from .models import Avistaje


def quienes(request):
    return render(request, 'user/quienes.html')

def create_user(request):
    if request.method == 'POST':
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, 'Te has registrado con éxito')
            return redirect('home')
    else:
        form = CustomUserCreationForm()
    return render(request, 'user/create_user.html', {'form': form})

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
    return render(request, 'appves/home.html')

def logout_user(request):
    logout(request)
    return redirect('home')


class CrearAvistaje(LoginRequiredMixin, CreateView):
    model = Avistaje
    form_class = AvistajeForm
    template_name = 'user/crear_lista.html'
    success_url = reverse_lazy('listar_avistajes')

class ListarAvistajes(LoginRequiredMixin, ListView):
    model = Avistaje
    template_name = 'user/lista_avistajes.html'
    context_object_name = 'avistajes'

    def get_queryset(self):
        self.queryset = Avistaje.objects.filter(id_user_id=self.request.user.pk)
        return self.queryset
